function Vets({ producto, addToCart }) {

    const { id, name, image, description, price } = producto

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <img 
                            className="w- h-32 object-cover rounded-lg" 
                            src={`/img/${image}.jpg`} 
                            alt="imagen producto" />
                    </div>
                    <div className="text-center w-full" >
                        <h3 className="text-black fs-4 fw-bold text-uppercase mb-2 line-clamp-2">{name}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
                        <p className="text-green-600 font-bold text-xl mb-4">{price}</p>
                        <button
                            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded w-full transition-colors duration-200"
                            type="button"
                            onClick={() => addToCart(producto)}
                        >Agregar al carro</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vets;