const ALL_LISTS = 'lists/all'
const ONE_LIST = 'lists/one'
const CREATE_LIST = 'lists/new' 
const EDIT_LIST = 'list/edit'
const DELETE_LIST = 'lists/delete'


const editListAction = (list) => {
    return {
        type: EDIT_LIST,
        list
    }
}

const getAllListsAction = payload => {

    return {
        type: ALL_LISTS,
        payload
    }
}

const getOneList = payload => {
    return {
        type: ONE_LIST,
        payload
    }
}

const createListAction = (payload) => { 
    return { 
        type: CREATE_LIST, 
        payload 
    } 
} 


const deleteListAction = (payload) => {
     return { 
        type: DELETE_EVENT, 
        payload 
    } 
} 


// thunkville
// John Lee Thunk

export const fetchLists = () => async dispatch => {

    const res = await fetch('/api/all/lists')

    if (res.ok) {

        const lists = await res.json();

        dispatch(getAllListsAction(lists));

        return lists

    }
}

export const fetchOneList = (id) => async dispatch => {

    const res = await fetch(`/api/all/lists.${id}`)

    if (res.ok) {
        const singleList = await res.json()

        dispatch(getOneList(singleList))

        return singleList
    }
}

export const createListThunk = (payload) = async dispatch => {  
    const response = await fetch('/api/all/lists/new_list', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) 
    }) 

    const data = await response.json() 
    if (response.ok) { 
        await dispatch(createListAction(data))
        return data 
    } else { 
        return data 
    } 
} 


export const deleteEvent = (id) => async dispatch => { 
    const response = await fetch(`/api/all/lists/${id}`, {
        method: 'DELETE' 
    }) 
    
    const data = await response.json();
    if(response.ok){ 
        dispatch(deleteListAction()); 
        return data 
    } else { 
        return response; 
    } 
} 


export const editListThunk = (list) => async dispatch => {
    const response = await fetch(`/api/all/lists${list.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    });
    if (response.ok) {
        const list = await response.json();
        dispatch(editListAction(list))
        return list
    }
    throw new Error("Error with list Thunk")
}


//  reducerville

const initialState = {}

const listReducer = (state = initialState, action) => {

    let newState = {}

    switch (action.type) {
        case ALL_LISTS: {
            action.payload.lists.forEach(list => {
                newState[list.id] = list
            })
            return newState
        }

        case ONE_LIST: {
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        case CREATE_LIST: { 
            newState = { ...state } 
            newState[action.payload.id] = action.payload 
            return newState 
        } 

        case EDIT_LIST: 
            return {
                ...state,
                [action.list.id]: action.list
            }

        case DELETE_LIST: {
            newState = { ...state } 
            delete newState[action.payload] 
            return newState
        }         

        default: {
            return state;
        }
    }
}
export default listReducer