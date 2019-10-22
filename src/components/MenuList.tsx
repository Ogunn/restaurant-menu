import * as React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import dishes from "../db";

const useStyles = makeStyles({
  root: {
    boxShadow: "2px 2px 5px #888888",
    marginBottom: "5px"
  }
});

const MenuList: React.FC = () => {
  const classes = useStyles();
  const [total, setTotal] = useState(0);

  return (
    <Container maxWidth="xs">
      <Typography>Total: {total}</Typography>
      <List>
        {dishes.map((dish, index) => (
          <ListItem button key={index} className={classes.root}>
            <ListItemText
              primary={dish.name}
              primaryTypographyProps={{ align: "center" }}
              secondary={dish.price}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MenuList;
