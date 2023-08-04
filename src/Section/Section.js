import React from "react";
import d from './Section.module.css';
import {useDispatch, useSelector} from "react-redux";


const Section = () => {
    const count = useSelector( (state) => state);
    const dispatch = useDispatch();


    const increment = () => {
        dispatch( {
            type: 'increment',
            number: 5
        })
    };

    const decrement = () => {
        dispatch({
            type: 'decrement'
        })
    };

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    };



    return (
        <div className={d.section}>
            <div className={d.clock}>
            </div>
            <aside className={d.text_zero}><span>{count}</span></aside>
            <div className={d.section_buttons}>
                <button onClick={increment}>Увеличить</button>
                <button onClick={decrement}>Уменьшить</button>
                <button onClick={reset}>Сбросить</button>
            </div>
        </div>
    )
}

export default Section;