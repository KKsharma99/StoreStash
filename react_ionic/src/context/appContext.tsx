// @ts-nocheck

import React, { createContext, useReducer } from 'react';

export let initialState = {
    userId: '',
    token: '',
    email: '',
    agreed: false,
}

type State = Readonly<typeof initialState>

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

getInitialState(initialState);

console.log(initialState);

export enum ActionTypes {
    setAuth = 'setAuth',
    setEmail = 'setEmail',
    setAgreed = 'setAgreed',
    setToken = 'setToken',
    setUser = 'setUser'
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
} | {
    type: ActionTypes.setToken,
    token: string
} | {
    type: ActionTypes.setUser,
    user: {
        email: string;
        password: string;
        passwordResetToken: string;
        passwordResetExpires: Date;

        token: string;

        profile: {
            name: string;
            gender: string;
            location: string;
            website: string;
            picture: string;
        };

        comparePassword: comparePasswordFunction;
        gravatar: (size: number) => string;
        construct: (email: string, password: string) => Promise<UserDocument>;
    }
} | any;

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
        case ActionTypes.setToken: {
            localStorage.setItem('token', action.token.toString());
            return { ...state, token: action.token };
        }
        case ActionTypes.setUser: {
            localStorage.setItem('user', action.user.toString());
            return { ...state, user: action.user };
        }
        default: {
            if (action[action.type] != null) {
                localStorage.setItem(action.type, action[action.type].toString());
                return { ...state, [action.type]: action[action.type] };
            } else {
                console.log(action);
                return state;
            }
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