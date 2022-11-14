const ALL_LISTS = 'lists/all'


const getAllListsAction = payload => {

    return {
        type: ALL_LISTS,
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

        default: {
            return state;
        }
    }
}
export default listReducer