import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyAZxpStu-cj4ZcrrpElmJZu9BSVMAdaeE4",
  authDomain: "test-e4c21.firebaseapp.com",
  projectId: "test-e4c21",
  storageBucket: "test-e4c21.appspot.com",
  messagingSenderId: "3562689817",
  appId: "1:3562689817:web:6659d710c967a656a9a188",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export default firestore;
