import * as React from "react";
import { useEffect, useState } from "react";
import contestApi from "../../api/contestApi";
import {
  Paper,
  Button,
  IconButton,
  TableRow,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import { Box } from "@mui/system";
import FormAddExam from "./FormAddExam/index";
import {useTranslation} from 'react-i18next'

function Contest() {
    const {t} =useTranslation()
  const theme = useTheme();
  const [contests, setContests] = useState([]);
  const [modal, setModal] = useState(false);
  const fetchContests = async () => {
    const data = await contestApi.getAll();
    if (data) {
      setContests(data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchContests();
  }, []);

  const handleDeleteContest = async (id) => {
    const data = await contestApi.deleteContest(id);
    if (data) {
      const newContests = [...contests];
      const pos = newContests.findIndex((el) => el.id === id);
      newContests.splice(pos, 1);
      setContests(newContests);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  return (
    <Box>
      <Button
        sx={{
          ...theme.typography.commonAvatar,
          marginBottom: "12px",
        }}
        startIcon={<AddIcon />}
        onClick={openModal}
      >
        {t('contest.addExam')}
      </Button>
      <FormAddExam modal={modal} handleCloseModal={handleCloseModal} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>{t('contest.table.name')}</TableCell>
              <TableCell align="center">{t('contest.table.time')}</TableCell>
              <TableCell align="left">{t('contest.table.date')}</TableCell>
              <TableCell align="center">{t('contest.table.code')}</TableCell>
              <TableCell align="center">{t('contest.table.status')}</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contests.map((contest) => (
              <TableRow
                key={contest.id}
                sx={{
                    ...theme.typography.customButton,
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {contest.title}
                </TableCell>
                <TableCell align="center">{contest.examTime}</TableCell>
                <TableCell align="left">
                  {moment(contest.startTime).format("lll")}
                </TableCell>
                <TableCell align="right">{contest.code}</TableCell>
                <TableCell align="center">
                  {contest.isActive ? (
                    <Chip label="Active" color="success" />
                  ) : (
                    <Chip label="Not active" color="error" />
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleDeleteContest(contest.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Button>{t('contest.table.statistical')}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Contest;
