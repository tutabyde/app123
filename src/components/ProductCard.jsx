import { Heart, Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover"
        />

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">

          <Heart
            size={18}
            className="text-gray-500"
          />

        </button>

      </div>

      <div className="space-y-3 p-4">

        <h3 className="font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-1">

          <Star
            size={16}
            fill="orange"
            color="orange"
          />

          <span className="text-sm">
            {product.rating}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-lg font-bold text-violet-700">
            S/ {product.price}
          </span>

          <button className="rounded-xl bg-violet-600 p-2 text-white">

            <ShoppingCart size={18} />

          </button>

        </div>

      </div>

    </article>
  );
}