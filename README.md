# Graphia - Red Social de Arte con IA

Comunidad para creadores de contenido visual generado con inteligencia artificial.

## Deploy en Railway

### Opción 1: Static Site (Recomendado)

1. Sube el código a GitHub
2. Crea nuevo proyecto en Railway
3. Selecciona "Deploy from GitHub repo"
4. Railway detectará automáticamente el `package.json`
5. El build generará la carpeta `dist/` con archivos estáticos

Variables de entorno (ninguna necesaria para static):
```
NODE_ENV=production
```

### Opción 2: Con Dockerfile

El proyecto incluye un `Dockerfile` para mayor control.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
```

Los archivos estáticos se generarán en `dist/`.

## Estructura

- `/` - Home con timeline
- `/profile` - Perfil de usuario
- `/gallery` - Galería de arte
