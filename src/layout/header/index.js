import { Avatar, Box, ButtonBase } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import DarkMode from './darkMode/DarkMode';
import SelectLanguage from './selectLanguage/selectLanguage'

function Header({handleLeftDrawerToggle}) {
    const theme = useTheme()
    console.log(theme)
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                marginTop:'8px',
                height:'60px',
                width:'100%',
                padding: '0 8px 0 8px'
            }}
        >
            {/* Logo & toggle button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex'
                }}
            >
                <Box
                    sx={{
                        display: {sx:'none',md:'block'},
                        color: theme.palette.secondary.dark,
                        fontWeight: 'bold',
                        fontSize: '20px',
                        marginRight:'16px'
                    }}
                >
                    MULTICHOICE
                </Box>
                <ButtonBase>
                    <Avatar
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover':{
                                backgroundColor: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick ={handleLeftDrawerToggle}
                    >
                        <MenuIcon/>
                    </Avatar>
                </ButtonBase>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <DarkMode/>
                <SelectLanguage/>
            </Box>
        </Box>

    )
}

export default Header



