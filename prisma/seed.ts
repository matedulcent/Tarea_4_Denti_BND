// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Borra los productos existentes para no duplicar
    await prisma.product.deleteMany({});

    // Agrega productos iniciales
    const productos = await prisma.product.createMany({
        data: [
            {
                title: 'Producto A',
                description: 'Mock A',
                price: 10.5,
                imageUrl: '',
            },
            {
                title: 'Producto B',
                description: 'Mock B',
                price: 23.0,
                imageUrl: '',
            },
            {
                title: 'Producto C',
                description: 'Mock C',
                price: 7.99,
                imageUrl: '',
            },
        ],
    });

    console.log(`Seed completo: ${productos.count} productos creados.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
