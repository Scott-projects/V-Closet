import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL } from 'firebase/storage';
// import { uploadImageToStorage, getStorageDownloadURL } from './storage';
const BUCKET_URL = "v-closet-f9736.appspot.com";

export function addClothingItem(uid, color, category, checkBoxArray, bucket) {
  // const bucket = uploadImageToStorage(image, uid);
  // alert(getStorageDownloadURL(bucket));
  addDoc(collection(db, uid), { color, category, checkBoxArray, bucket });
}

export async function getClothingItem(uid, category, setClothingItems) {
  console.log("GETTING DOCUMENT DATA STUF -------------------------------------------------");
  const clothingQuery = query(collection(db, uid), where("category", "==", category));
  const querySnapshot = await getDocs(clothingQuery);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const test = doc.data();
    console.log(test.bucket);
  });

  const getClothingInfomration = onSnapshot(clothingQuery, async (snapshot) => {
    let allClothingItems = [];
    for (const documentSnapshot of snapshot.docs) {
      const clothingItem = documentSnapshot.data();
      console.log("Clothing Item")
      console.log(clothingItem);
      allClothingItems.push({
        ...clothingItem,
        category: clothingItem['category'],
        color: clothingItem['color'],
        id: documentSnapshot.id,
        imageUrl: await getDownloadURL(clothingItem['bucket']),
      });
    }
    setClothingItems(allClothingItems);
    console.log("ALLCLOTHING ITEMS-------");
    console.log(allClothingItems);
  })
  console.log(getClothingInfomration);
  return querySnapshot;
}