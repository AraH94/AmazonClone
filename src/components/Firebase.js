// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyD3P-qr7Mrlg74BQymT7bykV2HYwbU8Gk8",
//   authDomain: "amz-clone-medium.firebaseapp.com",
//   databaseURL: "https://amz-clone-medium.firebaseio.com",
//   projectId: "amz-clone-medium",
//   storageBucket: "amz-clone-medium.appspot.com",
//   messagingSenderId: "769450879220",
//   appId: "1:769450879220:web:cbff61e0ee041531e456a1",
//   measurementId: "G-CZDBWXMWF7",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };


import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: "AIzaSyBfCBK7hnNghtnRKJipCeuSPz_n4zcE3vs",
	authDomain: "clone-fcb72.firebaseapp.com",
	projectId: "clone-fcb72",
	storageBucket: "clone-fcb72.appspot.com",
	messagingSenderId: "738725492249",
	appId: "1:738725492249:web:545c276fe34802df5e1c88",
	measurementId: "G-53Z9EJWEZC"
});

const auth = firebase.auth();

export { auth };

// /*
// instal in terminal: npm install firebase
// */