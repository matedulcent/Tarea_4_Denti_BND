import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function listProducts(_req:any, res:any) {
    try {
        const products = await prisma.product.findMany({
            orderBy: { id: 'asc' },
        });
        return res.status(200).json(products);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

export async function createProduct(req:any, res:any) {
    try {
        const { title, description, price, imageUrl } = req.body;

        // No validations complejas según consigna; solo comprobar existencia mínima
        if (!title || price === undefined) {
            return res.status(400).json({ error: 'title y price son requeridos' });
        }

        const parsedPrice = Number(price);
        const newProduct = await prisma.product.create({
            data: {
                title,
                description: description ?? '',
                price: parsedPrice,
                imageUrl: imageUrl ?? '',
            },
        });

        return res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
