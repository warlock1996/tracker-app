import React, { useEffect } from "react"
import Reducer from './Reducer'

const initialState  = {
    country: 'Global',
    stats: {},
    daily: []
}

export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch] = React.useReducer(Reducer, initialState);
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'set-stats', payload: data})
        })  
        fetch('https://covid19.mathdro.id/api/daily')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'set-daily', payload: data})
        })  
    }, [])
    useEffect(() => {
        if (state.country !== "Global") {
            fetch('https://covid19.mathdro.id/api/countries/'+state.country)
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'set-stats', payload: data})
            })  
        } else {
            fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'set-stats', payload: data})
            })  
        }
    }, [state.country])
    return (
        <GlobalContext.Provider value= {
            {
                state: state, 
                dispatcher: dispatch
            }
        }>
            { props.children }
        </GlobalContext.Provider>
    )
}