import { addClothingItem } from "../firebase/firestore";

export const AddToDatabase = () => {
    try {
        addClothingItem();
    } catch (error) {
        
    }
}