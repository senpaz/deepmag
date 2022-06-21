import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state() {
    return {
      isLogged: false,
      form: {
        mail: '',
        password2: '',
        password21: '',
        surname: '',
        name: '',
        phone: '',
        login: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        index: '',
        region: '',
        card: '',
      },
    }
  }
}