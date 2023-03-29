

function logger(reducer) {

    return (prev, action) => {

        console.group(action.type);
        console.log('Prev State: ', prev);
        console.log('Action: ', action);

        const newState = reducer(prev, action)

        console.log('Next State: ', newState);

        console.groupEnd(action.type);

        return newState
    }
}

export default logger