# Development

Pasos para levantar la app en desarrollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Crear una copia de el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando `npm install`
5. Ejecutar el comando `npm run dev`
6. Ejecutar estos comandos de prisma

```
    npx prisma migrate dev
    npx prisma generate
```

7. Ejecutar el SEED para localhost:3000/api/seed

## Nota: Usuario por defecto

**email** : demo@example.com
**contraseña** : 123456

# Prisma commnads

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage
