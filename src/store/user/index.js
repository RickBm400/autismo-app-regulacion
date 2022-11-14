import state from './state'
import * as mutations from './mutations'

const namespaced = true

export default{
    namespaced,
    mutations,
    state
}