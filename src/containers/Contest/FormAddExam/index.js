import * as React from "react";
import { Fade, Paper, Modal, Box, Backdrop, Typography } from "@mui/material";
import CreateForm from './CreateForm/index'
function FormAddExam({ modal, handleCloseModal }) {
  const handleClose=()=>{
    handleCloseModal()
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modal}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '70%',
            height: '85%',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="transition-modal-title" variant="h6" component="h2">
            This is form add exam
          </Typography>
            <CreateForm handleClose={handleClose} />
        </Paper>
      </Fade>
    </Modal>
  );
}

export default FormAddExam;
