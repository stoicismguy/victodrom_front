import classes from "./AnswersList.module.css"
import AnswersItem from "../AnswerItem/AnswerItem";


function AnswersList(props) {
    // console.log(props.answers)
    return (
        <ul className={classes.answers_list}>
            {props.answers.map((ans, i) => {
                return <AnswersItem answer={ans} index={i}></AnswersItem>
            })}
        </ul>
    );
}

export default AnswersList;