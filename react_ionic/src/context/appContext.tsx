// @ts-nocheck

import React, { createContext, useReducer } from 'react';
import { prependOnceListener } from 'cluster';

const initialState = {
    email: '',
    password1: '',
    password2: '',
    agreed: true,
}
// @ts-ignore
export let AppContext = createContext<{state: any, dispatch: (action: any) => void}>({ state: initialState});

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
    let [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;