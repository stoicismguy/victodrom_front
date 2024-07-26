import classes from "./AnswersList.module.css"
import AnswersItem from "../AnswerItem/AnswerItem";
import add_box from '../../../../assets/icons/add-box-svgrepo-com.svg'


function AnswersList(props) {
    return (
        <>
        <ul className={classes.answers_list} id="answers-list">
        {props.answers.map((ans, i) => {
            return <AnswersItem answer={ans} index={i} functions={props.functions}></AnswersItem>
        })}
        </ul>
        <img src={add_box} alt="add" width="40" className="cursor-pointer m-auto mt-2" onClick={props.functions.new_answer}/>
    </>    
    );
}

export default AnswersList;