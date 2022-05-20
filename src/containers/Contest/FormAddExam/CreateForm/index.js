import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";


function CreateForm() {
    const [img,setImg]= useState()
    useEffect(()=>{
        return ()=>{
            img&&URL.revokeObjectURL(img.preview)
        }

    },[img])
    const handleSubmit=(e)=>{
        e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      email: data.get("file"),
      password: data.get("password"),
    };
    console.log(user);
    }
    const handlePreviewImg = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImg(file)
    }
    return(
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              margin="normal"
              fullWidth
              id="Name"
              label="Name of the Exam"
              name="Name"
              autoFocus
            />
            <TextField
              fullWidth
              multiline
              rows={5}
              name="description"
              label="Detailed description"
              id="description"
            />
            <TextField
              margin="normal"
              fullWidth
              name="description"
              label="Code"
              id="description"
            />
            <Grid container spacing={2}>
            <Grid item xs={6} sm={2}>
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                name="file"
                onChange={handlePreviewImg}
                style={{display: 'none'}}
              />
              <label htmlFor="contained-button-file">
              {img?
                <img src={img.preview} alt='' style={{width: '100%', height: 'auto'}}/>:<Button
                size="small"
                variant="outlined"
                color="primary"
                component="span"
                style={{
                  height: '100%',
                }}
              >
                TẢI ẢNH
              </Button>
            }

              </label>
            </Grid>
            <Grid item xs={6} sm={10}>
              <TextField
                fullWidth
                label="Link ảnh"
                variant="outlined"
                name="imageUrl"
              />
            </Grid>
          </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Hiển thị trên hệ thống"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Tiếp
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="error"
            >
              Hủy
            </Button>


          </Box>
    )
}

export default CreateForm;