import { getAllUsers } from '../../services/userServices.js'

const state = {
    user: null, //Aquí se almacena al usuario logeado
    users: [], //Aquí se almacena el total de usuarios registrados para validar
};

const getters = {
    getUser: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
    isAdmin: (state) => !!state.user?.admin,
    getUsers: (state) => state.users,
};

const mutations = {
    setUser: (state, user) => state.user = user,
    addUser: (state, user) => state.users.push(user),
    setUsers: (state, users) => state.users = users
}

const actions = {
    loginUser({ commit, state }, { email, password }) {
        const user = state.users.find(user => user.correo === email && user.password === password)
        if(!user) throw new Error('Credenciales Invalidas')
        
        commit('setUser', user)

    },

    logout({ commit }) {
        commit('setUser', null)
    },

    async fetchUsersFromJson({ commit }) {
        const users = await getAllUsers()
        commit('setUsers', users)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}