import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBJwHEGpOPDM0D5qbA3azs0wyex87r-4wY",
  authDomain: "wiity-86ccb.firebaseapp.com",
  databaseURL: "https://wiity-86ccb.firebaseio.com",
  projectId: "wiity-86ccb",
  storageBucket: "wiity-86ccb.appspot.com",
  messagingSenderId: "320191102337"
};
const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;
