import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'

export const types = {}

export interface RootState {
}

export const state = (): RootState => ({})

export const getters: GetterTree<RootState, RootState> = {}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (context: ActionContext<S, R>): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit ({ commit }) {
  }
}

export const mutations: MutationTree<RootState> = {}
