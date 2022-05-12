import { List, Typography } from '@mui/material'
import React from 'react'
import menuItems from './menus'
import NavItem from './NavItem'

const MenuList = ()=> {
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
            <List
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'

            }}
            >
                {items}
            </List>
        </>
    )
}

export default MenuList