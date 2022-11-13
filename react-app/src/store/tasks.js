const ALL_TASKS = 'tasks/all'






const getAllTasksAction = payload => {

    return {
        type: ALL_TASKS,
        payload
    }
}



// thunkville




// read / get tasks 


// I love pebbles Thunk


export const fetchTasks = () => async dispatch => {
    const res = await fetch('/api/all');
    console.log('i am here')
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

            action.payload.tasks.forEach(task => {
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