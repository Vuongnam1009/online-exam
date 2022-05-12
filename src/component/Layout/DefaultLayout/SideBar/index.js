import React from 'react'
import {Box, Drawer, useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuList from './MenuList/index'
import {drawerWidth, appDrawerWidth} from '../../../../redux/store/constant'

const SideBar= ({drawerOpen,drawerClose})=>{
    const theme = useTheme()
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { md: 0 },
                width:`${appDrawerWidth}px`
            }}
            aria-label="mailbox folders"
        >
            <Drawer
                anchor="left"
                open = {drawerOpen}
                onClose={drawerClose}
                variant={matchUpMd?'persistent':'temporary'}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                        marginLeft:`${(appDrawerWidth - drawerWidth)/2}px`,
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '80px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                <Box>
                <MenuList/>
                </Box>
            </Drawer>
        </Box>
)
}

export default SideBar