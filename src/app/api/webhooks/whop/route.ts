import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function verifyWhopSignature(payload: string, signature: string): boolean {
  const secret = process.env.WHOP_WEBHOOK_SECRET;
  if (!secret) return false;

  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("x-whop-signature");
    const payload = await req.text();

    if (!signature || !verifyWhopSignature(payload, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);

    switch (event.type) {
      case "membership.created":
        await handleMembershipCreated(event.data);
        break;

      case "membership.updated":
        await handleMembershipUpdated(event.data);
        break;

      case "membership.deleted":
        await handleMembershipDeleted(event.data);
        break;

      default:
        console.log("Unhandled webhook event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function handleMembershipCreated(data: any) {
  const user = await prisma.user.findUnique({
    where: { whopUserId: data.user_id },
  });

  if (!user) {
    console.error("User not found for membership:", data.user_id);
    return;
  }

  await prisma.membership.create({
    data: {
      userId: user.id,
      whopMembershipId: data.id,
      productId: data.product_id,
      planId: data.plan_id,
      status: data.status,
      validUntil: data.valid_until ? new Date(data.valid_until) : null,
    },
  });
}

async function handleMembershipUpdated(data: any) {
  await prisma.membership.update({
    where: { whopMembershipId: data.id },
    data: {
      status: data.status,
      validUntil: data.valid_until ? new Date(data.valid_until) : null,
    },
  });
}

async function handleMembershipDeleted(data: any) {
  await prisma.membership.update({
    where: { whopMembershipId: data.id },
    data: {
      status: "cancelled",
    },
  });
}
