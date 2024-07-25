import classes from './CreateQuiz.module.css'
import MainWrapper from '../../shared/MainWrapper/MainWrapper';
import NavList from './components/NavList/NavList';
import CommonHeader from '../../shared/Header/Header';
import EditWindow from './components/EditWindow/EditWindow';


function CreateQuiz() {

    let data = {'questions': [
        {
            id: 0,
            text: "it's q№1",
            answers: [
                {
                    text: "ans1",
                    correct: true
                },
                {
                    text: "ans2",
                    correct: false
                },
                {
                    text: "ans3",
                    correct: false
                }
            ]
        },
        {
            id: 1,
            text: "it's q№2",
            answers: [
                {
                    text: "ans1",
                    correct: false
                },
                {
                    text: "ans2",
                    correct: true
                },
                {
                    text: "ans3",
                    correct: false
                }
            ]
        }
    ]};


    return(
        <>
            <CommonHeader></CommonHeader>
            <MainWrapper>
                <div className='flex w-full gap-1'>
                    <NavList></NavList>
                    <EditWindow></EditWindow>
                </div>
            </MainWrapper>
        </>
    );
}

export default CreateQuiz;