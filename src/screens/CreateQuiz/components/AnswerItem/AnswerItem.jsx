import classes from './AnswerItem.module.css'
import delete_svg from '../../../../assets/icons/delete.svg'

function AnswersItem(props) {
    return (
        <li className={classes.answer_item} id={props.answer.index}>
            <input type="checkbox" name="correct" className={classes.correct_input} id=""/>
            <textarea type="text" value={props.answer.text} placeholder='Текст ответа' className={classes.answer_text}></textarea>
            <img src={delete_svg} alt="delete" className={classes.svg_delete} width="40"/>
        </li>
    );
}

export default AnswersItem;