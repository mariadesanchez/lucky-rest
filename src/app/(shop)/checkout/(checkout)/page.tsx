import Link from "next/link";

import { Title } from "@/components";
import Image from "next/image";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from './ui/PlaceOrder';
import {
  IoCartOutline,
  
} from "react-icons/io5";

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verifica Tu Compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            {/* <span className="text-xl">Ajustar elementos</span> */}
            <Link
              href="/cart"
           
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
            <IoCartOutline size={30} mb={3} className="text-green-600" />
              <span className="ml-3 mb-3 text-xl text-green-600"> Modificar Carrito</span>
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
