// @ts-nocheck

import React, { createContext, useReducer } from 'react';

type State = {
    email: string,
    password1: string,
    password2: string,
    agreed: boolean,
}

export const initialState: State = {
    email: '',
    password1: '',
    password2: '',
    agreed: true,
}

export enum ActionTypes {
    setAuth = 'setAuth',
    setEmail = 'setEmail',
    setPassword1 = 'setPassword1',
    setPassword2 = 'setPassword2',
    setAgreed = 'setAgreed',
}

type Action = {
    type: ActionTypes.setAuth,
    auth: string
} | {
    type: ActionTypes.setEmail,
    email: string
} | {
    type: ActionTypes.setPassword1,
    password: string
} | {
    type: ActionTypes.setPassword2,
    password: string
} | {
    type: ActionTypes.setAgreed,
    agreed: boolean
}

export const AppContext = createContext<{state: State, dispatch: (action: Action) => void}>({ state: initialState, dispatch: null as any });

export const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.setAuth: {
            localStorage.setItem(ActionTypes.setAuth, action.auth);
            return { ...state, auth: action.auth };
        }
        case ActionTypes.setEmail: {
            localStorage.setItem(ActionTypes.setEmail, action.email);
            return { ...state, email: action.email };
        }
        case ActionTypes.setPassword1: {
            localStorage.setItem(ActionTypes.setPassword1, action.password);
            return { ...state, password: action.password };
        }
        case ActionTypes.setPassword2: {
            localStorage.setItem(ActionTypes.setPassword2, action.password);
            return { ...state, password: action.password };
        }
        case ActionTypes.setAgreed: {
            localStorage.setItem(ActionTypes.setAgreed, action.agreed);
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

export default AppContextProvider;