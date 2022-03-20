import {useEffect ,useState} from 'react'
import Box from '@mui/material/Box'
import {useSelector, useDispatch} from 'react-redux'
import { useTheme} from '@mui/material/styles'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import {setDarkMode} from '../../../redux/actions/index'

function DarkMode() {
    const theme = useTheme()
    const dispatch = useDispatch()
    const customization = useSelector((state)=>state.customization)
    const [isDark,setIsDark] = useState(true)
    useEffect(()=>{
        dispatch(setDarkMode(isDark))
    },[dispatch,isDark])
    return (
        <Box
            sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            color="inherit"
            onClick={()=>setIsDark(!isDark)}
        >
            {isDark ? <Brightness7Icon sx={{color:'#fff'}} /> : <Brightness4Icon/>}
        </Box>
    )
}

export default DarkMode