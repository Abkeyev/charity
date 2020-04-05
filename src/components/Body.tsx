import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import BccTypography from "@bit/bcc.components.bcc-typography";
import BccButton from "@bit/bcc.components.bcc-button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box",
      [theme.breakpoints.down("sm")]: {
        padding: "0 24px",
      },
    },
    title: {
      textAlign: "center",
      marginBottom: 24,
    },
    text: {
      textAlign: "center",
      marginBottom: 32,
    },
    btn: {
      position: "relative",
      textAlign: "center",
    },
    img: {
      marginTop: 80,
      marginBottom: 44,
      "& > img": {
        width: "100%",
      },
    },
    imgP: {
      marginTop: 24,
      "& > img": {
        display: "block",
        width: "50%",
        margin: "0 auto",
      },
    },
    payment: {
      display: "block",
      width: "60%",
      margin: "0 auto",
      marginTop: 24,
    },
    sliderWrap: {
      position: "relative",
      width: "60%",
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
    },
    btnWrap: { width: "30%" },
    input: {
      display: "block",
      width: "100%",
      "&:hover": {
        backgroundColor: "inherit!important",
      },
      "&:active": {
        backgroundColor: "inherit!important",
      },
    },
    slider: {
      position: "absolute",
      left: 6,
      right: 6,
      padding: 0,
      bottom: -1,
      width: "calc(100% - 12px)",
    },
    sumText: {
      marginBottom: 24,
    },
  })
);

const Body = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [sum, setSum] = React.useState(0);
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <BccTypography block type="h1" className={classes.title} weight="bold">
        #bizbirgemiz
      </BccTypography>
      <BccTypography block type="p2" className={classes.text}>
        Помоги медикам в борьбе с CoVID-19
        <br />
        Вырученные средства пойдут на приобретение медоборудования , средств
        защиты и лечения заболевших
      </BccTypography>
      <div className={classes.btn}>
        <BccButton
          variant="contained"
          color="primary"
          onClick={() => props.setOpen(!open)}
        >
          {open ? "Скрыть" : "Помочь медикам"}
        </BccButton>
      </div>
      <div className={classes.img}>
        <img src={process.env.PUBLIC_URL + "/img.svg"} />
      </div>
    </div>
  );
};

export default Body;
