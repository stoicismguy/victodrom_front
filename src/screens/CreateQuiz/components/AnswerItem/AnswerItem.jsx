import classes from './AnswerItem.module.css'

function AnswersItem() {
    return (
        <li className={classes.answer_item}>
            <textarea type="text" placeholder='Текст ответа' className={classes.answer_text}></textarea>
        </li>
    );
}

export default AnswersItem;