
const products = [
    {
        id: 1,
        name: 'Headphones',
        href: '#',
        imageSrc: 'https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/cat2-1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        //   price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Mobiles',
        href: '#',
        imageSrc: 'https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/cat3-1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        //   price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Leptops',
        href: '#',
        imageSrc: 'https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/cat5-1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        //   price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Smart Watches',
        href: '#',
        imageSrc: 'https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/cat1-1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        //   price: '$35',
        color: 'Black',
    },
]

export default function Categories() {
    return (
        <div className="container">
            <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

                <div className=" mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-70">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center ">
                                <button className="button rounded-pill ">
                                    {product?.name}
                                </button>
                                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                            </div>
                            {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
