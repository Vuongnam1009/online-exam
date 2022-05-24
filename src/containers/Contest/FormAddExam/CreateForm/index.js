import * as React from "react";

import {
  Slide,
  Grid,
  Button,
  FormControlLabel,
  Box,
  Checkbox,
} from "@mui/material";
import CreateName from "./CreateName/index";
import CreateQuestions from "./CreateQuestions/index";
import Review from "./Review/index";

export default function CreateForm( {handleClose}) {
  const [tab, setTab] = React.useState(1);
  const handleChangeTab = () => {
    if (tab < 3) {
      setTab((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (tab > 1) {
      setTab((prev) => prev - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      name: data.get("Name"),
      description: data.get("description"),
      code: data.get("code"),
      imageUrl: data.get("imageUrl"),
      timeStart: data.get("timeStart"),
      timeEnd: data.get("timeEnd"),
      timeExam: data.get("timeExam"),
      groupQuestion: data.get("groupQuestion")
    };
    console.log(user);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Slide
          direction="left"
          in={tab === 1}
          sx={tab === 1 ? {} : { display: "none" }}
        >
          <Box>
            <CreateName />
          </Box>
        </Slide>
        <Slide
          direction="left"
          in={tab === 2}
          sx={tab !== 2 ? { display: "none" } : {}}
        >
          <Box>
            <CreateQuestions />
          </Box>
        </Slide>
        <Slide
          direction="left"
          in={tab === 3}
          sx={tab !== 3 ? { display: "none" } : {}}
        >
          <Box>
            <Review />
          </Box>
        </Slide>
      </Box>
      <Box>
        <Box sx={{}}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Hiển thị trên hệ thống"
          />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={8}></Grid>
            <Grid item xs={5} sm={2}>
              {tab === 1 ? (
                <Button
                  fullWidth
                  color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClose}
                >
                  Hủy
                </Button>
              ) : (
                <Button
                  fullWidth
                  color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleBack}
                >
                  Quay lại
                </Button>
              )}
            </Grid>
            <Grid item xs={5} sm={2}>
              {tab === 3 ? (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleChangeTab}
                >
                  Lưu
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleChangeTab}
                  type="submit"
                >
                  Tiếp
                </Button>
              )}
            </Grid>
            <Grid item xs={1} sm={0}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
