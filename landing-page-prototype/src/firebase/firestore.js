import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { uploadImageToStorage, getStorageDownloadURL } from './storage';

export function addClothingItem(uid, color, category, checkBoxArray, image){ //TODO: ADD OTHER DATA FIELDS
    const bucket = uploadImageToStorage(image, uid);
    addDoc(collection(db, uid), {uid, color, category, checkBoxArray, bucket});
}