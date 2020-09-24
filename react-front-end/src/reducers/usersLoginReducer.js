export default (state=[],action)=>{
    switch (action.type){
        case 'FETCH_Login':
            return action.payload

        default:
            return state
    }
}