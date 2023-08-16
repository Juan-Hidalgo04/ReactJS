// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, writeBatch } from "firebase/firestore";

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
  })
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

async function createOrder(orderData){
  const collectionRef = collection(db, "orders");

  const docCreated = await addDoc(collectionRef, orderData);

  return(docCreated.id);
}

async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function _exportProducts() {
  const products = [
  {
    title: "Europe Package",
    id: 1,
    stock: 4,
    description: "5 days visiting the most worderful cities in Europe.",
    img: "/assets/Europa_collage.jpg",
    price: 1200,
    category: "Packages"
  },
  {
    title: "America Package",
    id: 2,
    stock: 4,
    description: "5 days visiting the most worderful cities in South America.",
    img: "/assets/America_collage.jpg",
    price: 900,
    category: "Packages"
  },
  {
    title: "Africa Package",
    id: 3,
    stock: 4,
    description: "5 days visiting the most worderful cities in Africa.",
    img: "/assets/africa_collage.jpg",
    price: 1500,
    category: "Packages"
  }, 
  {
    title: "Asia Package",
    id: 4,
    stock: 4,
    description: "5 days visiting the most worderful cities in Asia.",
    img: "/assets/Asia_collage.jpg",
    price: 2000,
    category: "Packages"
  },
  {
    title: "Backpack",
    id: 5,
    stock: 20,
    description: "A durable and spacious backpack for all your travel needs.",
    img: "/assets/backpack-camping.png",
    price: 80,
    category: "Camping"
  },
  {
    title: "Tent",
    id: 6,
    stock: 15,
    description: "A lightweight and easy-to-assemble tent for camping adventures.",
    img: "/assets/Tent.png",
    price: 170,
    category: "Camping"
  },
  {
    title: "Sleeping Bag",
    id: 7,
    stock: 30,
    description: "A cozy sleeping bag to keep you warm during chilly nights.",
    img: "/assets/sleeping-bag.avif",
    price: 200,
    category: "Camping"
  },
  {
    title: "Hiking Boots",
    id: 8,
    stock: 25,
    description: "Sturdy and comfortable hiking boots for long treks.",
    img: "/assets/hiking-boots.png",
    price: 250,
    category: "Camping"
  },
  {
    title: "Beach Umbrella",
    id: 9,
    stock: 14,
    description: "Stay shaded and protected from the sun with this beach umbrella.",
    img: "/assets/beach-umbrella.png",
    price: 100,
    category: "Beach"
  },
  {
    title: "Beach Towel",
    id: 10,
    stock: 28,
    description: "A large and absorbent beach towel for lounging on the sand.",
    img: "/assets/beach-towel.png",
    price: 20,
    category: "Beach"
  },
  {
    title: "Beach Chair",
    id: 11,
    stock: 20,
    description: "Relax comfortably on the beach with this folding beach chair.",
    img: "/assets/beach-chairs.png",
    price: 60,
    category: "Beach"
  },
  {
    title: "Sunscreen",
    id: 12,
    stock: 50,
    description: "Protect your skin from harmful UV rays with this SPF 50 sunscreen.",
    img: "/assets/sunscreen.png",
    price: 35,
    category: "Beach"
  },
]

  for(let item of products) {
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
    }
}

async function _exportProductsWithBatch() {
  const products = [
  {
    title: "Europe Package",
    id: 1,
    stock: 4,
    description: "5 days visiting the most worderful cities in Europe.",
    img: "/assets/Europa_collage.jpg",
    price: 1200,
    category: "Packages"
  },
  {
    title: "America Package",
    id: 2,
    stock: 4,
    description: "5 days visiting the most worderful cities in South America.",
    img: "/assets/America_collage.jpg",
    price: 900,
    category: "Packages"
  },
  {
    title: "Africa Package",
    id: 3,
    stock: 4,
    description: "5 days visiting the most worderful cities in Africa.",
    img: "/assets/africa_collage.jpg",
    price: 1500,
    category: "Packages"
  }, 
  {
    title: "Asia Package",
    id: 4,
    stock: 4,
    description: "5 days visiting the most worderful cities in Asia.",
    img: "/assets/Asia_collage.jpg",
    price: 2000,
    category: "Packages"
  },
  {
    title: "Backpack",
    id: 5,
    stock: 20,
    description: "A durable and spacious backpack for all your travel needs.",
    img: "/assets/backpack-camping.png",
    price: 80,
    category: "Camping"
  },
  {
    title: "Tent",
    id: 6,
    stock: 15,
    description: "A lightweight and easy-to-assemble tent for camping adventures.",
    img: "/assets/Tent.png",
    price: 170,
    category: "Camping"
  },
  {
    title: "Sleeping Bag",
    id: 7,
    stock: 30,
    description: "A cozy sleeping bag to keep you warm during chilly nights.",
    img: "/assets/sleeping-bag.avif",
    price: 200,
    category: "Camping"
  },
  {
    title: "Hiking Boots",
    id: 8,
    stock: 25,
    description: "Sturdy and comfortable hiking boots for long treks.",
    img: "/assets/hiking-boots.png",
    price: 250,
    category: "Camping"
  },
  {
    title: "Beach Umbrella",
    id: 9,
    stock: 14,
    description: "Stay shaded and protected from the sun with this beach umbrella.",
    img: "/assets/beach-umbrella.png",
    price: 100,
    category: "Beach"
  },
  {
    title: "Beach Towel",
    id: 10,
    stock: 28,
    description: "A large and absorbent beach towel for lounging on the sand.",
    img: "/assets/beach-towel.png",
    price: 20,
    category: "Beach"
  },
  {
    title: "Beach Chair",
    id: 11,
    stock: 20,
    description: "Relax comfortably on the beach with this folding beach chair.",
    img: "/assets/beach-chairs.png",
    price: 60,
    category: "Beach"
  },
  {
    title: "Sunscreen",
    id: 12,
    stock: 50,
    description: "Protect your skin from harmful UV rays with this SPF 50 sunscreen.",
    img: "/assets/sunscreen.png",
    price: 35,
    category: "Beach"
  },
  ];

  const batch = writeBatch(db); 

  products.forEach( product => {
    const newId = product.id
    delete product.id;
    const newDoc = doc(db, "products", String(newId))
    batch.set(newDoc, product);
  })

  await batch.commit()
  console.log("Done!");
}

export { getData, getProductData, getCategoryData, createOrder, getOrder, _exportProducts, _exportProductsWithBatch};