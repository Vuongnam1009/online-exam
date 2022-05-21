import * as React from 'react';

import Switch from '@mui/material/Switch';
import {Slide,Grid,Button,FormControlLabel,Paper,Box,Checkbox} from '@mui/material';
import CreateName from './CreateName/index'
import CreateQuestions from './CreateQuestions/index'



export default function CreateForm() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      name: data.get("Name"),
      description: data.get("description"),
      code: data.get("code"),
      imageUrl: data.get("imageUrl"),
    };
    console.log(user);
  };

  return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ }}>
        <Slide direction="left" in={checked} sx ={checked?{}:{display:'none'}}>
              <Box><CreateName/></Box>
        </Slide>
        <Slide direction="left" in={!checked} sx={checked?{display: 'none'}:{}} >
              <Box ><CreateQuestions/></Box>
        </Slide>
        <Box sx={{}}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Hiển thị trên hệ thống"
        />
      </Box>
      <Box >
        <Grid container spacing={2}>
          <Grid item xs={1} sm={8}></Grid>
          <Grid item xs={5} sm={2}>
            <Button
              fullWidth
              type="submit"
              color="error"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Hủy
            </Button>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleChange}>
              Tiếp
            </Button>
          </Grid>
          <Grid item xs={1} sm={0}></Grid>
        </Grid>
      </Box>
      </Box>

  );
}