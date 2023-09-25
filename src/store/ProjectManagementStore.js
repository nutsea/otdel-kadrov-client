import {makeAutoObservable} from 'mobx'

export default class ProjectManagementStore {
    constructor() {
        this._questions = []
        makeAutoObservable(this)
    }

    setQuestions(questions) {
        this._questions = questions
    }

    get questions() {
        return this._questions
    }

    getQuestion(id) {
        return this._questions.find(question => question.id === id)
    }
}