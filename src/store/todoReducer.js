import { GET_TODOS_LIST_CALLED, ADD_TODO_CALLED, DELETE_TODO_CALLED, UPDATE_TODO_CALLED, TOGGLE_TODO } from "./Constants";

// Define the initial state of the reducer
const initialState = {
          todos: []
};

// Define the reducer function
function todoReducer(state = initialState, action) {
          switch (action.type) {
                    case ADD_TODO_CALLED:
                              // Add a new todo to the state
                              return {
                                        ...state,
                                        todos: [
                                                  ...state.todos,
                                                  {
                                                            id: state.todos.length + 1,
                                                            text: action.data.text,
                                                            completed: false
                                                  }
                                        ]
                              };
                    case TOGGLE_TODO:
                              // Toggle the completed status of a todo
                              return {
                                        ...state,
                                        todos: state.todos.map(todo =>
                                                  todo.id === action.id
                                                            ? { ...todo, completed: !todo.completed }
                                                            : todo
                                        )
                              };
                    case DELETE_TODO_CALLED:
                              // Remove a todo from the state
                              return {
                                        ...state,
                                        todos: state.todos.filter(todo => todo.id !== action.id)
                              };
                    case UPDATE_TODO_CALLED:
                              // Update a todo in the state
                              return {
                                        ...state,
                                        todos: state.todos.map(todo =>
                                                  todo.id === action.data.id
                                                            ? { ...todo, text: action.data.text }
                                                            : todo
                                        )
                              };
                    default:
                              // If the action type is not recognized, return the current state
                              return state;
          }
}

// Export the reducer function
export default todoReducer;
