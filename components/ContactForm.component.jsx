import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import Box from "@material-ui/core/Box";
import emailjs from "emailjs-com";
import getConfig from "next/config";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.common.blue,
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const submitEmail = async (data, e) => {
    const {
      publicRuntimeConfig: {
        emailJsUserID,
        emailJsServiceID,
        emailJsTemplateID,
      },
    } = getConfig();

    try {
      const result = await emailjs.sendForm(
        emailJsServiceID,
        emailJsTemplateID,
        e.target,
        emailJsUserID
      );
      console.log(result.text);
    } catch (e) {
      console.error(e.text);
    }
  };

  return (
    <Box mb={5}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Have Questions?
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(submitEmail)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="from_name"
              label="Name"
              type="text"
              id="from_name"
              autoComplete="current-name"
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              fullWidth
              margin="normal"
              id="message"
              variant="outlined"
              inputRef={register({
                minLength: {
                  value: 5,
                  message: "Your message must contain at least 5 characters",
                },
              })}
            />
            <Typography color="error">
              {errors.message && errors.message.message}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </Box>
  );
}
