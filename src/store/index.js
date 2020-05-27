import Vue from 'vue'
import Vuex from 'vuex'

import posts from './posts.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: posts
  },
  mutations: {
    createPost(state, post) {
      state.posts.unshift(post)

      localStorage.setItem('posts', JSON.stringify(state.posts))
    }
  },
  actions: {
    createPost({
      commit
    }, post) {
      commit('createPost', post)
    }
  },
  getters: {
    posts: s => s.posts,
    postsById: s => id => s.posts.find(t => t.id === id)
  }
})