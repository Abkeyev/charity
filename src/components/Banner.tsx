import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.svg"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: 'center'
      },
      innerContainer: {
        margin: "0 auto",
        width: "100%",
        padding: "60px 20px 40px",
        boxSizing: "border-box",
      },
    title: {
      marginBottom: 15,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 28,
      lineHeight: '33px',
      color: '#141414'
    },
    subTitle: {
      marginBottom: 30,
      opacity: 0.7,
      fontWeight: 'normal',
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: '19px',
      color: '#5B5B5B'
    },
    blockText: {
      marginBottom: 5,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 24,
      lineHeight: '28px',
      color: '#141414'
    },

    firstBlock: {
      marginBottom: 15,
    },

    openBtn: { minWidth: 300, fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    lineHeight: '21px',
    color: '#ffffff',
  width: '100%',
marginTop: 95}
    },
    [theme.breakpoints.between("sm", "xl")]: {
    container: {
      background: `url(${process.env.PUBLIC_URL + "/banner.svg"}) no-repeat`,
      backgroundSize: "cover",
    },
    innerContainer: {
      maxWidth: 1280,
      margin: "0 auto",
      width: "100%",
      padding: "90px 140px 115px",
      boxSizing: "border-box",
    },
    title: {
      marginBottom: 15,
    },
    subTitle: {
      marginBottom: 30,
      opacity: 0.7,
    },
    block: {
      marginBottom: 30,
    },
    firstBlock: {
      marginRight: 70,
    },
    blockText: {
      marginBottom: 5,
    },
    openBtn: { minWidth: 300, fontSize: 18, fontWeight: "bold" }
  },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});

  const openBtn = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h1" block className={classes.title}>
          Текущий счёт
        </BccTypography>
        <BccTypography
          type="h3"
          weight="normal"
          block
          className={classes.subTitle}
        >
          Откройте текущий счёт совершенно бесплатно!
        </BccTypography>
        <Grid container direction="row" className={classes.block}>
          <Grid item className={classes.firstBlock}>
            <BccTypography
              type="h4"
              weight="bold"
              block
              className={classes.blockText}
            >
              0 ₸
            </BccTypography>
            <BccTypography type="p2" block>
              подключение к{" "}
              <BccLink href="https://www.bcc.kz/" target="_blank">
                StarBanking
              </BccLink>
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography
              type="h4"
              weight="bold"
              block
              className={classes.blockText}
            >
              0 ₸
            </BccTypography>
            <BccTypography type="p2" block>
              подключение к{" "}
              <BccLink href="https://www.bcc.kz/" target="_blank">
                StarBanking
              </BccLink>
            </BccTypography>
          </Grid>
        </Grid>
        <BccButton
          className={classes.openBtn}
          variant="contained"
          color="primary"
          onClick={() => openBtn()}
        >
          Открыть счёт
        </BccButton>
      </div>
    </div>
  );
};

export default Banner;
