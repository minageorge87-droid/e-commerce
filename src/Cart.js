function Cart({ cart }) {
  return (
    <div className="container my-5">
      <h2>سلة المشتريات</h2>

      {cart.length === 0 ? (
        <p>السلة فاضية 👌</p>
      ) : (
        <div className="row g-4">
          {cart.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price} جنيه</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart;