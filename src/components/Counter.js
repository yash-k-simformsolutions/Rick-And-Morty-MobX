import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Counter.css';
import { observer } from 'mobx-react';

function Counter({ store }) {
    console.log("Store", store)
    const { likesCount, updateLikeCount } = store;

    return (
        <div className="counter">
            <div className="counter_Number">
                <button onClick={() => updateLikeCount()}>
                    <span>{likesCount}</span>
                    <FavoriteIcon />                    
                </button>
            </div>
        </div>
    )
}

export default observer(Counter)