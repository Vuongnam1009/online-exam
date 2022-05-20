/* eslint-disable no-useless-return */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Paper,
  Tabs,
  Tab,
  Grid,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import contestApi from "../../api/contestApi";
import Tabdetail from "./TabDetail";

let contestsDefault = [];

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const menus = [
    { id: 0, heading: t("home.0") },
    { id: 1, heading: t("home.1") },
    { id: 2, heading: t("home.2") },
    { id: 3, heading: t("home.3") },
    { id: 4, heading: t("home.4") },
  ];
  const [tab, setTab] = useState(0);
  const [contests, setContests] = useState([]);
  useEffect(() => {
    const fetchContests = async () => {
        const data = await contestApi.getAll();
        if(data){
          setContests(data);
          contestsDefault = [...data];
        }else{
          console.log('fetch API error');
        }
    };
    fetchContests();
  }, []);
  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
    const date = new Date();
    if (newTab === 0) {
      setContests([...contestsDefault]);
    }
    if (newTab === 1) {
      setContests([]);
    }
    if (newTab === 2) {
      const newContests = contestsDefault.filter((el) => {
        if (el.endTime && new Date(el.endTime) < date) return false;
        if (new Date(el.startTime) > date) return false;
        return true;
      });
      setContests([...newContests]);
    }
    if (newTab === 3) {
      const newContests = contestsDefault.filter(
        (el) => new Date(el.startTime) > date
      );
      setContests([...newContests]);
    }
    if (newTab === 4) {
      const newContests = contestsDefault.filter(
        (el) => el.endTime && new Date(el.endTime) < date
      );
      setContests([...newContests]);
    }
  };
  return (
    <>
      <Box mb={1}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "16px",
            fontWeight: "550",
          }}
        >
          {t("home.title")}
        </Typography>
      </Box>
      <Paper
        sx={{
          marginBottom: "12px",
          paddingLeft: "12px",
        }}
      >
        <Tabs value={tab} onChange={handleChangeTab} indicatorColor="primary">
          {menus.map((el) => (
            <Tab label={el.heading} key={el.id} />
          ))}
        </Tabs>
      </Paper>
      <Grid container spacing={5} justifyContent="center">
        {contests.map((contest) => {
          return <Tabdetail contest={contest} key={contest.id}/>;
        })}
      </Grid>
    </>
  );
};

export default Home;
