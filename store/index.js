export const state = () => ({
  list: []
});

export const mutations = {
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
  ADD_LIST(state, vocaList) {
    state.list.push(vocaList);
  }
};

export const actions = {
  async addVoca({ commit }, list) {
    await commit("ADD_LIST", list);
    console.log(list);
  }
};
