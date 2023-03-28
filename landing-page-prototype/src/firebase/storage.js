/**
 * Storage will handle the photos of clothing sent in by the users 
 * Firestore database records will have a link to location of the photo in Storage
 */

// Import Storage SDK from firebase.js
import { storage } from './firebase';

// Import Storage functions from firebase
import { ref, getDownloadURL, getStorageDownloadURL } from 'firebase/storage';

// Import date library functions
import { format } from 'date-fns';

// Definition of V-Closet Bucket URL found in Firebase console
const BUCKET_URL = "v-closet-f9736.appspot.com";

export async function uploadImageToStorage(image, uid) {
    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
    const storageBucketRef = ref(storage, bucket);
    await uploadBytes(ref(storage, bucket), image);
    return bucket;
}

/* export async function replaceImageInStorage {

}

export async function deleteImageInStorage {

} */

export async function getDownloadURL(bucket) {
    return await getStorageDownloadURL(ref(storage, bucket));
}