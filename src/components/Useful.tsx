import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        backgroundImage: 'unset !important',
        color: "#000D1A",
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "100%",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "40px 100px 60px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 40,
        textAlign: "center",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "none",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
  })
);

const items = [
  {
    title: "Валютные счета",
    img: "/u1.png",
    content: [
      "Бесплатое открытие и ведение счета",
      "Удаленное управление счетомн",
      "Онлайн-конвертация валют по биржевому курсу в режиме реального времени",
      "Онлайн присвоение учетного номера контракта",
    ],
  },
  {
    title: "Дистанционное обслуживание",
    img: "/u2.png",
    content: [
      "Бесплатое открытие и ведение счета",
      "Удаленное управление счетомн",
      "Онлайн-конвертация валют по биржевому курсу в режиме реального времени",
      "Онлайн присвоение учетного номера контракта",
    ],
  },
  {
    title: "Онлайн выпуск тендерных гарантий",
    img: "/u3.png",
    content: [
      "Бесплатое открытие и ведение счета",
      "Удаленное управление счетомн",
      "Онлайн-конвертация валют по биржевому курсу в режиме реального времени",
      "Онлайн присвоение учетного номера контракта",
    ],
  },
  {
    title: "Зарплатный проект",
    img: "/u4.png",
    content: [
      "Бесплатое открытие и ведение счета",
      "Удаленное управление счетомн",
      "Онлайн-конвертация валют по биржевому курсу в режиме реального времени",
      "Онлайн присвоение учетного номера контракта",
    ],
  },
  {
    title: "Онлайн-конвертация валют",
    img: "/u5.png",
    content: [
      "Бесплатое открытие и ведение счета",
      "Удаленное управление счетомн",
      "Онлайн-конвертация валют по биржевому курсу в режиме реального времени",
      "Онлайн присвоение учетного номера контракта",
    ],
  },
];

const Useful = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Вместе со счетом вам станут доступны
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          {items &&
            items.map((item: any) => {
              return <BccTab label={item.title} />;
            })}
        </BccTabs>
        <div
          className={classes.tabs}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL +
              items[index].img})`,
          }}
        >
          {items[index].content.map((c: string) => (
            <>
              <span>•</span> {c}
              <br />
              <br />
            </>
          ))}
          <BccButton
            style={{ textTransform: "capitalize", padding: 0 }}
            variant="text"
          >
            Подробнее
          </BccButton>
        </div>
      </div>
    </div>
  );
};

export default Useful;
