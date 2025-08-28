import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productImage from './assets/product.jpg';

function Cards({ addToCart }) {
  // هنا بنحط بيانات المنتجات
  const products = [
    {
      id: 1,
      title: "Card title 1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: productImage,
      price: 100
    },
    {
      id: 2,
      title: "Card title 2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: productImage,
      price: 150
    },
    {
      id: 3,
      title: "Card title 3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: productImage,
      price: 200
    },
    {
      id: 4,
      title: "Card title 4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: productImage,
      price: 250
    }
  ];

  return (
    <div className="container">
      <div className="row g-4">
        {products.map(product => (
          <div className="col-md-3 px-2" key={product.id}>
            <div className="card" style={{ width: "17rem" }}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price} جنيه</strong></p>
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  أضف إلى السلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;