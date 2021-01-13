const initialState = [ { id: 1, todo: 'Buy pan', done: false} ];

const todoReducer = ( state = initialState, action ) => {
    if ( action?.type === 'agregar' ) { return [ ...state, action.payload ] };
    return state;
};

let todos = todoReducer();

const newTodo = { id: 2, todo: 'Buy milk', done: false };

const addTodoAction = { type: 'add', payload: newTodo };

todos = todoReducer( todos, addTodoAction );

console.log(todos);

