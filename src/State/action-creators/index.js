export const depositeMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            action : "deposite",
            payload : amount
        })
    }
}

export const withdraweMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            action : "withdraw",
            payload : amount
        })
    }
}