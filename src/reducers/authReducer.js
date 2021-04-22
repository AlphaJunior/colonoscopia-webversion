export const firebaseAuth = (state, action)=>{
    switch (action.type) {
        case "SIGNIN":
            console.log("signin",action.payload)
            return {...state,user:action.payload}
        case "LOGIN":
            console.log("login:",action.payload)
            return {...state,user:action.payload}
        case "LOGOUT":
            console.log("logout:",action.payload)
            return {...state,user:action.payload}
    
        default:
            return state;
    }
}