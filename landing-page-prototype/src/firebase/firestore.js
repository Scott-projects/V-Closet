import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL } from 'firebase/storage';
import { uploadImageToStorage, getStorageDownloadURL } from './storage';
const BUCKET_URL = "v-closet-f9736.appspot.com";

export function addClothingItem(uid, color, category, checkBoxArray, bucket) {
  // const bucket = uploadImageToStorage(image, uid);
  // alert(getStorageDownloadURL(bucket));
  addDoc(collection(db, uid), { color, category, checkBoxArray, bucket });
}

export async function getClothingItem(uid, category, setClothingItems, setisLoadingClothes) {
  console.log("GETTING DOCUMENT DATA STUF -------------------------------------------------");
  const clothingQuery = query(collection(db, uid), where("category", "==", category));

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
    setisLoadingClothes(false)
  })
  return unsubscribe;
}