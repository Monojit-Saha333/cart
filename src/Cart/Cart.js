import React, { Component } from "react";
import CartItem from "../CartItem";
import "../Cart/Cart.css";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "watch",
          quantity: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Laptop",
          quantity: 4,
          img: "",
          id: 3,
        },
        {
          price: 999,
          title: "Mobile Phone",
          quantity: 10,
          img: "",
          id: 2,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log("Please increase the quantity of the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
      product: products,
    });
    //console.log("index", index);
  };
  handleDecreaseQuantity = (product) => {
    console.log("Please Decrease the quantity of the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].quantity > 0) {
      products[index].quantity = products[index].quantity - 1;
      this.setState({
        product: products,
      });
    }
    //console.log("index", index);
  };

  render() {
    const { products } = this.state;
    return (
      <div id="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              OnIncreaseQuantity={this.handleIncreaseQuantity}
              OnDecreaseQuantity={this.handleDecreaseQuantity}
            ></CartItem>
          );
        })}
      </div>
    );
  }
}

export default Cart;
