import classes from './SolvedQuizList.module.css'
import { Link } from 'react-router-dom';
import default_quiz_png from '../../../../assets/quiz_default.jpg'

function SolvedQuizList() {


    return (
        <div>
            <ul className={classes.quiz_list}>
                <li className={classes.quiz_item}>
                    <Link to="/" className={classes.quiz_link}>
                        <img src={default_quiz_png} className={classes.item_img} alt="preview" width="300"/>
                        <div className={classes.item_info}>
                            <h1 className={classes.item_title}>Название викторины</h1>
                            <p className={classes.item_author}>Даниил админ</p>
                            <p className={classes.item_author_username}>@stoicismguy</p>
                        </div>                      
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SolvedQuizList;