import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADED":
            return {
            isLoaded: true
        }
        case "LOADING":
            return {
                isLoaded: false
            }
            default: {
                return state
            }
    }
}

const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, {
        isLoaded: false
    })

    return {globalState, globalDispatch}
}

export default useGlobalState