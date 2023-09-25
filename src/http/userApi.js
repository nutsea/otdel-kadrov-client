import { $host } from ".";

export const createUser = async (name, surname, otchestvo, address, birthdate, education) => {
    const {user} = await $host.post('api/user', {name, surname, otchestvo, address, birthdate, education})
    return user
}