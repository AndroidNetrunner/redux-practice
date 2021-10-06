import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { drawCard } from './PlayerSlice';

export function Player( {id} : {id: 1 | 2 | 3 | 4 | 5 | 6} ) : JSX.Element {
    const dispatch = useDispatch();
    const selectPlayerCard = (state: RootStateOrAny) => state.Player[id];
    const hand = useSelector(selectPlayerCard);
    function handleClick (id : 1 | 2 | 3 | 4 | 5 | 6) {
        dispatch(drawCard({
            player: id,
            card: Math.round(Math.random() * 15 + 1)
        }));
        console.log(store.getState().Player[id]);
        console.log(hand);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">플레이어 {id}</h5>
                <p className="card-text">가나다</p>
                <p className="card-text">{hand}</p>
                <button onClick={() => handleClick(id)} className="btn btn-primary">Draw</button>
                <button className="btn btn-danger">Play</button>
            </div>
        </div>
    )
}
