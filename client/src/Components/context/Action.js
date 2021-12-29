export const LoginStart=(userCredientals)=>({
    type:'LOGIN_START'
})

export const LoginSuccess =(user)=>({
    type:'LOGIN_SUCCESS',
    payload:user
})

export const LoginFailed =()=>9({
    type:'LOGIN_FAILED'
})

export const UpdateStart=(userCredientals)=>({
    type:'UPDATE_START'
})

export const UpdateSuccess =(user)=>({
    type:'UPDATE_SUCCESS',
    payload:user
})

export const UpdateFailed =()=>9({
    type:'UPDATE_FAILED'
})


export const Logout =()=>9({
    type:'LOGOUT'
})