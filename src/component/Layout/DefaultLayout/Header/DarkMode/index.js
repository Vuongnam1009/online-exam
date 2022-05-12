import {useEffect ,useState} from 'react'
import Box from '@mui/material/Box'
import {useSelector, useDispatch} from 'react-redux'
import { useTheme} from '@mui/material/styles'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import {setDarkMode} from '../../../../../redux/actions/index'

const DarkMode= ()=> {
    const theme = useTheme()
    const dispatch = useDispatch()
    const customization = useSelector((state)=>state.customization)
    const [isDark,setIsDark] = useState(customization.isDarkMode)
    useEffect(()=>{
        dispatch(setDarkMode(isDark))
    },[dispatch,isDark])
    return (
        <Box
            sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight:'8px',
            }}
            color="inherit"
            onClick={()=>setIsDark(!isDark)}
        >
            {isDark ? <Brightness7Icon/> : <Brightness4Icon/>}
        </Box>
    )
}

export default DarkMode