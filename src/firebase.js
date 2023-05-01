import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDHxHBAKUayOobTV7w_QqCen6WxTKAFDC0",
    authDomain: "mycrud-aed38.firebaseapp.com",
    projectId: "mycrud-aed38",
    storageBucket: "mycrud-aed38.appspot.com",
    messagingSenderId: "442828046065",
    appId: "1:442828046065:web:9af071d2b5fdc216bbb350"
  };
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();