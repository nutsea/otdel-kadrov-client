import { $host } from ".";

//create

export const createQuestionDatabases = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/databases', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionItBasics = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/itbasics', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionNetworking = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/networking', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionProgramming = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/programming', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionProjectManagement = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/projectmanagement', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionSecurity = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/security', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

export const createQuestionWebTech = async (question, answer1, answer2, answer3, answer4, correct_answer) => {
    const {data} = await $host.post('api/webtech', {question, answer1, answer2, answer3, answer4, correct_answer})
    return data
}

//get all

export const getQuestionsDatabases = async () => {
    const {data} = await $host.get('api/databases')
    return data
}

export const getQuestionsItBasics = async () => {
    const {data} = await $host.get('api/itbasics')
    return data
}

export const getQuestionsNetworking = async () => {
    const {data} = await $host.get('api/networking')
    return data
}

export const getQuestionsProgramming = async () => {
    const {data} = await $host.get('api/programming')
    return data
}

export const getQuestionsProjectManagement = async () => {
    const {data} = await $host.get('api/projectmanagement')
    return data
}

export const getQuestionsSecurity = async () => {
    const {data} = await $host.get('api/security')
    return data
}

export const getQuestionsWebTech = async () => {
    const {data} = await $host.get('api/webtech')
    return data
}

//get one

export const getQuestionDatabases = async (databases_id) => {
    const {data} = await $host.get('api/databases/one', databases_id)
    return data
}

export const getQuestionItBasics = async (itbasics_id) => {
    const {data} = await $host.get('api/itbasics/one', itbasics_id)
    return data
}

export const getQuestionNetworking = async () => {
    const {data} = await $host.get('api/networking/one')
    return data
}

export const getQuestionProgramming = async () => {
    const {data} = await $host.get('api/programming/one')
    return data
}

export const getQuestionProjectManagement = async () => {
    const {data} = await $host.get('api/projectmanagement/one')
    return data
}

export const getQuestionSecurity = async () => {
    const {data} = await $host.get('api/security/one')
    return data
}

export const createTest = async (databases_id, security_id, networking_id, projectmanagement_id, webtech_id, programming_id, itbasics_id) => {
    const {data} = await $host.post('api/test', {databases_id, security_id, networking_id, projectmanagement_id, webtech_id, programming_id, itbasics_id})
    return data
}

export const getRandomTest = async () => {
    const {data} = await $host.get('api/test/random')
    return data
}