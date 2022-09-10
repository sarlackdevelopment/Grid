import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './testSlice';
//import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = {
    test: testSlice.reducer
};

export const store = configureStore({
    reducer,
    devTools: true
});

// export type TAppDispatch = typeof store.dispatch
// export type TStore = ReturnType<typeof store.getState>;

// export const useAppDispatch = () => useDispatch<TAppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector
