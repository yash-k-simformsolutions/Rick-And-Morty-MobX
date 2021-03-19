import React, { useEffect } from 'react';
import './SocialCard.css';
import { observer } from 'mobx-react';

function SocialCard({ store }) {
    const { fetchImage, imageData, showPrevious, showNext } = store;
    
    useEffect(() => {
        fetchImage();
    }, []);

    console.log(imageData);
    return (
        <div className="socialCard">
            <div className="socialCard_Image">
                <img src={imageData?.image} alt={imageData?.name} />
                <h3>{imageData?.name}</h3>
                <div className="socialCard_Buttons">
                    <button onClick={() => showPrevious()} >Prev</button>
                    <button onClick={() => showNext()} >Next</button>
                </div>
            </div>
        </div>
    )
}

export default observer(SocialCard);
