import React, { useEffect, useState } from "react";

import { CircularProgress } from "@material-ui/core";

import { firestore } from "../../firebase/utils";

import Card from "../UI/Card";
import classes from "./Orders.module.css";
import Caption from "../UI/Caption";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

import OrderItem from "./OrderItem";

const Orders = () => {
  const dispatch = useDispatch();
  const orderListRender = useSelector((state) => state.ui.orderListRender);

  const [allOrders, setAllOrders] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (orderListRender) {
        try {
          await firestore
            .collection("orders")
            .doc("D3GQ2qS2JPe6lwdhTarUo31QTJO2")
            .collection("userorders")
            .get()
            .then((snapshot) => {
              if (snapshot.empty && snapshot.metadata.fromCache) {
                throw new Error();
              }
              const allOrders = snapshot.docs.map((doc) => {
                const cartData = JSON.parse(doc.data().cartData);
                return {
                  cartData,
                  id: doc.id,
                };
              });
              setAllOrders(allOrders);
              console.log(allOrders);
            });
        } catch (err) {
          console.log(err);
          setErrorMsg(
            "Something went wrong. Please check Your internet connection or try again later."
          );
        }
      }
    };

    fetchAllBooks();
    dispatch(uiActions.setOrderListRender(true));
  }, [dispatch, orderListRender]);

  const orderList = allOrders.map((order) => (
    <OrderItem
      key={order.id}
      id={order.id}
      totalAmount={order.cartData.totalAmount}
      orderQuantity={order.cartData.items.length}
    />
  ));

  return (
    <Card>
      <div className={classes.scroll}>
        <Caption>order history</Caption>
        {allOrders.length > 0 ? (
          <table className={classes.orders}>
            <tbody>
              <tr className={classes.tableheader}>
                <th>Date</th>
                <th>Nr</th>
                <th>Price</th>
              </tr>
              {orderList}
            </tbody>
          </table>
        ) : (
          <React.Fragment>
            {errorMsg !== "" && <h3 className={classes.error}>{errorMsg}</h3>}
            {errorMsg === "" && (
              <div
                style={{
                  position: "fixed",
                  left: "calc(50% - 2rem)",
                  top: "calc(50% - 0.5rem)",
                }}
              >
                <CircularProgress size={"4rem"} color={"secondary"} />
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </Card>
  );
};

export default Orders;
