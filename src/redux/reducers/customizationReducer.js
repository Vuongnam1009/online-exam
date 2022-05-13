export const initial = {
  isOpen: "1",
  fontFamily: [],
  isDarkMode: false,
  drawerOpen: true,
  borderRadius: 12,
  token: null,
};

function customizationReducer(state = initial, action) {
  switch (action.type) {
    case "SET_DARK_MODE":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case "SET_FONT_FAMILY":
      return state;
    case "SET_MENU":
      return {
        ...state,
        drawerOpen: action.payload,
      };
    case "MENU_OPEN":
      return {
        ...state,
        isOpen: action.payload,
      };
      case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
export default customizationReducer;
