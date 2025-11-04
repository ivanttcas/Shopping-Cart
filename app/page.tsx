'use client'

import Image from "next/image";
import { db } from '../lib/db'
import { useEffect, useState } from "react";
import Menu from '../components/Menu'
import Vets from "@/components/Vets";

export default function Home() {

  const [data, setData] = useState(db)

  return (
    <>
      <Menu />

      <main>
        <h2>Nuestros Productos</h2>
        <div className="row mt-5" >
          {data.map((vet) => (
              <Vets 
                vet={vet}
              />  
            ))}
        </div>
      </main>
    </>
  );
}
