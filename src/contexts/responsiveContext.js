import React, { createContext, useReducer} from 'react';
import {responsiveState }from '../reducers/responsiveReducer';

export const Responsive = createContext();

const initialState = {
    sidebarShow: 'responsive'
  }

export const ResponsiveProvider = (props)=>{
    const [ state,dispatch] = useReducer(responsiveState, initialState);
    const value = {state,dispatch};
    
    return(
        <Responsive.Provider value={value}>
            {props.children}
        </Responsive.Provider>
    )
}