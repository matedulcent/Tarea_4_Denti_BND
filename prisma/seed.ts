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
                title: 'Lapiz',
                description: 'HB',
                price: 10.5,
                imageUrl: 'https://www.faber-castell.com.ar/-/media/Products/Product-Repository/CASTELL-9000/24-24-01-Pencil/119000-Graphite-pencil-CASTELL-9000-HB/Images/119000_0_PM99.ashx?bc=ffffff&as=0&h=900&w=900&sc_lang=es-AR&hash=B8E204FF550A2032A871C4975C0136D9',
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
