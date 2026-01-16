import { WhopAPI } from "@whop-apps/sdk";

if (!process.env.WHOP_API_KEY) {
  throw new Error("WHOP_API_KEY is not defined");
}

export const whop = new WhopAPI({
  apiKey: process.env.WHOP_API_KEY,
});

export async function verifyWhopMembership(userId: string) {
  try {
    const memberships = await whop.retrieveMemberships({
      user_id: userId,
    });

    return memberships.data.filter((m) => m.status === "active");
  } catch (error) {
    console.error("Error verifying Whop membership:", error);
    return [];
  }
}

export async function getUserWhopProfile(userId: string) {
  try {
    const user = await whop.retrieveUser(userId);
    return user;
  } catch (error) {
    console.error("Error retrieving Whop user:", error);
    return null;
  }
}
