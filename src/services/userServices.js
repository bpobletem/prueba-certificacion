import axios from 'axios'

export const getAllUsers = async() => {
    const { data } = await axios.get('/api/usuarios.json')
    return data
}