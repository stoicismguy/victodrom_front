import classes from './QuestionTextInput.module.css'

function QuestionTextInput() {
    console.log("ress")
    return (
        <textarea type="text" id="q_text" className={classes.question_text_input} placeholder='Текст вопроса'/>
    );
}

export default QuestionTextInput;