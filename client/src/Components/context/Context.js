import { createContext,useEffect,useReducer } from "react"
import Reducer from './Reducer';

const IntialState={
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
}

export const Context = createContext(IntialState);


export const ContextProvider =({children}) =>{
    const [state,dispatch] = useReducer(Reducer,IntialState);
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user])

    return(
        <Context.Provider value={{
           user: state.user,
           isFetching:state.isFetching,
           error:state.error,
           dispatch,
        }}>{children}</Context.Provider>
    )
    
}