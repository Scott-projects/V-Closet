import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { uploadImageToStorage, getStorageDownloadURL } from './storage';

export function addClothingItem(uid, color, category, checkBoxArray, image){
    // const bucket = uploadImageToStorage(image, uid);
    // alert(getStorageDownloadURL(bucket));
    //addDoc(collection(db, uid), {color, category, checkBoxArray, bucket});
}