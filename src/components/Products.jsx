import { useEffect } from "react";
import { Product } from "./Product";
import Shimmer from "./Shimmer";
export const Products = ({ updatedProducts }) => {
  return (
    <div className="products-wrapper">
      <div className="category-wrapper">
        <div className="products-category-heading" id="products">
          Man & Woman Fashion
        </div>
{
  !updatedProducts ?
  (
<Shimmer/>) :
       ( <div className="products-container">
          {
          updatedProducts.map((product) => {
            return (
              <Product
              
               
                image={product.image}  title={product.title} price={product.price}
                key={product.id}
              />
            );
          } ) }
        </div>)
        }
      </div>
    </div>
  );
};
