import React, { useEffect, useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import './../styles/testcreate.scss'
import { createQuestionDatabases, createQuestionItBasics, createQuestionNetworking, createQuestionProgramming, createQuestionProjectManagement, createQuestionSecurity, createQuestionWebTech, createTest } from "../http/testApi";
import { getQuestionsDatabases, getQuestionsItBasics, getQuestionsNetworking, getQuestionsProgramming, getQuestionsProjectManagement, getQuestionsSecurity, getQuestionsWebTech } from '../http/testApi'
import { Context } from '..'

const TestCreate = observer(() => {
    const [question, setQuestion] = useState()
    const [answer1, setAnswer1] = useState()
    const [answer2, setAnswer2] = useState()
    const [answer3, setAnswer3] = useState()
    const [answer4, setAnswer4] = useState()
    const [correct_answer, setCorrect_answer] = useState(1)
    const {databases, itbasics, networking, programming, projectmanagement, security, webtech} = useContext(Context)


    //достаем из бд вопросы для тестов
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

    useEffect(() => {
        fetchData()
        console.log(1)
        // eslint-disable-next-line
    }, [])


    //функция отметки правильного ответа
    const checkboxChange = (e) => {
        const checkboxes = document.getElementsByClassName('Checkbox')
        for (let i of checkboxes) {
            i.checked = false
        }
        e.target.checked = true
        setCorrect_answer(Number(e.target.id))
    }

    //удаление двойных кавычек для правильной отправки формы на сервер в json файле
    const removeDoubleQuotes = (inputString) => {
        const stringWithoutDoubleQuotes = inputString.replace(/"/g, '')
        return stringWithoutDoubleQuotes
    }

    //очистка полей после отправки формы на сервер
    const clearInputs = () => {
        setQuestion('')
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        document.querySelector('.SentModal').classList.remove('None')
        setTimeout(() => {
            document.querySelector('.SentModal').classList.add('None')
        }, 3000)
    }


    //отправка формы на сервер
    const sendQuestion = async () => {
        const chooser = document.querySelector('.CategoryChoose')
        question && setQuestion(removeDoubleQuotes(question))
        answer1 && setAnswer1(removeDoubleQuotes(answer1))
        answer2 && setAnswer2(removeDoubleQuotes(answer2))
        answer3 && setAnswer3(removeDoubleQuotes(answer3))
        answer4 && setAnswer4(removeDoubleQuotes(answer4))

        if (!question) document.querySelector('.Question').classList.add('Error')
        if (!answer1) document.querySelector('.Answer1').classList.add('Error')
        if (!answer2) document.querySelector('.Answer2').classList.add('Error')
        if (!answer3) document.querySelector('.Answer3').classList.add('Error')
        if (!answer4) document.querySelector('.Answer4').classList.add('Error')

        if (question && answer1 && answer3 && answer4 && correct_answer) {
            switch (Number(chooser.value)) {
                case 1:
                    try {
                        await createQuestionItBasics(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break

                case 2:
                    try {
                        await createQuestionNetworking(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    
                    break

                case 3:
                    try {
                        await createQuestionProgramming(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break

                case 4:
                    try {
                        await createQuestionDatabases(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break

                case 5:
                    try {
                        await createQuestionSecurity(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break

                case 6:
                    try {
                        await createQuestionWebTech(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break

                case 7:
                    try {
                        await createQuestionProjectManagement(question, answer1, answer2, answer3, answer4, correct_answer)
                        .then(() => {
                            clearInputs()
                            fetchData()
                        })
                    } catch (e) {
                        document.querySelector('.SentError').classList.remove('None')
                        setTimeout(() => {
                            document.querySelector('.SentError').classList.add('None')
                        }, 3000)
                    }
                    break
            
                default:
                    break
            }
        }
    }


    //отправка теста на сервер
    const sendTest = async () => {
        const questions = document.getElementsByClassName('QuestionChoose')
        for (let i of questions) {
            console.log(i.value)
        }
        try {
            await createTest(
                questions[0].value, 
                questions[1].value, 
                questions[2].value, 
                questions[3].value, 
                questions[4].value, 
                questions[5].value, 
                questions[6].value
            )
        } catch (e) {

        }
    }

    return (
        <div className="TestContainer">
            <div className="CreatingTest">
                <div className="CreatingQuestionContainer">
                    <div className="TestSub">Создание вопроса</div>
                    <select className="CategoryChoose" name="Category">
                        <option value="1">Основы информационных технологий</option>
                        <option value="2">Сети и коммуникации</option>
                        <option value="3">Языки программирования</option>
                        <option value="4">Базы данных</option>
                        <option value="5">Безопасность информации</option>
                        <option value="6">Веб-технологии</option>
                        <option value="7">Управление проектами и методологии разработки</option>
                    </select>
                    <textarea 
                        className="TestTextarea Question" 
                        placeholder="Вопрос" 
                        type="text" 
                        value={question} 
                        onChange={(e) => {
                            setQuestion(e.target.value)
                            e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                        }} 
                    />
                    <div className="TextareaContainer">
                        <textarea 
                            className="TestTextarea Answer1" 
                            placeholder="Ответ 1" 
                            type="text" 
                            value={answer1} 
                            onChange={(e) => {
                                setAnswer1(e.target.value)
                                e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                            }} 
                        />
                        <input className="Checkbox" id="1" type="checkbox" defaultChecked="true" onClick={checkboxChange} />
                    </div>
                    <div className="TextareaContainer">
                        <textarea 
                            className="TestTextarea Answer2" 
                            placeholder="Ответ 2" 
                            type="text" 
                            value={answer2} 
                            onChange={(e) => {
                                setAnswer2(e.target.value)
                                e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                            }} 
                        />
                        <input className="Checkbox" id="2" type="checkbox" onClick={checkboxChange} />
                    </div><div className="TextareaContainer">
                        <textarea 
                            className="TestTextarea Answer3" 
                            placeholder="Ответ 3" 
                            type="text" 
                            value={answer3} 
                            onChange={(e) => {
                                setAnswer3(e.target.value)
                                e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                            }} 
                        />
                        <input className="Checkbox" id="3" type="checkbox" onClick={checkboxChange} />
                    </div><div className="TextareaContainer">
                        <textarea 
                            className="TestTextarea Answer4" 
                            placeholder="Ответ 4" 
                            type="text" 
                            value={answer4} 
                            onChange={(e) => {
                                setAnswer4(e.target.value)
                                e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                            }} 
                        />
                        <input className="Checkbox" id="4" type="checkbox" onClick={checkboxChange} />
                    </div>
                    <button className="TestBtn" onClick={sendQuestion}>Создать вопрос</button>
                </div>
                <div className="CreatingTestContainer">
                    <div className="TestSub">Создание теста</div>
                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="1">Вопрос 1</div>
                        <div className="QuestionTopic">Тема: "Базы данных"</div>
                        <select className="QuestionChoose" name="Question">
                            {databases.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )                        
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="2">Вопрос 2</div>
                        <div className="QuestionTopic">Тема: "Безопасность информации"</div>
                        <select className="QuestionChoose" name="Question">
                            {security.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="3">Вопрос 3</div>
                        <div className="QuestionTopic">Тема: "Сети и коммуникации"</div>
                        <select className="QuestionChoose" name="Question">
                            {networking.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="4">Вопрос 4</div>
                        <div className="QuestionTopic">Тема: "Управление проектами и методологии разработки"</div>
                        <select className="QuestionChoose" name="Question">
                            {projectmanagement.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="5">Вопрос 5</div>
                        <div className="QuestionTopic">Тема: "Веб-технологии"</div>
                        <select className="QuestionChoose" name="Question">
                            {webtech.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="6">Вопрос 6</div>
                        <div className="QuestionTopic">Тема: "Языки программирования"</div>
                        <select className="QuestionChoose" name="Question">
                            {programming.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="TestQuestionContainer">
                        <div className="TestQuestion" id="7">Вопрос 7</div>
                        <div className="QuestionTopic">Тема: "Основы информационных технологий"</div>
                        <select className="QuestionChoose" name="Question">
                            {itbasics.questions.map((data, i) => {
                                return(
                                    <option key={data.id} value={data.id}>{data.question}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="TestBtn" onClick={sendTest}>Создать тест</button>
                </div>
            </div>
            <div className="SentModal None">Успешно отправлено</div>
            <div className="SentError None">Ошибка отправки</div>
        </div>
    );
})
 
export default TestCreate;