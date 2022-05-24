import * as React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import DateTimePicker from "@mui/lab/DateTimePicker";
import contestApi from "../../../../../api/contestApi";

let groupQuestions = [];
const CreateQuestions = () => {
  const [timeStart, setTimeStart] = React.useState('');
  const [timeEnd, setTimeEnd] = React.useState('');
  const [groupQuestion, setGroupQuestion] = React.useState("");
  const fetchGroupQuestions = async () => {
    const data = await contestApi.getGroupQuestions();
    if (data) {
      groupQuestions = [...data];
    }
  };
  React.useEffect(() => {
    fetchGroupQuestions();
  }, []);

  const handleChangeQuestion = (e) => {
    setGroupQuestion(e.target.value);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
          <DateTimePicker
            label="Thời gian bắt đầu"
            value={timeStart}
            onChange={(newValue) => {
                setTimeStart(newValue);
              }}
            renderInput={(params) => (
              <TextField margin="normal" id="timeStart" name="timeStart" {...params} />
            )}
          />
        </Box>
        <DateTimePicker
          label="Thời gian kết thúc"
          value={timeEnd}
          onChange={(newValue) => {
            setTimeEnd(newValue);
          }}
          renderInput={(params) => (
            <TextField margin="normal" id="timeEnd" name="timeEnd" {...params} />
          )}
        />
      </LocalizationProvider>
      <TextField
        margin="normal"
        label="Thời gian thi(m)"
        fullWidth
        id="timeExam"
        name="timeExam"
      />
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="groupQuestionLabel">Bộ câu hỏi</InputLabel>
        <Select
          labelId="groupQuestionLabel"
          label="Bộ câu hỏi"
          id="groupQuestion"
          name="groupQuestion"
          value={groupQuestion}
          onChange={handleChangeQuestion}
        >
          {groupQuestions.map((grQ) => (
            <MenuItem value={grQ.id}>{grQ.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default CreateQuestions;
