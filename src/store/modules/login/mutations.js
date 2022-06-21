export function updateLogin (state, payload) {
    console.log('mutation:', payload)
    state.form = payload
    state.isLogged = true
}