import './styles/base.scss'
import './styles/app.scss'
import AppRoutes from './AppRoutes'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from '.'
import { getQuestionsDatabases, getQuestionsItBasics, getQuestionsNetworking, getQuestionsProgramming, getQuestionsProjectManagement, getQuestionsSecurity, getQuestionsWebTech } from './http/testApi'

function App() {
    const {databases, itbasics, networking, programming, projectmanagement, security, webtech} = useContext(Context)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

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

    const navigate = useNavigate()

    const handleNavigate = (e) => {
        navigate(e.target.id)
    }

    return (
        <div className="App">
            <header className='Header'>
                <div id='/' onClick={handleNavigate} className='HomeBtn'>Отдел кадров IT</div>
                <div className='Buttons'>
                    <button className='TestBtn' id='/test' onClick={handleNavigate}>Тестирование</button>
                    <button className='TestBtn' id='/testcreate' onClick={handleNavigate}>Создать тест</button>
                </div>
            </header>
            <AppRoutes />
        </div>
    )
}

export default App