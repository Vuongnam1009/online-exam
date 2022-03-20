import { List, Typography } from '@mui/material'
import React from 'react'
import menuItems from '../../../menu-items'
import NavItem from './NavItem'

function MenuList() {
    const items = menuItems.map((item) =>{
        switch (item.type) {
            case 'collapse':
                return 'aaa'
            case 'item':
                return <NavItem key={item.id} item={item}/>
            default:
                return(
                    <Typography variant ='h6'>
                        Error
                    </Typography>
                )
        }
    })
    return(
        <>
            <List>
                {items}
            </List>
        </>
    )
}

export default MenuList