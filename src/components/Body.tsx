import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { BccButton, BccTypography } from "./BccComponents/index";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      maxWidth: 1280,
      padding: "0 95px 86px",
      margin: "0 auto",
      display: "flex",
      alignItems: "flex-end",
      boxSizing: "border-box",
      justifyContent: "space-between",
      "& > div": {
        width: "50%"
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0 48px 40px",
        alignItems: "center"
      },
      [theme.breakpoints.down("xs")]: {
        padding: "0 24px 24px",
        alignItems: "center"
      }
    },
    title: {
      marginBottom: 32,
      whiteSpace: "nowrap",
      [theme.breakpoints.down("sm")]: {
        whiteSpace: "unset",
        fontSize: 22,
        lineHeight: "24px"
      },
      [theme.breakpoints.down("xs")]: {
        whiteSpace: "nowrap"
      }
    },
    text: {
      color: "#4D565F"
    },
    textHead: {
      marginBottom: 12
    },
    btn: {
      marginTop: 52,
      position: "relative"
    },
    helpBtn: {
      minWidth: 320,
      [theme.breakpoints.down("xs")]: {
        width: "200%",
        minWidth: "auto"
      }
    },
    img: {
      "& > img": {
        width: "100%"
      }
    },
    imgP: {
      marginTop: 24,
      "& > img": {
        display: "block",
        width: "50%",
        margin: "0 auto"
      }
    },
    payment: {
      display: "block",
      width: "60%",
      margin: "0 auto",
      marginTop: 24
    },
    sliderWrap: {
      position: "relative",
      width: "60%"
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between"
    },
    btnWrap: { width: "30%" },
    input: {
      display: "block",
      width: "100%",
      "&:hover": {
        backgroundColor: "inherit!important"
      },
      "&:active": {
        backgroundColor: "inherit!important"
      }
    },
    slider: {
      position: "absolute",
      left: 6,
      right: 6,
      padding: 0,
      bottom: -1,
      width: "calc(100% - 12px)"
    },
    sumText: {
      marginBottom: 24
    }
  })
);

const Body = (props: any) => {
  const classes = useStyles({});

  const helpBtn = () => {
    ReactGA.event({
      category: "To_Help",
      action: "Button"
    });
    props.setOpen(true);
  };

  return (
    <div className={`${classes.wrapper} animated fadeIn faster`}>
      <div>
        <BccTypography block type="h1" className={classes.title} weight="bold">
          Помощь медикам в борьбе
          <br />с COVID-19
        </BccTypography>
        <BccTypography block type="p2" className={classes.text}>
          Вырученные средства пойдут на приобретение медоборудования,
          <br />
          средств защиты и лечения заболевших
        </BccTypography>
        <div className={classes.btn}>
          <BccButton
            className={classes.helpBtn}
            variant="contained"
            color="primary"
            onClick={() => helpBtn()}
          >
            Помочь
          </BccButton>
        </div>
      </div>
      <div className={classes.img}>
        <img src={process.env.PUBLIC_URL + "/img.svg"} />
      </div>
    </div>
  );
};

export default Body;
