import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { cfgFirebase } from "./config";

//connect to fb:
firebase.initializeApp(cfgFirebase);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

//add new user to db
export const handleNewProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid, displayName, email } = userAuth;

  const userRef = firestore.doc(`users/${uid}`); //"users" collection created before in fb database
  //returns reference document with some build in methods(get/set data)

  const snapshot = await userRef.get(); //object returned with some data about user

  if (!snapshot.exists) {
    const timestamp = new Date().getTime();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef; //used to update local state of app(header fe)
};

export const addNewOrder = async (uid, cartData) => {
  if (!uid) return;

  const timestamp = new Date().getTime();

  const orderRef = firestore.doc(`userdata/${uid}/userorders/${timestamp}`);

  try {
    await orderRef.set({
      cartData: JSON.stringify(cartData),
    });
  } catch (error) {
    console.log(error);
  }
};
