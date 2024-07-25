import classes from './AnswerItem.module.css'
import delete_svg from '../../../../assets/icons/delete.svg'

function AnswersItem() {
    return (
        <li className={classes.answer_item}>
            <textarea type="text" placeholder='Текст ответа' className={classes.answer_text}></textarea>
            <img src={delete_svg} alt="delete" className={classes.svg_delete} width="40"/>
        </li>
    );
}

export default AnswersItem;