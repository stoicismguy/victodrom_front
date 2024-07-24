import CommonHeader from "../../shared/Header/Header";
import MenuList from "../../shared/MenuList/MenuList";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import QuizList from "./components/QuizList/QuizList";

function MyQuiz() {
    return (
        <>
        <CommonHeader></CommonHeader>
        <MainWrapper>
            <MenuList></MenuList>
            <QuizList></QuizList>
        </MainWrapper>        
        </>
    );
}

export default MyQuiz;