import React, { Component } from "react";
import "./CartItem.css";
class CartItem extends Component {
  constructor() {
    super();
    /* this.state={productName:'Nokia Mobile',
                    price:1000,
                    quantity:1
                }*/
    this.img = {
      add: "https://static.thenounproject.com/png/586769-200.png",
      reduce:
        "https://cdn2.iconfinder.com/data/icons/thin-ui/100/minus-512.png",
      del: "https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300098/96768441-trash-bin-simple-icon-on-transparent-background-.jpg",
    };
  }
  /* increase = () => {
    this.setState((prevState) => {
      return { quantity: prevState.quantity + 1 };
    });
    console.log("quantity" + this.state.quantity);
  };
  reduce = () => {
    if (this.state.quantity > 0) {
      this.setState((prevState) => {
        return { quantity: prevState.quantity - 1 };
      });
    }
    ///console.log("quantity"+this.state.quantity);
  };*/
  render() {
    const { product, OnIncreaseQuantity, OnDecreaseQuantity } = this.props;
    const { price, title, quantity, img, id } = product;
    return (
      <div className="card-item-box" id="card-item-box">
        <div id="left-div">
          <img
            src={
              "https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            }
            alt=""
          ></img>
        </div>
        <div id="right-div">
          <ul id="Product-details" style={{ listStyleType: "none" }}>
            <li>Title : {title}</li>
            <li>Price : {price}</li>
            <li>quantity : {quantity}</li>
          </ul>
          <div className="action-buttons">
            <img
              src={this.img.add}
              alt="icon"
              onClick={() => OnIncreaseQuantity(product)}
              id="increase"
            ></img>
            <img
              src={this.img.reduce}
              alt="icon"
              onClick={() => OnDecreaseQuantity(product)}
              id="reduce"
            ></img>
            <img src={this.img.del} alt="icon" id="delete"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default CartItem;
