'use client'

import Image from "next/image";
import { ProductList} from '../lib/db'
import { useState } from "react";
import Menu from '../components/Menu'

export default function Home() {

  const [data, setData] = useState(ProductList)

  return (
    <>
      <div>
        <Menu/>
      </div>
    </>
  );
}
