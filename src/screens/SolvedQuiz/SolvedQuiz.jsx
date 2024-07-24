import CommonHeader from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import MenuList from "../../shared/MenuList/MenuList";
import SolvedQuizList from "./components/SolvedQuizList/SolvedQuizList";

function SolvedQuiz() {
    return (
        <>
        <CommonHeader></CommonHeader>
        <MainWrapper>
            <MenuList></MenuList>
            <SolvedQuizList></SolvedQuizList>
        </MainWrapper>        
        </>
    );
}

export default SolvedQuiz;