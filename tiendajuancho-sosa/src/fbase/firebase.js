import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  doc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3BMiJWnNl57nG6zxWku-aTYye4Bnjmho",
  authDomain: "tiendajuancho-fb.firebaseapp.com",
  projectId: "tiendajuancho-fb",
  storageBucket: "tiendajuancho-fb.appspot.com",
  messagingSenderId: "309468577545",
  appId: "1:309468577545:web:87fc25f94e3313bfa35dd8"
};

initializeApp(firebaseConfig);
const db = getFirestore();

const allProdu = () => {
	const query = getDocs(collection(db, 'items'))
	return query
}

const orderSolo = (orderid) => {
  const q = doc(db, 'orders', orderid)
  const q2 = getDoc(q)
  return q2
}

const itemCat = (catego) =>{
  const q = collection(db, 'items')
  const q2 = query(q, where('categoria', '==', catego))
  const q3 = getDocs(q2)
  return q3
}

const itemSolo = (produid) =>{
  const q = doc(db, 'items', produid)
  const q2 = getDoc(q)
  return q2
}

const addOrder = (cartfinal, total, fecha, cliente) => { 
  const final = addDoc(collection(db, "orders"), {
    cliente: cliente,
    items: cartfinal,
    fecha: fecha,
    total: total
})

return final
}

export { allProdu, itemCat, itemSolo, addOrder, orderSolo };