// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'genzaitimer-debfe',
    appId: '1:595171650397:web:bec3a97e78ab10803516b4',
    databaseURL: 'https://genzaitimer-debfe-default-rtdb.firebaseio.com',
    storageBucket: 'genzaitimer-debfe.appspot.com',
    apiKey: 'AIzaSyDCjjbp-olRz7Ns4pjSGABKuTFijhAR7EE',
    authDomain: 'genzaitimer-debfe.firebaseapp.com',
    messagingSenderId: '595171650397',
    measurementId: 'G-ZQN33V6SHR',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCjjbp-olRz7Ns4pjSGABKuTFijhAR7EE",
  authDomain: "genzaitimer-debfe.firebaseapp.com",
  databaseURL: "https://genzaitimer-debfe-default-rtdb.firebaseio.com",
  projectId: "genzaitimer-debfe",
  storageBucket: "genzaitimer-debfe.appspot.com",
  messagingSenderId: "595171650397",
  appId: "1:595171650397:web:7dcc1db21f1c01bf3516b4",
  measurementId: "G-WJ8SGTR70Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);