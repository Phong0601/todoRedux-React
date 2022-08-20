export const addTodo = (data) => {
    return {
        type:'ADD_DATA',
        payload:data,
    } 
}
export const filterTodo = (text) => {
    return{
        type:'FILTER_SEARCH',
        payload:text,
    }
}
export const filterStatus = (status) => {
    return{
        type:'FILTER_STATUS',
        payload:status,
    }
}
export const filterPriority = (status) => {
    return{
        type:'FILTER_PRIORITY',
        payload:status,
    }
}
export const checkedBox = (id) => {
    return{
        type:'CHECKED_BOX',
        payload:id,
    }
}