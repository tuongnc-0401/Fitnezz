import bcrypt from 'bcryptjs'
const data =
{
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            gender: false,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            gender: true
        },
    ],
    products: [
        {

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 120,

            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 100,

            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 220,

            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {

            name: 'Nike Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 78,

            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {

            name: 'Puma Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 65,

            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 139,

            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ]
}

export default data