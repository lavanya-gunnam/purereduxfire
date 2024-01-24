
const initialSate = {
    data: [],
    selectEmployeeId: null,
}

const Reducer = (state = initialSate, action) => {
    debugger
    switch(action.type){
        case 'SET_DATA' :
            const newStateSetData = {
                ...state,
                data: action.payload,
              };
              console.log('data in reducer',newStateSetData)
              return newStateSetData;
        case 'SELECT_ID' :
            return {
                ...state,
                selectEmployeeId : action.payload,
            }     
        default:
            return state;    
    }
}

 export default Reducer;