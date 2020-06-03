import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
    container: {
      margin: "0 auto",
      boxSizing: "border-box",
      padding: "40px 20px",
      display: 'none'
    },
    },
    [theme.breakpoints.between("sm", "xl")]: {
    container: {
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box",
      padding: "80px 140px",
    },
    title: {
      marginBottom: 40,
    },
    star: { width: "80%", margin: "0 auto", marginBottom: 50 },
    starBlock2: {
      alignSelf: "center",
    },
    starBusiness: {
      color: "#249052",
      marginBottom: 10,
    },
    starSteps: {
      marginBottom: 10,
      "& > span": {
        color: "#249052",
      },
    },
    lastSetp: {
      marginBottom: 50,
    },
    qr: {
      "& > img": {
        height: "100%",
      },
    },
    mobileLinks: {
      marginRight: 36,
      "& > a:last-child": {
        marginBottom: 0,
      },
      "& > a": {
        display: "block",
        marginBottom: 12,
        width: 120,
        "& > img": {
          width: 120,
          display: "block",
        },
      },
    }
  },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download",
    });

    window.open(
      "https://apps.apple.com/kz/app/starbusiness/id1452748006",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download",
    });

    window.open(
      "https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru",
      "_blank"
    );
  };

  return (
    <div className={classes.container}>
      <BccTypography type="h2" block className={classes.title}>
        Как забронировать Текущий счет онлайн
      </BccTypography>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.star}
      >
        <Grid item>
          <img src={process.env.PUBLIC_URL + "/phone.svg"} alt="StarBusiness" />
        </Grid>
        <Grid item className={classes.starBlock2}>
          <BccTypography type="h4" block className={classes.starBusiness}>
            StarBusiness
          </BccTypography>
          <BccTypography type="p2" block className={classes.starSteps}>
            <span>•</span> Скачайте мобильное приложение «StarBusiness»
          </BccTypography>
          <BccTypography type="p2" block className={classes.starSteps}>
            <span>•</span> Зарегистрируйтесь
          </BccTypography>
          <BccTypography
            type="p2"
            block
            className={`${classes.starSteps} ${classes.lastSetp}`}
          >
            <span>•</span> Нажмите кнопку «Онлайн бронирование счета»
          </BccTypography>

          <Grid container justify="flex-start" direction="row" wrap="nowrap">
            <Grid item className={classes.mobileLinks}>
              <a
                href="https://apps.apple.com/kz/app/starbusiness/id1452748006"
                target="_blank"
              >
                <img src={process.env.PUBLIC_URL + "/as.svg"} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru"
                target="_blank"
              >
                <img src={process.env.PUBLIC_URL + "/gp.svg"} />
              </a>
            </Grid>
            <Grid item className={classes.qr}>
              <img src={process.env.PUBLIC_URL + "/qr.svg"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
