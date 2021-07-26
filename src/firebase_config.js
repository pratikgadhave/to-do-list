import firebase from "firebase/app";

import "firebase/analytics";


import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA-l4hwClwXiymHFlOAEdG22Hjzsq3EmH4",
    authDomain: "to-do-list-642dc.firebaseapp.com",
    projectId: "to-do-list-642dc",
    storageBucket: "to-do-list-642dc.appspot.com",
    messagingSenderId: "1079564562663",
    appId: "1:1079564562663:web:54bdba52e9abe17e7c7242"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export const auth=firebase.auth()
  export {db};