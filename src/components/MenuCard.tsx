import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  List,
  ListItem,
  CardMedia
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import dishes from "../db";
import feijoadaImage from "./feijoada-sm.png";

const useStyles = makeStyles({
  listItem: {
    padding: "0",
    marginBottom: "20px",
    display: "block",
    borderRadius: "4px"
  },
  card: {
    display: "flex",
    maxHeight: "150px"
  },
  cardMedia: {
    height: "150px",
    width: "150px",
    minWidth: "120px"
  },
  cardContent: {
    position: "relative",
    minWidth: "100px",
    padding: "10px"
  },
  price: {
    position: "absolute",
    bottom: "1px",
    right: "10px"
  }
});

const MenuCard: React.FC = () => {
  const classes = useStyles();

  const cardMadia = (
    <CardMedia
      className={classes.cardMedia}
      image={feijoadaImage}
      component="img"
      title="feijoada"
    />
  );

  return (
    <Container maxWidth="sm">
      <List>
        {dishes.map((dish, index) => {
          return (
            <ListItem className={classes.listItem} button>
              <Card className={classes.card}>
                {cardMadia}
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">{dish.name}</Typography>
                  <Typography variant="subtitle1">
                    {dish.description}
                  </Typography>
                  {dish.dishSides.length > 0 && (
                    <Typography variant="subtitle2">
                      Acompanha: {dish.dishSides.join(" - ")}
                    </Typography>
                  )}
                </CardContent>
                <Typography className={classes.price} variant="subtitle2">
                  R$ {dish.price}
                </Typography>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default MenuCard;
