import classes from './CreateQuiz.module.css'
import MainWrapper from '../../shared/MainWrapper/MainWrapper';
import NavList from './components/NavList/NavList';
import CommonHeader from '../../shared/Header/Header';
import EditWindow from './components/EditWindow/EditWindow';
import Settings from './components/Settings/Settings';


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

    function add_new_question() {
        console.log('clicked');
        // console.log(this.data);
        
    }


    return(
        <>
            <CommonHeader></CommonHeader>
            <MainWrapper>
                <div className='flex w-full flex-col gap-1'>
                    <Settings></Settings>         
                    <div className='flex w-full gap-1 min-h-[260px]'>
                        <NavList data={data['questions']} new={add_new_question}></NavList>
                        <EditWindow></EditWindow>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}

export default CreateQuiz;