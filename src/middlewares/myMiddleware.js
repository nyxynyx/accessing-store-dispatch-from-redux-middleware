const myMiddleware = () => {
    return ({ getState, dispatch }) => {
        console.log(getState)       // undefined
        console.log(dispatch)       // undefined

        return next => action => {
            return next(action);
        }
    }
}

export default myMiddleware