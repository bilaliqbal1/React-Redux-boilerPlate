const Reducer = (INITIAL_STATE = 0, action) =>{
    switch (action.type){
        case "deposit":
            return INITIAL_STATE + action.payload;
        case "withdraw":
            return INITIAL_STATE - action.payload;
        default:
            return INITIAL_STATE;
    }
};

export default Reducer;