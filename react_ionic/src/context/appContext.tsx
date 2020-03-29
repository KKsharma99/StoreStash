import React, { createContext, useReducer } from 'react';
import { prependOnceListener } from 'cluster';

let AppContext = createContext<{state: any, dispatch: (action: any) => void} | null>(null);

enum ActionTypes {
    setAuth = 'setAuth',
}

let reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.setAuth: {
            return { ...state, auth: action.auth }
        }
    }
    return state;
}

export const AppContextProvider = ({ children }) => {
    const fullInitialState = {}
    let [state, dispatch] = useReducer(reducer, fullInitialState);
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;