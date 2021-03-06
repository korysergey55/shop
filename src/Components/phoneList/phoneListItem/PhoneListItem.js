import React from "react";
import { PhoneLi } from "./PhoneListItemStyled";
import Notification from '../../notify'
import { useDispatch} from "react-redux";
import {
 useHistory,
 useLocation,
 useRouteMatch,
 withRouter,
} from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartActions";

const PhoneListItem = ({ phone }) => {
 const dispatch = useDispatch();
 const history = useHistory();
 const location = useLocation();
 const match = useRouteMatch();

 const addProduct = () => {
  dispatch(addToCart(phone));
   Notification("addProductToCartSuccess");
 };

 const openDetails = () => {
  history.push({
   pathname: `${match.path}/${phone.id}`,
   state: { from: location.pathname },
  });
 };

 return (
  <PhoneLi>
   <div className="content">
    <h3 className="listItemTitle">{phone.name}</h3>
    <div className="imageWrapper">
     <img
      src={phone.image}
      alt={phone.name}
      className="listItemImage"
      onClick={openDetails}
     />
    </div>

    <p className="priceTitle">
     {phone.isSale ? (
      <>
       <span className="withSalePrice"> {phone.price}</span>{" "}
       <span className="withoutSalePrice">
        {(phone.price - phone.price / 10).toFixed(0)}
       </span>
      </>
     ) : (
      <span className="withoutSalePrice">{phone.price}</span>
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
  </PhoneLi>
 );
};

export default withRouter(PhoneListItem);
