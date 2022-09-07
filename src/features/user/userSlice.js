import {createSlice} from '@reduxjs/toolkit' //Slice créer des partie de state pour user

const initialState = { //Le State qu'on manipule pour les users Login
    type : "",
    name : "",
    email : "",
    photo : "",
};

const userSlice = createSlice ( {
    name : 'user', //Slice = tranche juste pour user plusieur dans le store
    initialState,
    reducers: { //reducer => des comportements à faire sur ton state
        setUserLoginDetails: (state,action) => { //Methode qu'on utilsier pour se login
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },

        setSignOutState : (state) => { //Methode pour signout
            state.name = null;
            state.email = null;
            state.photo = null;
        },

    }
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions; //Va globaliser les fonction grace action

export const selectUsername = state => state.user.name; //On va exporter le nom provenant du state situer dans le userSlice
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;