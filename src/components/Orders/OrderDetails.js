import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import { firestore } from "../../firebase/utils";

import Card from "../UI/Card";
import classes from "./OrderDetails.module.css";
import Caption from "../UI/Caption";
import Table from "../UI/Table";
import TableHeader from "../UI/TableHeader";
import TableRow from "../UI/TableRow";

import OrderDetailsItem from "./OrderDetailsItem";

import { useSelector } from "react-redux";

const OrdersDetails = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [orderDetails, setOrderDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const { id } = currentUser;
  const orderId = props.location.pathname.substring(
    props.location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        await firestore
          .collection("orders")
          .doc(id)
          .collection("userorders")
          .get()
          .then((snapshot) => {
            if (snapshot.metadata.fromCache) {
              throw new Error("no internet");
            }
            let cartData;
            snapshot.docs.forEach((doc) => {
              if (doc.id === orderId) {
                cartData = JSON.parse(doc.data().cartData);
                setOrderDetails(cartData);
              }
            });
            if (!cartData) {
              throw new Error("no orders");
            }
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
    };

    fetchOrderDetails();
  }, [id, orderId]);

  const orderedItems = orderDetails.items
    ? orderDetails.items.map((item) => (
        <OrderDetailsItem
          key={item.id}
          name={item.name}
          price={item.price}
          type={item.type}
          amount={item.amount}
        />
      ))
    : [];

  return (
    <Card>
      <div className={classes.scroll}>
        <Caption>order details</Caption>
        {orderedItems.length > 0 ? (
          <Table>
            <tbody>
              <TableHeader>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
              </TableHeader>
              {orderedItems}
              <TableRow className={classes.finalrow}>
                <td></td>
                <td className={classes.totalAmount}>
                  ${orderDetails.totalAmount.toFixed(2)}
                </td>
                <td></td>
              </TableRow>
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

export default withRouter(OrdersDetails);
