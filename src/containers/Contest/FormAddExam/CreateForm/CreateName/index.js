import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

const CreateName = () => {
  const theme = useTheme();
  const [img, setImg] = useState();
  useEffect(() => {
    return () => {
      img && URL.revokeObjectURL(img.preview);
    };
  }, [img]);

  const handlePreviewImg = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImg(file);
  };
  return (
    <Box sx={{minHeight:'380px'}}>
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
        name="code"
        label="Code"
        id="code"
      />
      <Grid container spacing={2}>
        <Grid item xs={6} sm={img ? "auto" : 2}>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            name="file"
            onChange={handlePreviewImg}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            {img ? (
              <Box sx={{ ...theme.typography.commonImg }}>
                <img
                  src={img.preview}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            ) : (
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component="span"
                fullWidth
                sx={{ height: "100%" }}
              >
                TẢI ẢNH
              </Button>
            )}
          </label>
        </Grid>
        <Grid item xs={6} sm={img ? "auto" : 10}>
          <TextField
            fullWidth
            label="Link ảnh"
            variant="outlined"
            name="imageUrl"
            id="imageUrl"
          />
        </Grid>
      </Grid>
      </Box>
  );
};

export default CreateName;
