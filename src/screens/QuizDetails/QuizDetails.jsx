import classes from './QuizDetails.module.css'
import MainWrapper from '../../shared/MainWrapper/MainWrapper';
import CommonHeader from '../../shared/Header/Header';
import quiz_default from '../../assets/quiz_default.jpg'
import play_svg from '../../assets/icons/play2.svg'
import profile_img from '../../assets/profile.png'
import delete_svg from '../../assets/icons/delete-svgrepo-com (1).svg'
import statistic_svg from '../../assets/icons/poll-people-svgrepo-com.svg'
import { useParams } from 'react-router-dom';

function QuizDetails() {
    const { id } = useParams();

    return (
        <>
            <CommonHeader></CommonHeader>
            <MainWrapper>
                <div className={classes.quiz_details}>
                    <img src={quiz_default} alt=""/>
                    <div className={classes.title_div}>
                        <h1 className={classes.title}>Моя первая викторина</h1>
                        <a href="#" className={classes.solve_button}>
                            <img src={play_svg} alt="" width={20} />
                            <p>Решить</p>
                        </a>
                    </div>
                    <p className={classes.description}>
                        Эту первую викторину я сделал для первичного тестирования Виктодрома и сейчас я специально напишу огромный текст чтобы посмотреть как выглядит отображение на станице с пк или телефона
                    </p>
                    <div className={classes.author_div}>
                        <img src={profile_img} width={35} alt="" />
                        <p>Даниил админ</p>
                    </div>
                    <div className={classes.control_buttons}>
                        <button className={classes.btn_results}><img src={statistic_svg} width={20} alt="" />Смотреть результаты</button>
                        <button className={classes.btn_delete}><img src={delete_svg} width={20} alt="" />Удалить</button>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}

export default QuizDetails;