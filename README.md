# Whop SaaS Community

Plataforma SaaS completa con funcionalidades de comunidad integrada, desarrollada con Next.js 14 y Whop.

## Características

- Autenticación con Whop OAuth
- Sistema de membresías integrado con Whop
- Dashboard de usuario personalizado
- Comunidad con posts, comentarios y likes
- Webhooks para sincronización automática
- UI moderna con Tailwind CSS y shadcn/ui
- Base de datos PostgreSQL con Prisma ORM

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **UI**: React, TailwindCSS, shadcn/ui
- **Base de datos**: PostgreSQL + Prisma
- **Autenticación**: NextAuth.js + Whop OAuth
- **Pagos/Membresías**: Whop SDK
- **TypeScript**: Para type safety

## Instalación

### 1. Clonar el repositorio

```bash
git clone <tu-repo>
cd whop
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y completa las variables:

```bash
cp .env.example .env
```

Necesitarás obtener las credenciales de Whop desde tu [Whop Developer Dashboard](https://whop.com/apps):

```env
# Whop Configuration
NEXT_PUBLIC_WHOP_APP_ID=tu_app_id
WHOP_API_KEY=tu_api_key
WHOP_CLIENT_ID=tu_client_id
WHOP_CLIENT_SECRET=tu_client_secret
WHOP_WEBHOOK_SECRET=tu_webhook_secret

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/whop_saas"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=genera_un_secret_aleatorio

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Whop SaaS Community"
```

### 4. Configurar base de datos

```bash
# Inicializar base de datos
npm run db:push

# (Opcional) Abrir Prisma Studio para ver los datos
npm run db:studio
```

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Configuración de Whop

### 1. Crear una App en Whop

1. Ve a [Whop Developer Portal](https://whop.com/apps)
2. Crea una nueva aplicación
3. Configura los URLs de callback:
   - Callback URL: `http://localhost:3000/api/auth/callback/whop`
   - Webhook URL: `http://localhost:3000/api/webhooks/whop`

### 2. Configurar Webhooks

En tu Whop App, habilita los siguientes eventos:

- `membership.created`
- `membership.updated`
- `membership.deleted`

### 3. Configurar Productos y Planes

1. Crea productos en tu Whop dashboard
2. Define planes de suscripción (Básico, Pro, Enterprise)
3. Los IDs de productos se usarán automáticamente cuando los usuarios compren

## Estructura del Proyecto

```
whop/
├── prisma/
│   └── schema.prisma          # Schema de base de datos
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth endpoints
│   │   │   ├── posts/         # API de posts
│   │   │   └── webhooks/      # Whop webhooks
│   │   ├── community/         # Páginas de comunidad
│   │   ├── dashboard/         # Dashboard de usuario
│   │   ├── login/             # Página de login
│   │   ├── register/          # Página de registro
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── ui/                # Componentes UI reutilizables
│   │   └── providers.tsx      # Providers de la app
│   └── lib/
│       ├── prisma.ts          # Cliente de Prisma
│       ├── whop.ts            # SDK de Whop
│       └── utils.ts           # Utilidades
├── .env.example               # Variables de entorno ejemplo
├── package.json
└── README.md
```

## Uso

### Autenticación

Los usuarios pueden iniciar sesión usando su cuenta de Whop:

1. Click en "Iniciar sesión" o "Comenzar"
2. Redirige a Whop OAuth
3. Autoriza la aplicación
4. Redirige de vuelta al dashboard

### Dashboard

El dashboard muestra:

- Estado de membresía activa
- Estadísticas de la comunidad
- Acceso rápido a funciones principales

### Comunidad

Los usuarios pueden:

- Crear posts
- Comentar en posts
- Dar likes
- Ver actividad de la comunidad

### Webhooks

Los webhooks de Whop mantienen sincronizado el estado de las membresías:

- Cuando un usuario compra: se crea la membresía
- Cuando se actualiza: se sincroniza el estado
- Cuando se cancela: se marca como inactiva

## Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega

```bash
npm run build
```

### Otros Proveedores

La aplicación es compatible con cualquier plataforma que soporte Next.js:

- Railway
- Render
- DigitalOcean App Platform
- AWS/Google Cloud/Azure

## Scripts Disponibles

```bash
npm run dev          # Ejecutar en desarrollo
npm run build        # Build para producción
npm run start        # Ejecutar build de producción
npm run lint         # Ejecutar linter
npm run db:push      # Sincronizar schema con DB
npm run db:studio    # Abrir Prisma Studio
npm run db:generate  # Generar cliente Prisma
```

## Próximas Funcionalidades

- [ ] Chat en tiempo real
- [ ] Notificaciones push
- [ ] Sistema de roles y permisos
- [ ] Analytics del dashboard
- [ ] Upload de archivos/imágenes
- [ ] Búsqueda avanzada de posts
- [ ] Sistema de menciones (@usuario)
- [ ] Modo oscuro

## Soporte

Para problemas o preguntas:

1. Revisa la documentación de [Whop](https://docs.whop.com)
2. Revisa los issues del repositorio
3. Crea un nuevo issue con detalles

## Licencia

MIT
