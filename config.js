import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDgkTPLWTDhK0xywIMwerJzYHHkP44oT7I",
    authDomain: "wilyapp-7074b.firebaseapp.com",
    projectId: "wilyapp-7074b",
    storageBucket: "wilyapp-7074b.appspot.com",
    messagingSenderId: "985534978718",
    appId: "1:985534978718:web:b70a2122fd0a7e7a03f98f"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();