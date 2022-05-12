/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Tabs, Tab, Grid, Box, Typography } from '@mui/material';
import contestApi from '../../api/contestApi';
import Tabdetail from './TabDetail';

const Home = () => {
  const { t } = useTranslation();

  const menus = [
    { id: 0, heading: t('home.0') },
    { id: 1, heading: t('home.1') },
    { id: 2, heading: t('home.2') },
    { id: 3, heading: t('home.3') },
    { id: 4, heading: t('home.4') },
  ];

  const [contests, setContests] = useState([]);
  useEffect(() => {
    const fetchContests = async () => {
      try{
        const data = await contestApi.getAll()
        setContests(data)
      }catch(e){
        console.error("error")
      }
    };
    fetchContests();
  }, []);

  return (
    <>
      <Box mb={1}>
        <Typography variant="h4" gutterBottom>
          {t('home.title')}
        </Typography>
      </Box>
      <Paper
        sx={{
          marginBottom: '12px',
        }}
      >
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          {menus.map((el) => (
            <Tab label={el.heading} key={el.id}>
              {el.heading}
            </Tab>

          ))}
        </Tabs>
      </Paper>
      <Grid container spacing={5} justifyContent="center">
        {contests.map((contest)=>{
          return (
            <Tabdetail contest={contest}/>
          )
        })}


      </Grid>
    </>
  );
};

export default Home;
