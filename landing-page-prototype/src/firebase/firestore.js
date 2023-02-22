/**
 * 
 */

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL } from './storage';

const SHIRTS_COLLECTION = 'shirts';

export function addShirt(uid, shirtName, color, imageBucket){ //TODO: ADD OTHER DATA FIELDS
    addDoc(collection(db, SHIRTS_COLLECTION), {uid, shirtName, color, imageBucket});
}