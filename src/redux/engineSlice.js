import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_COLOR } from '../components/grid/Engine/constants';

export const engineSlice = createSlice({
    name: 'engineSlice',
    initialState: {
        isEditorShown: false,
        settings: {
            figures: [],
            cache: {
                xCoordinate: 0,
                yCoordinate: 0,
                width: 0,
                height: 0,
                color: DEFAULT_COLOR
            }
        }
    },
    reducers: {
        setShowEditor: (state, action) => ({
            ...state,
            isEditorShown: action.payload
        }),
        setFigures: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                figures: [...state.settings.figures, action.payload]
            }
        }),
        setXCoordinate: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    ...state.settings.cache,
                    xCoordinate: action.payload
                }
            }
        }),
        setYCoordinate: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    ...state.settings.cache,
                    yCoordinate: action.payload
                }
            }
        }),
        setWidth: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    ...state.settings.cache,
                    width: action.payload
                }
            }
        }),
        setHeight: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    ...state.settings.cache,
                    height: action.payload
                }
            }
        }),
        setColor: (state, action) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    ...state.settings.cache,
                    color: action.payload
                }
            }
        }),
        clearCache: (state) => ({
            ...state,
            settings: {
                ...state.settings,
                cache: {
                    xCoordinate: 0,
                    yCoordinate: 0,
                    width: 0,
                    height: 0,
                    color: DEFAULT_COLOR
                }
            }
        }),
        clearFigures: (state) => ({
            ...state,
            settings: {
                ...state.settings,
                figures: []
            }
        })
    }
});

export const selectorShowEditor = (state) => state.engine.isEditorShown;
export const selectorColor = (state) => state.engine.settings.cache.color;
export const selectorXCoordinate = (state) => state.engine.settings.cache.xCoordinate;
export const selectorYCoordinate = (state) => state.engine.settings.cache.yCoordinate;
export const selectorWidth = (state) => state.engine.settings.cache.width;
export const selectorHeight = (state) => state.engine.settings.cache.height;
export const selectorFigures = (state) => state.engine.settings.figures;

export const {
    setShowEditor,
    setFigures,
    setColor,
    setXCoordinate,
    setYCoordinate,
    setWidth,
    setHeight,
    clearCache,
    clearFigures
} = engineSlice.actions;
