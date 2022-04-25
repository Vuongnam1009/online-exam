import React from 'react'
import {Box, Drawer, useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuList from './MenuList/index'

const SideBar= ({drawerOpen,drawerClose})=>{
    const theme = useTheme()
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const drawer = (
        <>
            <Box>
                <MenuList/>
            </Box>

        </>
    )
    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: '360px'}} aria-label="mailbox folders">
            <Drawer
                anchor="left"
                open = {drawerOpen}
                onClose={drawerClose}
                variant={matchUpMd?'persistent':'temporary'}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '270px',
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
)
}

export default SideBar