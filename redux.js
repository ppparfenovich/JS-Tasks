
let initialState = {
  items: [],
  isLoading: false,
  error: ''
}

state = {};

const actionCreator = {
  setItem: (item) => ({type: 'SET_ITEM', payload: item}),
  setIsLoading: (payload) => ({type: 'SET_IS_LOADING', payload: payload}),
  setError: (error) => ({type: 'SET_ERROR', payload: error})
}

// const action = {
//   type: 'SET_ITEM',
//   payload: item
// }

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, items: [ ...state.items, action.payload]}
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload}
    case 'SET_ERROR':
      return { ...state, error: action.payload}
    default: 
      return state
  }
}

let subscribers = [];

const updateSubscribers = () => {
  currentState = getState();
  return () => {
    subscribers = subscribers.map(sub => sub.selector = useSelector(currentState))
  }
}


function createStore(reducer, initialState) {
  state = initialState;
  
  return {
    dispatch: (actionCreator) => {
      reducer(state, actionCreator);
      updateSubscribers();
    },

    getState: () => state,

    subscribe: (subscriber) => subscribers.push(subscriber)
  }
}

