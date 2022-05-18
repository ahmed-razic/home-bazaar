// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDUFi8Z-yRs4a_iY2WbeF3kiI3lHCZ_NBk',
  authDomain: 'home-bazaar-60809.firebaseapp.com',
  projectId: 'home-bazaar-60809',
  storageBucket: 'home-bazaar-60809.appspot.com',
  messagingSenderId: '273058658503',
  appId: '1:273058658503:web:da3aaae8f1cacd8bade6e2',
  measurementId: 'G-4KGWKBF5P8',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
const analytics = getAnalytics(app)
