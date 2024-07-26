import classes from './AnswerItem.module.css'
import delete_svg from '../../../../assets/icons/delete.svg'
import { useState } from 'react';

function AnswersItem(props) {
    
    function onCheckBoxClick(e) {
        const input = e.target;
        const li = input.parentElement;
        li.classList.toggle(`${classes.active_checkbox}`);
    }

    return (
        <li className={classes.answer_item} id={props.answer.index}>
            <input type="checkbox" name="correct" className={classes.correct_input} id="" onClick={onCheckBoxClick} />
            <textarea type="text"  placeholder='Текст ответа' className={classes.answer_text} value={props.answer.text} 
            onChange={(e) => props.functions.set_answer_text(props.index, e.target.value)}></textarea>
            <img src={delete_svg} alt="delete" className={classes.svg_delete} width="40" onClick={() => props.functions.delete_anser(props.index)}/>
        </li>
    );
}

export default AnswersItem;