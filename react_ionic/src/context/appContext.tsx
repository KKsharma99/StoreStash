// @ts-nocheck

import React, { createContext, useReducer } from 'react';

type State = {
    auth: string,
    email: string,
    agreed: boolean,
}

function getInitialState(initialState) {
    for (const key of Object.keys(initialState)) {
        if (localStorage.hasOwnProperty(key)) {
            if (typeof(initialState[key]) === 'boolean' && (localStorage[key] === 'false' || localStorage[key] === 'true')) {
                initialState[key] = localStorage[key] == 'true';
            } else {
                initialState[key] = localStorage[key];
            }
        }
    }
}

export let initialState: State = {
    auth: '',
    email: '',
    agreed: false,
}

getInitialState(initialState);

console.log(initialState);

export enum ActionTypes {
    setAuth = 'setAuth',
    setEmail = 'setEmail',
    setAgreed = 'setAgreed',
}

type Action = {
    type: ActionTypes.setAuth,
    auth: string
} | {
    type: ActionTypes.setEmail,
    email: string
} | {
    type: ActionTypes.setAgreed,
    agreed: boolean
}

export const AppContext = createContext<{state: State, dispatch: (action: Action) => void}>({ state: initialState, dispatch: null as any });

export const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.setAuth: {
            localStorage.setItem('auth', action.auth);
            return { ...state, auth: action.auth };
        }
        case ActionTypes.setEmail: {
            localStorage.setItem('email', action.email);
            return { ...state, email: action.email };
        }
        case ActionTypes.setAgreed: {
            localStorage.setItem('agreed', action.agreed.toString());
            return { ...state, agreed: action.agreed };
        }
    }
}

export const AppContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}