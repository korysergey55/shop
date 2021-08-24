import React from "react";
import { ListItemContainer } from "./LaptopListItemStyled";

import { useDispatch } from "react-redux";
import {
 useHistory,
 useLocation,
 useRouteMatch,
 withRouter,
} from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartActions";
import Notification from "../../notify";

const LaptopListItem = ({ laptop }) => {
 const dispatch = useDispatch();
 const location = useLocation();
 const history = useHistory();
 const match = useRouteMatch();

 const addProduct = () => {
  dispatch(addToCart(laptop));
  Notification("success");
 };

 const openDetails = () => {
  history.push({
   pathname: `${match.path}/${laptop.id}`,
   state: { from: location.pathname },
  });
 };

 return (
  <ListItemContainer>
   <div className="content">
    <h3 className="listItemTitle">{laptop.name}</h3>
    <div className="imageWrapper">
     <img
      src={laptop.image}
      alt={laptop.name}
      className="listItemImage"
      onClick={openDetails}
     />
    </div>
    <p className="priceTitle">
     {laptop.isSale ? (
      <>
       <span className="withSalePrice">{laptop.price - 1000}</span>{" "}
       <span className="withoutSalePrice">{laptop.price}</span>
      </>
     ) : (
      <span className="withoutSalePrice">{laptop.price}</span>
     )}
     {" UAH"}
    </p>
    <div className="options">
     <button className="detailsButton" onClick={openDetails}>
      Details
     </button>
     <button onClick={addProduct} className="addToCartButton">
      Add to cart
     </button>
    </div>
   </div>
  </ListItemContainer>
 );
};

export default withRouter(LaptopListItem);
