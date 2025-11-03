import React from 'react'
import Link from 'next/link'

export default function Menu() {



    return (
        <>
            <header>
                <nav>
                    <div className='container'>
                        <Link href='/'>
                            <img src="" alt="Logo Vida Animal" />
                            <span>Vida Animal</span>
                        </Link>

                        <button type='button'>
                            <span></span>
                        </button>

                        <div>
                            <ul>
                                <li><Link href='/'>Inicio</Link></li>
                                <li><Link href='/'>Servicios</Link></li>
                                <li><Link href='/'>Galeria de Mascotas</Link></li>
                                <li><Link href='/'>Productos</Link></li>
                                <li><Link href='/'>Contactanos</Link></li>
                                <li><Link href='/'>Veterinaria</Link></li>
                            </ul>
                            <Link href='/'>
                                🦖 Carrito
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
