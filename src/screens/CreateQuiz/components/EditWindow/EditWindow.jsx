import classes from './EditWindow.module.css'
import QuestionTextInput from '../QuestionTextInput/QuestionTextInput';
import AnswersList from '../AnswersList/AnswersList';

function EditWindow() {
    return(
        <div className={classes.edit_div}>
            <div className={classes.edit_wrapper}>
                <QuestionTextInput></QuestionTextInput>
                <AnswersList></AnswersList>
            </div>              
        </div>
    );
}

export default EditWindow;