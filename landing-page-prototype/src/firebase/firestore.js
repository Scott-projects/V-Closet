import { addDoc, collection, getDocs, onSnapshot, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL } from 'firebase/storage';
import { uploadImageToStorage, getStorageDownloadURL } from './storage';
const BUCKET_URL = "v-closet-f9736.appspot.com";

export function addClothingItem(uid, color, category, checkBoxArray, bucket) {
  const forSale = false;
  addDoc(collection(db, uid), { color, category, checkBoxArray, forSale, bucket });
}

export async function getClothingItem(uid, category, setClothingItems, setisLoadingClothes) {
  let clothingQuery;
  if (category == 'all') {
    clothingQuery = query(collection(db, uid));
  }
  else {
    clothingQuery = query(collection(db, uid), where("category", "==", category));
  }

  const unsubscribe = onSnapshot(clothingQuery, async (snapshot) => {
    let allClothingItems = [];
    for (const documentSnapshot of snapshot.docs) {
      const clothingItem = documentSnapshot.data();
      allClothingItems.push({
        ...clothingItem,
        id: documentSnapshot.id,
        color: clothingItem['color'],
        category: clothingItem['category'],
        checkBoxArray: clothingItem['checkBoxArray'],
        bucket: await getStorageDownloadURL(clothingItem['bucket']),
      });
    }
    setClothingItems(allClothingItems);
    setisLoadingClothes(false);
  })
  return unsubscribe;
}

export async function getClothingItemsForHomepage(uid, setShirts, setPants, setShoes, setHeadwear, setOuterwear, setSweaters ,setisLoadingClothes) {
  const clothingQuery = query(collection(db, uid));

  const unsubscribe = onSnapshot(clothingQuery, async (snapshot) => {
    let shirts = [];
    let outerwear = [];
    let headwear = [];
    let sweaters = [];
    let pants = [];
    let shoes = [];
    for (const documentSnapshot of snapshot.docs) {
      const clothingItem = documentSnapshot.data();
      if (clothingItem['category'] === "shirts") {
        shirts.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
      if (clothingItem['category'] === "outerwear") {
        outerwear.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
      if (clothingItem['category'] === "headwear") {
        headwear.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
      if (clothingItem['category'] === "sweaters") {
        sweaters.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
      if (clothingItem['category'] === "pants") {
        pants.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
      if (clothingItem['category'] === "shoes") {
        shoes.push({
          ...clothingItem,
          id: documentSnapshot.id,
          color: clothingItem['color'],
          category: clothingItem['category'],
          checkBoxArray: clothingItem['checkBoxArray'],
          bucket: await getStorageDownloadURL(clothingItem['bucket']),
        });
      }
    }
    console.log(shirts);
    setShirts(shirts);
    setOuterwear(outerwear);
    setPants(pants);
    setShoes(shoes);
    setHeadwear(headwear);
    setSweaters(sweaters);
    setisLoadingClothes(false);
  })
  return unsubscribe;
}


export async function deleteClothingItem(uid, id) {
  deleteDoc(doc(db, uid, id));
}

export async function addToMarket(uid, id) {
  const docRef = doc(db, uid, id);
  updateDoc(docRef, {
    forSale: true
  });
}

export async function getAllMarketItems(uid, setClothingItems, setisLoadingClothes) {
  const clothingQuery = query(collection(db, uid), where("forSale", "==", true));

  const unsubscribe = onSnapshot(clothingQuery, async (snapshot) => {
    let allClothingItems = [];
    for (const documentSnapshot of snapshot.docs) {
      const clothingItem = documentSnapshot.data();
      allClothingItems.push({
        ...clothingItem,
        id: documentSnapshot.id,
        color: clothingItem['color'],
        category: clothingItem['category'],
        checkBoxArray: clothingItem['checkBoxArray'],
        forSale: clothingItem['forSale'],
        bucket: await getStorageDownloadURL(clothingItem['bucket']),
      });
    }
    setClothingItems(allClothingItems);
    setisLoadingClothes(false)
  })
  return unsubscribe;
}
