import classes from './EditWindow.module.css'
import QuestionTextInput from '../QuestionTextInput/QuestionTextInput';
import AnswersList from '../AnswersList/AnswersList';
import QuestionSettings from '../QuestionSettings/QuestionSettings';

function EditWindow(props) {
    return(
        <div className={classes.edit_div}>
            <div className={classes.edit_wrapper}>
                <QuestionSettings functions={props.functions}></QuestionSettings>
                <QuestionTextInput text={props.question.text} functions={props.functions}></QuestionTextInput>      
                <AnswersList answers={props.question.answers} functions={props.functions}></AnswersList>
            </div>              
        </div>
    );
}

export default EditWindow;