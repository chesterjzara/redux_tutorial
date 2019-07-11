import { ADD_ARTICLE } from "../constants/action-types"

const initialSate = {
    articles: []
};

function rootReducer(state = initialSate, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign( {}, state, {
            articles: state.articles.concat(action.payload)
        });
        // State must be immutable and not altered in place, so we create a new state via Object.assign
        // This adds the existing other properties of state, plus appends our article into the array of articles without changing the state directly (like .push would)
    }
    return state;
    // If no action found, return original state as new state
}

export default rootReducer;
