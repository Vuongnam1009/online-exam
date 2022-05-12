import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import { Button, Grid } from "@mui/material";

export default function Tabdetail({ contest }) {
  return (
    <Grid item sx={4}>
      <Card
        sx={{
          width: 345,
          height: 400,
          marginBottom: "12px",
        }}
      >
        <CardHeader
          avatar={
            contest.createdBy.avatar ? (
              <Avatar
                alt={contest.createdBy.name}
                src={contest.createdBy.avatar}
              />
            ) : (
              <Avatar aria-label="recipe">{contest.createdBy.name[0]}</Avatar>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={contest.title}
          subheader={moment(contest.startTime).format("lll")}
        />
        <CardMedia
          component="img"
          height="194"
          image={
            contest.imageUrl ||
            "https://monamedia.co/wp-content/uploads/2020/02/javascript-la-gi.jpg"
          }
          alt="Paella dish"
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {contest.description}
          </Typography>
          <Button>Tham gia</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
