"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  const handleWhopSignup = () => {
    signIn("whop", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Crear Cuenta</CardTitle>
          <CardDescription className="text-center">
            Únete a nuestra comunidad premium
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleWhopSignup} className="w-full" size="lg">
            Registrarse con Whop
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Inicia sesión
            </Link>
          </div>

          <div className="text-xs text-center text-muted-foreground pt-4">
            Al registrarte, aceptas nuestros términos de servicio y política de privacidad
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
