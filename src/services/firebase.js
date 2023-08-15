// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4MWQvcvz41vxGCMy6ld1rVvxzwFiHvnU",
  authDomain: "react-app-ecommerce-jchs.firebaseapp.com",
  projectId: "react-app-ecommerce-jchs",
  storageBucket: "react-app-ecommerce-jchs.appspot.com",
  messagingSenderId: "613422532684",
  appId: "1:613422532684:web:d9037cf3242ace3154cce9"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Implementing function getData

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs 
  const docsData = documents.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return docsData;
}

// Implementing getProductData

async function getProductData(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id};
    } else {
        throw new Error("Product not found.")
    }
}

// Implementing getCategoryData

async function getCategoryData(idCategory) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory))
    const documentsSnapshot = await getDocs(q);
    
    const documents = documentsSnapshot.docs 
    const docsData = documents.map(
        (item) => {
            return { ...item.data(), id: item.id };
  });
  return docsData;
}



export { getData, getProductData, getCategoryData};