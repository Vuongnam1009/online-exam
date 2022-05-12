import { ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import { useEffect, useState,forwardRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { setMenuOpen } from '../../../../../redux/actions'

const NavItem = ({item})=> {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.customization.isOpen)
    const theme = useTheme()
    const { t }= useTranslation()
    const Icon = item.icon
    const title = item.title
    const id = item.id
    const url = item.url
    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={`${url}`} />)
    };
    const changeMenu = (id)=> {
        dispatch(setMenuOpen(id))
    }
    return (
    <ListItemButton
        {...listItemProps}
        sx={{
            ...theme.typography.commonButton,
            marginBottom: '8px'
        }}
        selected={id === isOpen}
        onClick={() => {changeMenu(id)}}
    >

            <ListItemIcon><Icon stroke={1.5} size='1.3rem'/></ListItemIcon>
            <ListItemText><Typography sx={{fontSize:'1.3em',fontWeight:550}}>{t(title)}</Typography></ListItemText>
    </ListItemButton>
    )
}

export default NavItem