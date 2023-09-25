import React, { useState } from "react";
import './../styles/user.scss'
import { createUser } from "../http/userApi";

const User = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [otchestvo, setOtchestvo] = useState()
    const [address, setAddress] = useState()
    const [birthdate, setBirthdate] = useState()
    const [education, setEducation] = useState()


    //отправка формы данных о пользователе на сервер
    const send = async () => {
        if (!name) document.querySelector('.Name').classList.add('Error')
        if (!surname) document.querySelector('.Surname').classList.add('Error')
        if (!otchestvo) document.querySelector('.Otchestvo').classList.add('Error')
        if (!address) document.querySelector('.Address').classList.add('Error')
        if (!birthdate) document.querySelector('.Birth').classList.add('Error')
        if (!education) document.querySelector('.Edu').classList.add('Error')

        if (name && surname && otchestvo && address && birthdate && education)
        try {
            await createUser(name, surname, otchestvo, address, birthdate, education)
                .then(() => {
                    setName('')
                    setSurname('')
                    setOtchestvo('')
                    setAddress('')
                    setBirthdate('')
                    setEducation('')
                    document.querySelector('.SentModal').classList.remove('None')
                    setTimeout(() => {
                        document.querySelector('.SentModal').classList.add('None')
                    }, 3000)
                })
        } catch (e) {
            document.querySelector('.SentError').classList.remove('None')
            setTimeout(() => {
                document.querySelector('.SentError').classList.add('None')
            }, 3000)
        }
    }

    return (
        <div className="UserContainer">
            <div className="UserSub">Заполните форму</div>
            <input 
                className="Input Surname" 
                placeholder="Фамилия" 
                value={surname}
                onChange={(e) => {
                    setSurname(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <input 
                className="Input Name" 
                placeholder="Имя" 
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <input 
                className="Input Otchestvo" 
                placeholder="Отчество" 
                value={otchestvo}
                onChange={(e) => {
                    setOtchestvo(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <textarea 
                className="Textarea Address" 
                placeholder="Адрес проживания" 
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <input 
                className="Input Birth" 
                type="date" 
                value={birthdate}
                onChange={(e) => {
                    setBirthdate(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <textarea 
                className="Textarea Edu" 
                placeholder="Образование" 
                value={education}
                onChange={(e) => {
                    setEducation(e.target.value)
                    e.target.value ? e.target.classList.remove('Error') : e.target.classList.add('Error')
                }} 
            />
            <button className="Button" onClick={send}>Отправить</button>
            <div className="SentModal None">Успешно отправлено</div>
            <div className="SentError None">Ошибка отправки</div>
        </div>
    );
}
 
export default User;