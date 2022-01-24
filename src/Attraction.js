import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  detail: {
    marginTop: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Attraction(props) {
  const classes = useStyles();
  const attraction = props.attraction;

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {attraction.name}
      </Typography>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={attraction.coverimage}
          title={attraction.name}
        />
      </Card>
      <div className={classes.detail}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {attraction.detail}
        </Typography>
      </div>
    </Container>
  );
}