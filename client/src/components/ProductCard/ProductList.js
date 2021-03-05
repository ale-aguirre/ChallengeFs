import { ProductCard } from "./Product";
import React, { useMemo } from "react";
import { getItemsByType } from "./getItemsByType";

export default function MediaCard({ type }) {
  const product = useMemo(() => getItemsByType(type), [type]);

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="row row-cols-1 row-cols-md-5 contenedor">
          {product.map((elment) => (
            <ProductCard key={elment.id} {...elment} />
          ))}
        </div>
      </div>
    </>
  );
}
