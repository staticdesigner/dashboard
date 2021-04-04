export const state = () => ({
  popup: false,
  dark: false,
  installedapps: [
    { appid: 1, name: 'Photoshop', status: 'Updated' },
    { appid: 2, name: 'Illustrator', status: 'Update Available' },
    { appid: 3, name: 'After Effects', status: 'Updated' },
  ],
})

export const getters = {}

export const mutations = {
  togglePopup(state) {
    state.popup = !state.popup
  },
}

export const actions = {
  togglePopup(context) {
    context.commit('togglePopup')
  },
}
