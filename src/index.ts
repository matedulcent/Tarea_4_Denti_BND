import express from 'express';
import cors from 'cors';
import productRouter from './routes/product.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);

app.get('/', (_req, res) => {
    res.send({ ok: true, message: 'Backend Gallery API' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
