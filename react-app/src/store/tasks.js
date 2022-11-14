const ALL_TASKS = 'tasks/all'
const ONE_TASK = 'tasks/one'






const getAllTasksAction = payload => {

    return {
        type: ALL_TASKS,
        payload
    }
}

const oneTask = payload => {
    return {
        type: ONE_TASK,
        payload
    }
}



// thunkville




// read / get tasks 


// pebbles Thunk


export const fetchTasks = () => async dispatch => {
    const res = await fetch('/api/all');
    
    if (res.ok) {

        const tasks = await res.json();

        dispatch(getAllTasksAction(tasks));

        return tasks

    }
}

export const fetchOneTask = id => async dispatch => {
        
    const res = await fetch(`/api/all/${id}`)
    if (res.ok) {

        const singleTask = await res.json()

        dispatch(oneTask(singleTask))

        return singleTask
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

        case ONE_TASK: {

            newState = {...state}
            newState[action.payload.id] = action.payload

            return newState
        }

        default: {
            return state;
        }
    }
}


export default taskReducer