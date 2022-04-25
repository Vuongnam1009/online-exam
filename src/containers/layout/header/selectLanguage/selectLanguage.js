import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';
import i18n from 'i18next'

const SelectLanguage= ()=>{
  const options = ['vi','en']
  const [isOp,setIsOp] = React.useState('vi')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose= (op)=>{
    i18n.changeLanguage(op);
    setAnchorEl(null);
    setIsOp(op);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        <TranslateIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={()=>setAnchorEl(null)}
      >
        {options.map((op)=>(
            <MenuItem selected={op === isOp} onClick={()=>handleClose(op)}>{op}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
export default SelectLanguage