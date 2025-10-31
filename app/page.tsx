import Image from "next/image";
import { ProductList} from '../lib/db'
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState(ProductList)

  return (
    <>
      
    </>
  );
}
