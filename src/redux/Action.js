

export const setData = (data) => {
    debugger
    console.log('i am data in action file',data)
    return{
        type: "SET_DATA",
        payload: data,
    };
};
 
export const select_Id = (id) => {
    debugger
    return {
        type: "SELECT_ID",
        payload: id,
    }
}

