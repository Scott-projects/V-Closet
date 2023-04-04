import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { uploadImageToStorage, getStorageDownloadURL } from './storage';

const BUCKET_URL = "v-closet-f9736.appspot.com";

export function addClothingItem(uid, color, category, checkBoxArray, bucket){
    // const bucket = uploadImageToStorage(image, uid);
    // alert(getStorageDownloadURL(bucket));
    addDoc(collection(db, uid), {color, category, checkBoxArray, bucket});
}