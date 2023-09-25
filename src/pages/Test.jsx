import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import './../styles/test.scss'
import { Context } from "..";
import { getQuestionsDatabases, getQuestionsItBasics, getQuestionsNetworking, getQuestionsProgramming, getQuestionsProjectManagement, getQuestionsSecurity, getQuestionsWebTech, getRandomTest } from '../http/testApi'

const Test = observer(() => {
    const {databases, itbasics, networking, programming, projectmanagement, security, webtech} = useContext(Context)
    const [test, setTest] = useState()
    const [databasesAnswer, setDatabasesAnswer] = useState()
    const [itbasicsAnswer, setItbasicsAnswer] = useState()
    const [networkingAnswer, setNetworkingAnswer] = useState()
    const [programmingAnswer, setProgrammingAnswer] = useState()
    const [projectmanagementAnswer, setProjectmanagementAnswer] = useState()
    const [securityAnswer, setSecurityAnswer] = useState()
    const [webtechAnswer, setWebtechAnswer] = useState()
    const [testDone, setTestDone] = useState(false)
    const [rightAmount, setRightAmount] = useState()

    //из бд получаем все вопросы для тестов
    const fetchData = async () => {
        try {
            await getQuestionsDatabases().then(data => databases.setQuestions(data))
            await getQuestionsItBasics().then(data => itbasics.setQuestions(data))
            await getQuestionsNetworking().then(data => networking.setQuestions(data))
            await getQuestionsProgramming().then(data => programming.setQuestions(data))
            await getQuestionsProjectManagement().then(data => projectmanagement.setQuestions(data))
            await getQuestionsSecurity().then(data => security.setQuestions(data))
            await getQuestionsWebTech().then(data => webtech.setQuestions(data))
        } catch (e) {

        }
    }

    //из бд получаем рандомный тест
    const fetchTest = async () => {
        try {
            await getRandomTest().then(data => {
                setTest(data)
            })
        } catch (e) {

        }
    }

    useEffect(() => {
        fetchData()
        fetchTest()
        // eslint-disable-next-line
    }, [])


    //функции для отметки ответов
    const checkboxDatabases = (e) => {
        const checkboxes = document.getElementsByClassName('DatabasesAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setDatabasesAnswer(e.target.id)
    }

    const checkboxItBasics = (e) => {
        const checkboxes = document.getElementsByClassName('ItBasicsAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setItbasicsAnswer(e.target.id)
    }

    const checkboxNetworking = (e) => {
        const checkboxes = document.getElementsByClassName('NetworkingAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setNetworkingAnswer(e.target.id)
    }

    const checkboxProgramming = (e) => {
        const checkboxes = document.getElementsByClassName('ProgrammingAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setProgrammingAnswer(e.target.id)
    }

    const checkboxProjectManagement = (e) => {
        const checkboxes = document.getElementsByClassName('ProjectManagementAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setProjectmanagementAnswer(e.target.id)
    }

    const checkboxSecurity = (e) => {
        const checkboxes = document.getElementsByClassName('SecurityAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setSecurityAnswer(e.target.id)
    }

    const checkboxWebTech = (e) => {
        const checkboxes = document.getElementsByClassName('WebTechAnswer')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setWebtechAnswer(e.target.id)
    }

    const checkAnswers = () => {
        let rightAnswers = 0
        Number(databases.getQuestion(test.databases_id).correct_answer) === Number(databasesAnswer) && rightAnswers++
        Number(itbasics.getQuestion(test.itbasics_id).correct_answer) === Number(itbasicsAnswer) && rightAnswers++
        Number(networking.getQuestion(test.networking_id).correct_answer) === Number(networkingAnswer) && rightAnswers++
        Number(programming.getQuestion(test.programming_id).correct_answer) === Number(programmingAnswer) && rightAnswers++
        Number(projectmanagement.getQuestion(test.projectmanagement_id).correct_answer) === Number(projectmanagementAnswer) && rightAnswers++
        Number(security.getQuestion(test.security_id).correct_answer) === Number(securityAnswer) && rightAnswers++
        Number(webtech.getQuestion(test.webtech_id).correct_answer) === Number(webtechAnswer) && rightAnswers++
        // console.log(rightAnswers)
        setRightAmount(rightAnswers)
        setTestDone(true)
    }
    
    return (
        <div className="TestContainer">
            <div className="TestSub">Тестирование</div>
            {!testDone ? (
                <>
                    {databases && itbasics.questions && networking.questions && programming.questions && projectmanagement.questions && security.questions && webtech.questions && test &&
                        <>
                            {databases.getQuestion(test.databases_id) &&
                                <>
                                    <div className="TestQuestion">1. {databases.getQuestion(test.databases_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="DatabasesAnswer" type="checkbox" id="1" onClick={checkboxDatabases}/>
                                            <div>{databases.getQuestion(test.databases_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="DatabasesAnswer" type="checkbox" id="2" onClick={checkboxDatabases}/>
                                            <div>{databases.getQuestion(test.databases_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="DatabasesAnswer" type="checkbox" id="3" onClick={checkboxDatabases}/>
                                            <div>{databases.getQuestion(test.databases_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="DatabasesAnswer" type="checkbox" id="4" onClick={checkboxDatabases}/>
                                            <div>{databases.getQuestion(test.databases_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {itbasics.getQuestion(test.itbasics_id) &&
                                <>
                                    <div className="TestQuestion">2. {itbasics.getQuestion(test.itbasics_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="ItBasicsAnswer" type="checkbox" id="1" onClick={checkboxItBasics}/>
                                            <div>{itbasics.getQuestion(test.itbasics_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ItBasicsAnswer" type="checkbox" id="2" onClick={checkboxItBasics}/>
                                            <div>{itbasics.getQuestion(test.itbasics_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ItBasicsAnswer" type="checkbox" id="3" onClick={checkboxItBasics}/>
                                            <div>{itbasics.getQuestion(test.itbasics_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ItBasicsAnswer" type="checkbox" id="4" onClick={checkboxItBasics}/>
                                            <div>{itbasics.getQuestion(test.itbasics_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {networking.getQuestion(test.networking_id) &&
                                <>
                                    <div className="TestQuestion">3. {networking.getQuestion(test.networking_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="NetworkingAnswer" type="checkbox" id="1" onClick={checkboxNetworking}/>
                                            <div>{networking.getQuestion(test.networking_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="NetworkingAnswer" type="checkbox" id="2" onClick={checkboxNetworking}/>
                                            <div>{networking.getQuestion(test.networking_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="NetworkingAnswer" type="checkbox" id="3" onClick={checkboxNetworking}/>
                                            <div>{networking.getQuestion(test.networking_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="NetworkingAnswer" type="checkbox" id="4" onClick={checkboxNetworking}/>
                                            <div>{networking.getQuestion(test.networking_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {programming.getQuestion(test.programming_id) &&
                                <>
                                    <div className="TestQuestion">4. {programming.getQuestion(test.programming_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="ProgrammingAnswer" type="checkbox" id="1" onClick={checkboxProgramming}/>
                                            <div>{programming.getQuestion(test.programming_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProgrammingAnswer" type="checkbox" id="2" onClick={checkboxProgramming}/>
                                            <div>{programming.getQuestion(test.programming_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProgrammingAnswer" type="checkbox" id="3" onClick={checkboxProgramming}/>
                                            <div>{programming.getQuestion(test.programming_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProgrammingAnswer" type="checkbox" id="4" onClick={checkboxProgramming}/>
                                            <div>{programming.getQuestion(test.programming_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {projectmanagement.getQuestion(test.projectmanagement_id) &&
                                <>
                                    <div className="TestQuestion">5. {projectmanagement.getQuestion(test.projectmanagement_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="ProjectManagementAnswer" type="checkbox" id="1" onClick={checkboxProjectManagement}/>
                                            <div>{projectmanagement.getQuestion(test.projectmanagement_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProjectManagementAnswer" type="checkbox" id="2" onClick={checkboxProjectManagement}/>
                                            <div>{projectmanagement.getQuestion(test.projectmanagement_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProjectManagementAnswer" type="checkbox" id="3" onClick={checkboxProjectManagement}/>
                                            <div>{projectmanagement.getQuestion(test.projectmanagement_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="ProjectManagementAnswer" type="checkbox" id="4" onClick={checkboxProjectManagement}/>
                                            <div>{projectmanagement.getQuestion(test.projectmanagement_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {security.getQuestion(test.security_id) &&
                                <>
                                    <div className="TestQuestion">6. {security.getQuestion(test.security_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="SecurityAnswer" type="checkbox" id="1" onClick={checkboxSecurity}/>
                                            <div>{security.getQuestion(test.security_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="SecurityAnswer" type="checkbox" id="2" onClick={checkboxSecurity}/>
                                            <div>{security.getQuestion(test.security_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="SecurityAnswer" type="checkbox" id="3" onClick={checkboxSecurity}/>
                                            <div>{security.getQuestion(test.security_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="SecurityAnswer" type="checkbox" id="4" onClick={checkboxSecurity}/>
                                            <div>{security.getQuestion(test.security_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {webtech.getQuestion(test.webtech_id) &&
                                <>
                                    <div className="TestQuestion">7. {webtech.getQuestion(test.webtech_id).question}</div>
                                    <div className="TestAnswers">
                                        <div className="AnswerContainer">
                                            <input className="WebTechAnswer" type="checkbox" id="1" onClick={checkboxWebTech}/>
                                            <div>{webtech.getQuestion(test.webtech_id).answer1}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="WebTechAnswer" type="checkbox" id="2" onClick={checkboxWebTech}/>
                                            <div>{webtech.getQuestion(test.webtech_id).answer2}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="WebTechAnswer" type="checkbox" id="3" onClick={checkboxWebTech}/>
                                            <div>{webtech.getQuestion(test.webtech_id).answer3}</div>
                                        </div>
                                        <div className="AnswerContainer">
                                            <input className="WebTechAnswer" type="checkbox" id="4" onClick={checkboxWebTech}/>
                                            <div>{webtech.getQuestion(test.webtech_id).answer4}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            <button className="TestCheck" onClick={checkAnswers}>Проверить</button>
                        </>
                    }
                </>
                ) :
                <>
                    <div className="TestDone">Тест пройден!</div>
                    <div className="TestResult">Вы ответили правильно на {rightAmount} из 7 вопросов</div>
                </>
            }
        </div>
    );
})
 
export default Test;