import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type Auth = {
    isLoggedIn: boolean;
    token: string | null;
    userProperties: Array<string>
}

export type AuthState = {
    auth: Auth
};

export const INITIAL_STATE: AuthState = {
    auth: {
        isLoggedIn: false,
        token: null,
        userProperties: []
    }
};

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        changeAuthState: (state: AuthState, action: PayloadAction<Auth>) => {
            const newAuth = action.payload;
            state.auth = newAuth;
        }
    },
    initialState: INITIAL_STATE
});

export const {changeAuthState} = authSlice.actions;

