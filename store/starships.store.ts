import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Starship, Pagination } from '../types'
import { getStarships, getStarship } from '../api'
import { RootState } from './index'

export const namespaced = true

export const types = {
  SET_STARSHIPS: 'SET_STARSHIPS',
  SET_STARSHIP: 'SET_STARSHIP',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_LOADING: 'SET_LOADING'
}

export interface State {
  starships: [Starship?]
  starship: Starship,
  pagination: Pagination
}

export const state = (): State => ({
  starships: [],
  starship: <Starship>{},
  pagination: {
    hasPreviousPage: false,
    hasNextPage: false,
    page: 1
  }
})

export const getters: GetterTree<State, RootState> = {
  starships: state => state.starships,
  starship: state => state.starship,
  pagination: state => state.pagination
}

export const mutations: MutationTree<State> = {
  [types.SET_STARSHIPS] (state, data) {
    state.starships = data
  },
  [types.SET_STARSHIP] (state, data) {
    state.starship = data
  },
  [types.SET_PAGINATION] (state, data) {
    state.pagination = { ...state.pagination, ...data }
  }
}

export const actions: ActionTree<State, RootState> = {
  async getStarships ({ state, commit }, page) {
    const response = await this.$axios[`$${getStarships.type}`](`${getStarships.url}?page=${page}`)
    commit(types.SET_STARSHIPS, response.results)
    commit(types.SET_PAGINATION, { hasPreviousPage: !!response.previous, hasNextPage: !!response.next, page })
  },

  async getStarship ({ state, commit }, id) {
    commit(types.SET_STARSHIP, await this.$axios[`$${getStarship.type}`](getStarship.url.replace(':id', id)))
  }
}
