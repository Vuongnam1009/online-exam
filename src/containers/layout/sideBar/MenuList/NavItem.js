import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'

function NavItem({item}) {
    const { t }= useTranslation()
    const Icon = item.icon
    const title = item.title

    return (
    <ListItemButton>
        <ListItemIcon><Icon stroke={1.5} size='1.3rem'/></ListItemIcon>
        <Typography variant='h5'>
            {t(title)}
        </Typography>
    </ListItemButton>
    )
}

export default NavItem