import classes from './CreateQuiz.module.css'
import MainWrapper from '../../shared/MainWrapper/MainWrapper';
import NavList from './components/NavList/NavList';
import CommonHeader from '../../shared/Header/Header';
import EditWindow from './components/EditWindow/EditWindow';
import Settings from './components/Settings/Settings';

import { useState } from 'react';


function CreateQuiz() {

    const answer_structure = {
        text: "",
        correct: false,
    }

    const question_structure = {
        id: 0, text: "", answers: [
            {
                text: "",
                correct: false,
            },
            {
                text: "",
                correct: false,
            }
        ]
    }

    const [currentQuestion, setcurrentQuestion] = useState(0); //index of the question on the screen
    const [data, setData] = useState({
        settings: {},
        questions: [
            {id: 0, text: "", answers: [
                {
                    text: "",
                    correct: false,
                },
                {
                    text: "",
                    correct: false,
                }
            ]}
        ]});

    const functions = {
        new_answer: () => {
            let newData = structuredClone(data);
            newData.questions[currentQuestion].answers.push(structuredClone(answer_structure));
            setData(newData);
        },
        delete_anser: (index) => {
            let newData = structuredClone(data);
            newData.questions[currentQuestion].answers = newData.questions[currentQuestion].answers.slice(0, index).concat(newData.questions[currentQuestion].answers.slice(index+1));
            setData(newData);
        },
        set_answer_text: (index, value) => {
            let newData = structuredClone(data);
            newData.questions[currentQuestion].answers[index].text = value;
            setData(newData);
        },
        new_question: () => {
            let newData = structuredClone(data);
            newData.questions.push(structuredClone(question_structure));
            setData(newData);
        },
        change_question_number: (number) => {
            setcurrentQuestion(number);
        },
        set_question_text: (value) => {
            let newData = structuredClone(data);
            newData.questions[currentQuestion].text = value;
            setData(newData);
        },
        toggle_correct_answer: (index) => {
            let newData = structuredClone(data);
            newData.questions[currentQuestion].answers[index].correct = !newData.questions[currentQuestion].answers[index].correct;
            setData(newData);
        }
    }
   
    return(
        <>
            <CommonHeader></CommonHeader>
            <MainWrapper>
                <div className='flex w-full flex-col gap-1'>
                    <Settings></Settings>         
                    <div className='flex w-full gap-1 min-h-[260px]'>
                        <NavList data={data.questions} current_question={currentQuestion} functions={functions}></NavList>
                        <EditWindow question={data.questions[currentQuestion]} functions={functions}></EditWindow>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}

export default CreateQuiz;