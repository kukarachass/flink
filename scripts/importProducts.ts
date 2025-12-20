import data from './products.json'
import { prisma } from '@/lib/prisma'

async function main() {
    for (const product of data.products) {
        await prisma.product.create({
            data: {
                name: product.name,
                price: product.price,
                category: product.category,
                stock: product.stock,
                image: product.image,
                unit: product.unit,
                cartUnit: product.cartUnit,
                numericalUnit: product.numericalUnit,
                description: product.description,
                shortDescription: product.shortDescription,
                discount: product.discount,
                composition: product.composition,
                nutrition: product.nutrition, // теперь законно
            },
        })
    }

    console.log('✅ Все продукты импортированы!')
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())