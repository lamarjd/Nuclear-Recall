const ALL_TASKS = 'tasks/all'






const getAllTasksAction = payload => {

    return {
        type: ALL_TASKS,
        payload
    }
}



// thunkville




// read / get tasks 
// John Lee Thunk


export const fetchTasks = () => async dispatch => {
    const res = await fetch('/api/tasks');

    if (res.ok) {

        const tasks = await res.json();

        dispatch(getAllTasksAction(tasks));

        return tasks

    }
}



// wasted away in reducerville


const initialState = {}


const taskReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case ALL_TASKS: {

            action.payload.Tasks.forEach(task => {
                newState[task.id] = task
            })

            return newState

        }

        default: {
            return state;
        }
    }
}


export default taskReducer