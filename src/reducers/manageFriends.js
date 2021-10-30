export function manageFriends(state, action){
    swtich (action.type) {
        case "ADD_FRIEND":
            return { friends: state.friends + 1 };
        case "REMOVE_FRIEND":
            return { friends: state.friends - 1 };
            default: 
              return state
    }
}
    
    

let state = { friends: [] };
let action = { type: "ADD_FRIEND" }

managePresents(state, action);