export function setUser(state, userData){
    state.user = userData
}

export function logOut(state){
    state.user = {}
}