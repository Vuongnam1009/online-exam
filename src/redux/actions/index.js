export function setDarkMode(theme){
    return {
        type: 'SET_DARK_MODE',
        payload:theme
    }
}

export function setFontFamily(fontFamily){
    return {
        type: 'SET_FONT_FAMILY',
        payload:fontFamily
    }
}


export function setMenu(opened){
    return {
        type: 'SET_MENU',
        payload:opened
    }
}
export function setMenuOpen(id){
    return {
        type: 'MENU_OPEN',
        payload:id
    }
}