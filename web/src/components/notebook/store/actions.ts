export default {
    updateNoteFilter: ({commit}, noteFilter) => {
      commit('UPDATE_NOTE_FILTER', noteFilter)
    },
    updateNoteFilterTitle: ({commit}, title) => {
      commit('UPDATE_NOTE_FILTER_TITLE', title)
    },
    updateNoteFilterAuthors: ({commit}, emails) => {
      commit("UPDATE_NOTE_FILTER_AUTHORS", emails)
    },
    updateNoteFilterStart: ({commit}, start) => {
      commit("UPDATE_NOTE_FILTER_START", start)
    },
    updateNoteFilterEnd: ({commit}, end) => {
      commit("UPDATE_NOTE_FILTER_END", end)
    },
    storeInitialFilter: ({commit}, query) => {
      commit("STORE_INITIAL_FILTER", query)
    }
  }