import Link from "next/link";
import { ArrowRight, Users, Zap, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Whop SaaS</div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Iniciar sesión</Button>
            </Link>
            <Link href="/register">
              <Button>Comenzar</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tu Comunidad Premium
            <span className="block text-primary mt-2">Potenciada por Whop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Accede a contenido exclusivo, conecta con miembros premium y crece en nuestra comunidad
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Únete ahora <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Conocer más
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Todo lo que necesitas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Acceso Instantáneo</CardTitle>
                <CardDescription>
                  Comienza de inmediato con nuestra integración de Whop
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Comunidad Exclusiva</CardTitle>
                <CardDescription>
                  Conecta con miembros premium de todo el mundo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Foros y Chat</CardTitle>
                <CardDescription>
                  Participa en discusiones y chat en tiempo real
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Seguro y Confiable</CardTitle>
                <CardDescription>
                  Pagos seguros a través de Whop
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Planes para todos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Básico</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">$9</span>/mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li>✓ Acceso a la comunidad</li>
                  <li>✓ Contenido básico</li>
                  <li>✓ Soporte estándar</li>
                </ul>
                <Button className="w-full">Seleccionar</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">$29</span>/mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li>✓ Todo en Básico</li>
                  <li>✓ Contenido premium</li>
                  <li>✓ Chat privado</li>
                  <li>✓ Soporte prioritario</li>
                </ul>
                <Button className="w-full">Seleccionar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">$99</span>/mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li>✓ Todo en Pro</li>
                  <li>✓ Contenido exclusivo</li>
                  <li>✓ Llamadas 1-on-1</li>
                  <li>✓ Soporte dedicado</li>
                </ul>
                <Button className="w-full">Seleccionar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Whop SaaS Community. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
