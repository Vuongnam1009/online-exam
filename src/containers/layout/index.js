import { Box,AppBar,Toolbar} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Header from './header/index'
import SideBar from './sideBar/index'
import {useSelector, useDispatch} from 'react-redux'
import {setMenu} from '../../redux/actions/index'

const Layout=()=>{
    const theme = useTheme()
    const leftDrawerOpened = useSelector((state) => state.customization.drawerOpen)
    const dispatch = useDispatch()

    const handleLeftDrawerToggle = () => {
        dispatch(setMenu(!leftDrawerOpened))
    };


    return (
        <Box sx={{display: 'flex',}}>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.primary,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            <SideBar drawerOpen={leftDrawerOpened} drawerClose={handleLeftDrawerToggle}/>
        </Box>
    )
}

export default Layout