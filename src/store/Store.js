import { action, observable } from 'mobx';
import axios from 'axios';

const Store = observable({
    likesCount: 0,
    imageData: null,
    id: 1,
    fetchImage: action(async () => {
        const url = `https://rickandmortyapi.com/api/character/${Store.id}`;
        try{
            const response = await axios.get(url);
            const responseData = await response.data;
            Store.imageData = responseData;
            console.log("ResponseData--->", responseData);
            console.log("Image--->", Store.imageData.image);
        } catch(error) {
            console.log("Error---->", error);
        }
    }),

    updateLikeCount: action(() => {
        Store.likesCount ++;
        console.log("Likes Counter--->", Store.likesCount)
    }),
 
    showPrevious: action(() => {
        if(Store.id !== 1){
            Store.id--;
            Store.fetchImage();
        }
    }),

    showNext: action(() => {
        Store.id++;
        Store.fetchImage();
    }),
})

export default Store;