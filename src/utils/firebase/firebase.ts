import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  getDocs,
  query,
  addDoc,
  where,
  getDoc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAizYFDSeXWhvd2m8qSXNDV9oC7T2RAhH0",
  authDomain: "test-back-b4f7e.firebaseapp.com",
  projectId: "test-back-b4f7e",
  // 要在非server端執行process.env要在.env內加上NEXT_PUBLIC_的前墜(例如NEXT_PUBLIC_FIREBASE_PROJECTID)，打包時還是會顯示在客戶端，所以secret不要加前墜這樣執行。
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: "test-back-b4f7e.appspot.com",
  messagingSenderId: "990935080387",
  appId: "1:990935080387:web:5ea46aa8c026c256e27176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth();

export type Product = {
  productName: string;
  type: string;
  productUrl: string;
  unit: string;
  price: number;
  quantity: number;
  inspectionUrl1?: string;
  inspectionUrl2?: string;
  category: string;
  introduction: string;
  isSell: boolean | null;
  OBTNumber?: string;
};

export type Order = {
  DeliveryTime: string;
  RecipientAddress: string;
  RecipientMobile: string;
  RecipientName: string;
  IsCollection: string;
  CollectionAmount: number;
  clientMemo: string;
  createDate: string;
  isFinish: boolean;
  Memo: string;
  totalPrice: number;
  cart: Cart[];
  id: string;
};

type Cart = {
  price: number;
  productName: string;
  quantity: number;
};

export type GroupBuyOrder = {
  id?: string;
  groupBuyName: string;
  groupBuyOwner: string;
  groupBuyProduct: string;
};

export type Question = {
  type: "radio" | "text";
  title: string;
  required: boolean;
  questions: string[];
};

export type FormData = GroupBuyOrder & {
  answer: boolean;
  url: string;
  slug: string;
  createAt: string;
  questions: Question[];
};

//上傳圖片到storage並回傳url
export const uploadToStorage = async (file: File): Promise<string> => {
  // ref 到指定的儲存空間，後面則是完整檔案名稱
  const storageRef = ref(storage, file.name);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

//更新doc資料(每一筆doc都是一個product)
export const editProduct = async (product: Product): Promise<void> => {
  const collectionRef = collection(db, product.category);
  await updateDoc(doc(collectionRef, product.productName), product);
};

// 更新開放銷售狀態
export const editIsSell = async (
  name: string,
  category: string,
  isSell: boolean
): Promise<void> => {
  const collectionRef = collection(db, category);
  await updateDoc(doc(collectionRef, name), { isSell: isSell });
};

//上傳資料到firestore
export const addNewOrder = async (
  order: Order
): Promise<string | undefined> => {
  try {
    const collectionRef = collection(db, "訂單");
    const newOrderToDoc = await addDoc(collectionRef, order).then((doc) => {
      return doc.id;
    });

    // await setDoc(doc(collectionRef, newOrderToDoc), { id: newOrderToDoc });
    await updateDoc(doc(collectionRef, newOrderToDoc), { id: newOrderToDoc });
    if (newOrderToDoc) return newOrderToDoc;
  } catch (error) {
    console.log(error);
  }
};

export const getOrder = async (id: string) => {
  const collectionRef = collection(db, "訂單");
  const q = query(collectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs[0].data();
  return data;
};

export const getProductForMetaData = async (category: string) => {
  const collectionRef = await collection(db, category);
  const data = (await getDocs(collectionRef)).docs.map((doc) => doc.data());

  return data as Product[];
};

export const getGroupbuyForm = async (
  slug: string
): Promise<FormData | undefined> => {
  const collectionRef = collection(db, "團購");
  // console.log(querySnapshot);
  // try {
  //   const q = query(collectionRef, where("slug", "==", slug));
  //   console.log();
  //   const querySnapshot = await getDocs(q);
  // console.log(querySnapshot.docs[0].data());
  // if (querySnapshot !== undefined) {
  //   const data = querySnapshot.docs[0].data();
  //   console.log(data);
  //   return data;
  // }
  // return undefined;
  // } catch (err) {
  //   console.log(err);
  // }
  const docRef = doc(collectionRef, slug);
  const data = await getDoc(docRef);

  return data.data() as FormData;
};

// getGroupbuyForm("Jt0zlsj1aeDVPtDw09PH1");
