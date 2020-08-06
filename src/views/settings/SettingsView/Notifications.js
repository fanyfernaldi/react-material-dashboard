import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <form>
        <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Notifications
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Email"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Push Notifications"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Text Messages"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Phone calls"
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Messages
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Push Notifications"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Phone calls"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
