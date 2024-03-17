
export const Product = ({title, price, image}) => {
    return (
      <div className="product-card">
       
        <div className="product-image-div">
          <img
            src={image}
            alt="Product Image"
            className='product-image'
          />
        </div> <h4 className="product-name">{title}</h4>
        <p className="product-price">
          Price: <span className="number-text">${price}</span>
        </p>
        <div className="buttons-section">
         <button  className="buy-now-btn">
            Buy Now
          </button> 
         
        </div>
      </div>
    );
}