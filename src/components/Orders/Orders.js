import React, { useEffect, useState } from "react";

import { CircularProgress } from "@material-ui/core";

import { firestore } from "../../firebase/utils";

import Card from "../UI/Card";
import classes from "./Orders.module.css";
import Caption from "../UI/Caption";
import Table from "../UI/Table";
import TableHeader from "../UI/TableHeader";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux-store/ui-slice";

import OrderItem from "./OrderItem";

const Orders = () => {
  const dispatch = useDispatch();
  const orderListRender = useSelector((state) => state.ui.orderListRender);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [allOrders, setAllOrders] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const { id } = currentUser;

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (orderListRender) {
        try {
          await firestore
            .collection("userdata")
            .doc(id)
            .collection("userorders")
            .get()
            .then((snapshot) => {
              if (snapshot.metadata.fromCache) {
                throw new Error("no internet");
              }
              if (snapshot.empty) {
                throw new Error("no orders");
              }
              const allOrders = snapshot.docs.map((doc) => {
                const cartData = JSON.parse(doc.data().cartData);
                return {
                  cartData,
                  id: doc.id,
                };
              });
              setAllOrders(allOrders);
            });
        } catch (err) {
          if (err.message === "no internet") {
            setErrorMsg(
              "Something went wrong. Please check Your internet connection or try again later."
            );
          }
          if (err.message === "no orders") {
            setErrorMsg("No order has been made yet!");
          }
        }
      }
    };

    fetchAllBooks();
    dispatch(uiActions.setOrderListRender(true));
  }, [dispatch, orderListRender, id]);

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
          <Table>
            <tbody>
              <TableHeader>
                <th>Date</th>
                <th>Amount</th>
                <th>Price</th>
              </TableHeader>
              {orderList}
            </tbody>
          </Table>
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
