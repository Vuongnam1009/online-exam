
export const initial = {
    fontFamily:[],
    isDarkMode: false,
    drawerOpen: true
}


function customizationReducer(state= initial, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_DARK_MODE':
            return{
                ...state,
                isDarkMode:action.payload
            }
        case 'SET_FONT_FAMILY':
            return state;
        case 'SET_MENU':
            return {
                ...state,
                drawerOpen :action.payload
            }
        default:
            return state
    };
}
export default customizationReducer