export function loginStatus (state) {
  return state.isLogged
}

export function userData (state) {
  return state.form
}

export function userName (state) {
  return state.form.name
}

export function userSurname (state) {
  return state.form.surname
}

