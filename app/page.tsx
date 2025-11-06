'use client'

import Image from "next/image";
import { producto } from '../data/producto'
import { useEffect, useState } from "react";
import Menu from '../components/Menu'
import Vets from "@/components/Vets";

export default function Home() {

  const [data, setData] = useState(producto)
  const [cart, setCart] = useState([])

  return (
    <>
      <Menu />

      <main className="container-xl mt-5">
        <h2 className="text-center text-3xl">Nuestros Productos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" >
          {data.map((producto) => (
              <Vets 
                key={producto.id}
                producto={producto}
                setCart={setCart}
              />  
            ))}

        </div>
      </main>
    </>
  );
}
