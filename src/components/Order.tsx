import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccSelect,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
    container: {
      margin: "0 auto",
      boxSizing: "border-box",
      padding: "80px 20px",
    },
    title: {
      marginBottom: 40,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 28,
      lineHeight: '33px',
      color: '#141414',
    },

    orderNum: {
      color: "#249052",
      paddingRight: 10,
      borderRight: ".5px solid rgba(20, 20, 20, .7)",
    },
    orderNumTitle: {
      paddingLeft: 10,
      color: "#141414",
    },
    orderNumText: {
      marginTop: 20,
      opacity: 0.7,
    },
    item: {
      width: "100%",
      marginBottom: 30
    },

    stepsBlock: {
      marginBottom: 80,
    },
    orderForm: {
      width: "100%",
      textAlign: "left",
      background: '#FFFFFF',
      border: '1px solid #B9B9B9',
      borderRadius: 8,
    },
    innerOrderForm: {
      padding: '30px 20px',
    },
    titleForm: {
      marginBottom: 20,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: '28px',
      color: '#141414',
    },
    subTitleForm: {
      marginBottom: 40,
      opacity: 0.7,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '19px',
      color: '#141414',
    },
    inputStyle: {
      marginBottom: 30,
    },
    checkboxText: {
      alignItems: 'flex-start',
      marginBottom: 20,
      marginTop: 15,
    },
    btnWrap: {
      width: "100%",
      "& > button": { width: "100%", marginBottom: 15 },
    }

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
    orderNum: {
      color: "#249052",
      paddingRight: 10,
      borderRight: ".5px solid rgba(20, 20, 20, .7)",
    },
    orderNumTitle: {
      paddingLeft: 10,
      color: "#141414",
    },
    orderNumText: {
      marginTop: 20,
      opacity: 0.7,
    },
    item: {
      width: "calc(33% - 20px)",
    },
    stepsBlock: {
      marginBottom: 80,
    },
    orderForm: {
      width: "50%",
      maxWidth: "50%",
      margin: "0 auto",
      textAlign: "center",
    },
    titleForm: {
      marginBottom: 20,
    },
    subTitleForm: {
      marginBottom: 40,
      opacity: 0.7,
    },
    inputStyle: {
      marginBottom: 30,
    },
    checkboxText: {
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 15,
    },
    btnWrap: {
      width: "calc(50% - 15px)",
      "& > button": { width: "100%" },
    }
  },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="7(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const Order = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <BccTypography type="h2" block className={classes.title}>
        Как открыть счёт
      </BccTypography>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.stepsBlock}
      >
        <Grid item className={classes.item}>
          <BccTypography type="h4" className={classes.orderNum}>
            1
          </BccTypography>
          <BccTypography type="h4" className={classes.orderNumTitle}>
            Заявка
          </BccTypography>
          <BccTypography type="p2" block className={classes.orderNumText}>
            Заполните заявку на консультацию или зарезервируйте счёт
          </BccTypography>
        </Grid>
        <Grid item className={classes.item}>
          <BccTypography type="h4" className={classes.orderNum}>
            2
          </BccTypography>
          <BccTypography type="h4" className={classes.orderNumTitle}>
            Консультация
          </BccTypography>
          <BccTypography type="p2" block className={classes.orderNumText}>
            Представитель банка свяжется с вами в течение 30 минут
          </BccTypography>
        </Grid>
        <Grid item className={classes.item}>
          <BccTypography type="h4" className={classes.orderNum}>
            3
          </BccTypography>
          <BccTypography type="h4" className={classes.orderNumTitle}>
            Открытие счёта
          </BccTypography>
          <BccTypography type="p2" block className={classes.orderNumText}>
            Подпишите документы и начните пользоваться счётом
          </BccTypography>
        </Grid>
      </Grid>
      <div className={classes.orderForm}>
        <Grid direction="column" container className={classes.innerOrderForm}>
          <Grid item>
            <BccTypography
              type="h2"
              weight="medium"
              block
              className={classes.titleForm}
            >
              Откройте текущий счёт бесплатно
            </BccTypography>
            <BccTypography
              type="p1"
              weight="medium"
              block
              className={classes.subTitleForm}
            >
              оставьте заявку и наш менеджер свяжется с вами
            </BccTypography>
          </Grid>
          <Grid item>
            <BccInput
              className={classes.inputStyle}
              fullWidth
              label="Имя"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <BccInput
              variant="filled"
              fullWidth
              label="Номер телефона"
              className={classes.inputStyle}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputComponent: BccMaskedInput as any,
              }}
            />
          </Grid>
          <Grid item>
            <BccInput
              className={classes.inputStyle}
              fullWidth
              label="БИН/ИИН"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <BccSelect
              placeholder="Город"
              fullWidth
              options={[
                { value: "astana", label: "Нур-Султан" },
                { value: "almaty", label: "Алматы" },
                { value: "shymkent", label: "Шымкент" },
              ]}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={classes.checkboxText}
            >
              <Grid item>
                <BccCheckbox />
              </Grid>
              <Grid item>
                <BccTypography type="p3">
                  Соглашаюсь с обработкой данных и{" "}
                  <BccLink href="https://www.bcc.kz/" target="_blank">
                    с условиями передачи информации
                  </BccLink>
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item className={classes.btnWrap}>
                <BccButton variant="outlined" color="secondary">
                  Получить консультацию
                </BccButton>
              </Grid>
              <Grid item className={classes.btnWrap}>
                <BccButton variant="contained" color="primary">
                  Отправить заявку
                </BccButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Order;
