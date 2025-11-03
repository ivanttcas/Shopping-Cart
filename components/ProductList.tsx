import React from 'react'

export default function ProductList({store}) {

    const {id, name, img, description, price } = store

    return (
        <div>
            <div>
                <img src="" alt="Imagen del Producto" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <button type='button'>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
