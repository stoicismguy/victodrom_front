import classes from "./AnswersList.module.css"
import AnswersItem from "../AnswerItem/AnswerItem";


function AnswersList() {
    return (
        <ul className={classes.answers_list}>
            <AnswersItem></AnswersItem>
        </ul>
    );
}

export default AnswersList;