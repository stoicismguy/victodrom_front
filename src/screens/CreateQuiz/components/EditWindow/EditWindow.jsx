import classes from './EditWindow.module.css'
import QuestionTextInput from '../QuestionTextInput/QuestionTextInput';
import AnswersList from '../AnswersList/AnswersList';

function EditWindow(props) {
    return(
        <div className={classes.edit_div}>
            <div className={classes.edit_wrapper}>
                <QuestionTextInput text={props.question.text}></QuestionTextInput>
                <AnswersList answers={props.question.answers} functions={props.functions}></AnswersList>
            </div>              
        </div>
    );
}

export default EditWindow;