const productos = [
    {
        id: 1,
        nombre: 'Mini Mesa de Billar',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51-FHLkWeRL._AC_SX679_.jpg',
        precio: 30000,
        category: 'minijuegos',
        descripcion: 'Mesa de billar mini de 45cm de largo x 15cm de ancho, incluye dos tacos de billar',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Mini Metegol',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61PIYEyRyhL._AC_SL1024_.jpg',
        precio: 22000,
        category: 'minijuegos',
        descripcion: 'Mesa de billar mini de 45cm de largo x 15cm de ancho, incluye dos tacos de billar',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Mini Air Hockey',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61oUotVIGsL._AC_SL1500_.jpg',
        precio: 20000,
        category: 'minijuegos',
        descripcion: 'Mesa de billar mini de 45cm de largo x 15cm de ancho, incluye dos tacos de billar',
        stock: 10
    },
    {
        id: 4,
        nombre: 'Mini Pong Arcade',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Eg5wXQuPL._SL1500_.jpg',
        precio: 28000,
        category: 'minijuegos',
        descripcion: 'Mesa de billar mini de 45cm de largo x 15cm de ancho, incluye dos tacos de billar',
        stock: 10
    }
];

export default productos;

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productos.filter(prod => prod.category === categoryId))
        })
    })
}