import CommonHeader from "../../shared/Header/Header";
import MenuList from "../../shared/MenuList/MenuList";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import MyQuizList from './components/MyQuizList/MyQuizList'

function MyQuiz() {
    return (
        <>
        <CommonHeader></CommonHeader>
        <MainWrapper>
            <MenuList></MenuList>
            <MyQuizList></MyQuizList>
        </MainWrapper>        
        </>
    );
}

export default MyQuiz;