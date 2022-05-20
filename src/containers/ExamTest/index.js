import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  Grid,
  Button,
  List,
  ListItemButton,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import contestApi from "../../api/contestApi";

let interval = null;

const alphabet = "A B C D E F G H I K L M N O P Q R S T V X Y Z";
const ExamTest = () => {
  const theme = useTheme();
  const { id, idQ } = useParams();
  //   const { id } = handleStartExam();
  const navigation = useNavigate();
  const [contest, setContest] = useState({});
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [questionSelected, setQuestionSelected] = useState({});
  const [timeDoExam, setTimeDoExam] = useState(10);
  const [isMarking, setIsMarking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleChangeAnswer = (value) => {
    setAnswers({
      ...answers,
      [questionSelected.data.id]: value,
    });
  };
  console.log(answers);
  function renderClockTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor(time - hours * 3600 - minutes * 60);

    const hoursString = `0${hours}`.slice(-2);
    const minutesString = `0${minutes}`.slice(-2);
    const secondsString = `0${seconds}`.slice(-2);
    return `${hoursString}:${minutesString}:${secondsString}`;
  }

  const handleFullscreen = (e) => {
    e.preventDefault();
    setIsFullscreen((prev) => !prev);
  };

  //   const handleFinishExam = async () =>{
  //     const examData = {
  //       doTime: contest.examTime * 60 - timeDoExam,
  //       contestId: contest.id,
  //       groupQuestionId: contest.groupQuestion,
  //       answers,
  //     };
  //     const data = await apis.contest.mark({
  //       ...examData,
  //     });
  //     if (data && data.status) {
  //       const { result } = data.result;
  //       // eslint-disable-next-line no-alert
  //       console.log(`mark done ${result.amountCorrectQuestion}`);
  //       history.push(`/contest/${contest.id}/exam/detail?resultId=${result.id}`);
  //     } else {
  //       enqueueSnackbar((data && data.message) || 'Mark failed', {
  //         variant: 'error',
  //       });
  //     }
  //   };

  const handleStartExam = (examTime) => {
    const startTime = new Date();
    interval = setInterval(() => {
      const now = new Date();
      const timeDo = Math.floor((now - startTime) / 1000);
      if (timeDo < examTime) {
        setTimeDoExam(examTime - timeDo);
      } else {
        setTimeDoExam(0);
        setIsMarking(true);
        clearInterval(interval);
      }
    }, 1000);
  };
  const fetchContest = async () => {
    const data = await contestApi.getQuestions({ id, idQ });
    if (data.questions !== undefined) {
      setContest(data);
      setQuestionSelected({
        position: 0,
        data: data.questions[0],
      });
      setTimeDoExam(data.examTime * 60);
      handleStartExam(data.examTime * 60);
      setIsLoading(false);
    } else {
      navigation(`/contest`);
    }
  };

  useEffect(() => {
    // setDirty();
    fetchContest();
    return () => {
      console.log("clear interval");
      clearInterval(interval);
    };
  }, []);

  //   useEffect(() => {
  //     console.log('load marking');
  //     if (isMarking) {
  //       setPristine();
  //       handleFinishExam();
  //     }
  //   }, [isMarking]);

  const handleClickQuestion = (pos) => (e) => {
    e.preventDefault();
    setQuestionSelected({
      position: pos,
      data: contest.questions[pos],
    });
  };

  if (isLoading) {
    return <h2>Đang tải dữ liệu cuộc thi...</h2>;
  }
  if (isMarking) {
    return (
      <Box>
        <Typography variant="h6" style={{ color: "#ccc" }}>
          The system is processing, wait a few second...
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <Box mr={1}></Box>
          <Typography
            variant="h4"
            display="flex"
            gutterBottom
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <AccessTimeIcon />
            {renderClockTime(timeDoExam)}
          </Typography>
        </Box>
        <Box display="flex">
          <Box mr={1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              onClick={() => {
                setIsMarking(true);
                navigation(`/`);
              }}
              style={{ background: "#f16a73", color: "#fff" }}
            >
              Nộp bài
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={
                isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />
              }
              onClick={handleFullscreen}
            >
              {isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Paper
              sx={{
                backgroundColor: "background.container",
                ...theme.typography.mainCard,
              }}
            >
              <Box mb={3}>
                <Typography
                  gutterBottom
                  variant="h1"
                  style={{ textAlign: "center" }}
                >
                  Câu số {questionSelected && questionSelected.position + 1}
                </Typography>
                <Typography
                  gutterBottom
                  variant="title"
                  style={{ color: "#ccc" }}
                >
                  {questionSelected && questionSelected.data.title}
                </Typography>
                <Typography variant="h2" gutterBottom>
                  {questionSelected && questionSelected.data.description}
                </Typography>
              </Box>
              <List>
                {questionSelected &&
                  questionSelected.data.answers
                    .sort((a, b) => a.position - b.position)
                    .map((el, index) => (
                      <ListItemButton
                        selected={answers[questionSelected.data.id] === index}
                        sx={{
                          padding: "20px 20px",
                          marginBottom: "10px",
                          borderRadius: "10px",
                          border: "1px solid #ccc",
                        }}
                        onClick={() => handleChangeAnswer(index)}
                      >
                        <Typography variant="h3" key={index}>
                          <b>{alphabet.split(" ")[index]}</b>.{` ${el.content}`}
                        </Typography>
                      </ListItemButton>
                    ))}
                <TextField></TextField>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                backgroundColor: "background.container",
                ...theme.typography.mainCard,
              }}
            >
              <Box mb={2}>
                <Typography variant="h2">Danh sách câu hỏi</Typography>
              </Box>
              <List>
                {contest &&
                  contest.questions.map((el, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      sx={
                        questionSelected && questionSelected.position === index
                          ? {
                              ...theme.typography.commonAvatar,
                              backgroundColor: "secondary.dark",
                              color: "secondary.light",
                              margin: "4px",
                              border: "2px solid #ccc",
                            }
                          : answers[el.id] !== undefined
                          ? {
                              ...theme.typography.commonAvatar,
                              backgroundColor: "secondary.dark",
                              color: "secondary.light",
                              margin: "4px",
                            }
                          : {
                              ...theme.typography.commonAvatar,
                              margin: "4px",
                            }
                      }
                      onClick={handleClickQuestion(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExamTest;
