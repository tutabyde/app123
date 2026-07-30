import { Flame } from "lucide-react";

import { products } from "../data/products";

import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section className="mt-8">

      <div className="mb-4 flex items-center gap-2">

        <Flame
          className="text-orange-500"
          size={22}
        />

        <h2 className="text-xl font-bold">
          Ofertas del día
        </h2>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}