import classes from './QuestionTextInput.module.css'

function QuestionTextInput(props) {
    return (
        <textarea type="text" id="q_text" value={props.text} className={classes.question_text_input} onChange={(e) => { props.functions.set_question_text(e.target.value) }} placeholder='Текст вопроса'/>
    );
}

export default QuestionTextInput;