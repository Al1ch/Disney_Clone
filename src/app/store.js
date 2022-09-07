import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice' //Donne accès aux reducer

export default configureStore ({
    reducer: {
        user: userReducer
    },
    middleware : getDefaultMiddleware({
        serializableCheck : false,
    }),
});