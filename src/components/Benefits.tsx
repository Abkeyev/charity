import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#F3F3F3",
      },
      innerContainer: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px 40px",
      },
      title: {
        marginBottom: 40,
        fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: '33px',
      color: '#141414',
      },
      item: {
        background: "#FFFFFF",
        width: "100%",
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
        "& > img": {
          height: 60,
          display: "block",
          marginBottom: 10,
        },
      },
      itemTitle: {
        marginBottom: 10,
        fontFamily: 'Roboto',
      fontStyle: 'bold',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '28px',
      color: '#141414',
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
    container: {
      backgroundColor: "#FAFAFA",
    },
    innerContainer: {
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box",
      padding: "40px 140px 80px",
    },
    title: {
      marginBottom: 40,
    },
    item: {
      background: "#FFFFFF",
      width: "calc(33% - 20px)",
      marginBottom: 30,
      boxShadow:
        "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
      borderRadius: 8,
      padding: "20px",
      "& > img": {
        height: 60,
        display: "block",
        marginBottom: 10,
      },
    },
    itemTitle: {
      marginBottom: 10,
    }
  },
  })
);

const items = [
  {
    title: "Минимум документов",
    desc: "Минимальный пакет документов для открытия счета",
    img: "/icons/doc.svg",
  },
  {
    title: "Онлайн-открытие счёт",
    desc: "Онлайн–открытие второго и последующих счетов",
    img: "/icons/online.svg",
  },
  {
    title: "Зарплатный проект",
    desc: "Бесплатное подключение к зарплатному проекту",
    img: "/icons/salary.svg",
  },
  {
    title: "Конвертация валют",
    desc: "Онлайн-конвертация валют",
    img: "/icons/currency.svg",
  },
  {
    title: "Интернет–банкинг",
    desc: "Бесплатное подключение к системе «Интернет–банкинг» ",
    img: "/icons/internet.svg",
  },
  {
    title: "StarBusiness",
    desc: "Бесплатное подключение к мобильному приложению StarBusiness",
    img: "/icons/starbusiness.svg",
  },
];

const Banner = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Преимущества
        </BccTypography>
        <Grid container justify="space-between" direction="row">
          {items.map((i: any) => (
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + i.img} />
              <BccTypography type="h4" block className={classes.itemTitle}>
                {i.title}
              </BccTypography>
              <BccTypography type="p2" block>
                {i.desc}
              </BccTypography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
