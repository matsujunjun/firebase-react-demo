import firebase from "firebase/app";
import "firebase/firestore";
import config from "config";

// すでにfirebase.appsが定義済みならそれを利用して、未定義なら初期化する
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);

const db = app.firestore();

export default db;
