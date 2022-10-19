import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      user: {
        email: '',
        token: '',
      },
    };
  },
  mutations: {
    checkAuth(state, data) {
      state.user.email = data.user.email;
      state.user.token = data.accessToken;
    },
  },
  actions: {
    async getAuth({ commit }, { login }) {
      await axios
        .post('http://localhost:3000/login', {
          email: login.email,
          password: login.password,
        })
        .then((res) => {
          commit('checkAuth', res.data);
        });
    },
  },
  getters: {
    auth(state) {
      return state.user;
    },
  },
});

export default store;
