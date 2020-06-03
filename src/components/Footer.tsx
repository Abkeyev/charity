import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { BccTypography } from "./BccComponents/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerWrap: {
      backgroundColor: "#000D1A",
    },
    footer: {
      padding: "46px 95px 64px",
      display: "flex",
      maxWidth: 1280,
      margin: "0 auto",
      flexWrap: "wrap",
      boxSizing: "border-box",
      justifyContent: "space-between",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        padding: "24px 48px 32px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "12px 24px 16px",
      },
    },
    title: {
      marginBottom: 24,
      color: "white",
    },
    contacts: {
      width: "30%",
      [theme.breakpoints.down("sm")]: {
        width: "55%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "60%",
      },
    },
    social: {
      width: "20%",
      [theme.breakpoints.down("sm")]: {
        width: "40%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "40%",
      },
    },
    socialLink: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 128,
    },
    copyright: {
      width: "40%",
      opacity: 0.5,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 24,
      },
    },
    img: {
      display: "inline-block",
      width: 32,
      height: 32,
      marginRight: 8,
      verticalAlign: "top",
    },
    phone: {
      marginBottom: 16,
      opacity: 0.5,
      "& > a": {
        color: "inherit",
      },
    },
    call1: {
      "& > a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    call: {
      marginTop: 4,
      opacity: 0.5,
      "& > a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    copy: {
      marginBottom: 40,
    },
  })
);

const Footer = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <div className={classes.footerWrap}>
      <div className={`${classes.footer}  animated fadeIn faster`}>
        <div className={classes.contacts}>
          <BccTypography
            className={classes.title}
            block
            type="p2"
            weight="medium"
          >
            Контакты
          </BccTypography>
          <div>
            <img
              className={classes.img}
              src={process.env.PUBLIC_URL + "/phone.svg"}
            />
            <BccTypography type="h1" weight="medium">
              <BccTypography
                block
                type="p1"
                weight="medium"
                className={classes.call1}
              >
                <a href="tel:505">505</a>
              </BccTypography>
              <BccTypography
                block
                type="p3"
                className={classes.phone}
                weight="medium"
              >
                Бесплатно с мобильного
              </BccTypography>
            </BccTypography>
          </div>
          <div>
            <img
              className={classes.img}
              src={process.env.PUBLIC_URL + "/call.svg"}
            />
            <BccTypography type="h1" weight="medium">
              <BccTypography
                block
                type="p1"
                className={classes.call}
                weight="medium"
              >
                <a href="tel:87272443030">8 (727) 244 30 30</a>
              </BccTypography>
            </BccTypography>
          </div>
        </div>
        <div className={classes.social}>
          <BccTypography
            className={classes.title}
            block
            type="p2"
            weight="medium"
          >
            В соц. сетях
          </BccTypography>

          <div className={classes.socialLink}>
            <div>
              <a href="https://www.facebook.com/bcc.kz/" target="_blank">
                <img src={process.env.PUBLIC_URL + "/fb.svg"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/centercreditkz/?hl=ru"
                target="_blank"
              >
                <img src={process.env.PUBLIC_URL + "/in.svg"} />
              </a>
            </div>
            <div>
              <a href="https://vk.com/centercredit" target="_blank">
                <img src={process.env.PUBLIC_URL + "/vk.svg"} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.copyright}>
          <BccTypography block type="p2" className={classes.copy}>
            © 2000 - 2019 АО "Банк ЦентрКредит"
            <br />
            Все права защищены.
          </BccTypography>
          <BccTypography block type="p2">
            Лицензия на проведение банковских и иных операций и деятельности на
            рынке ценных бумаг №1.2.25/195/34 от 28.01.2015 выданная НБ РК.
          </BccTypography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
