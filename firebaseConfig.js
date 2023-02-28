import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyDOGlSVcjLTMxcnvQh3v_ZnLI8va-3dOy8",
    authDomain: "sparta-myhoneytip-won-c2fbd.firebaseapp.com",
    projectId: "sparta-myhoneytip-won-c2fbd",
    storageBucket: "sparta-myhoneytip-won-c2fbd.appspot.com",
    messagingSenderId: "233731661224",
    appId: "1:233731661224:web:502343de6303da12a9119d",
    measurementId: "G-92R1V8TR9F"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()