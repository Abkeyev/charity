import React from "react";
import { useTranslation } from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  BccTypography,
  BccSlider,
  BccButton,
  BccInput
} from "./BccComponents/index";
import ReactGA from "react-ga";
var momentTz = require("moment-timezone");
const jsSHA = require("jssha");

const Payment = (props: any) => {
  const [sum, setSum] = React.useState(0);
  const [src, setSrc] = React.useState("");
  const { t } = useTranslation();
  function uuid() {
    return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString();
    });
  }

  function XOR_hex(a: string, b: string) {
    var res = "",
      l = Math.max(a.length, b.length);
    for (var i = 0; i < l; i += 4)
      res =
        (
          "000" +
          (
            parseInt(a.slice(-i - 4, -i || a.length), 16) ^
            parseInt(b.slice(-i - 4, -i || b.length), 16)
          ).toString(16)
        ).slice(-4) + res;
    return res;
  }

  const generateUrl = () => {
    ReactGA.event({
      category: "Further_payment_charity",
      action: "Button_further"
    });
    const xor = "4ee6d5f37a804cd5bc980f369ca1851d";
    const uid = uuid();
    let desc = encodeURIComponent(`charity`).substring(0, 80);
    const merchant = "bcc-charity";
    const terminal = "90030764";
    const timestamp = momentTz()
      .tz("Asia/Almaty")
      .add(-6, "hours")
      .format("YYYYMMDDHHmmss");
    const backref = "https://www.bcc.kz/charity";
    const value = `${sum.toString().length}${sum}3398${uid.length}${uid}${
      merchant.length
    }${merchant}${terminal.length}${terminal}16${
      timestamp.length
    }${timestamp}11${uid.length}${uid}`;
    var shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(xor, "HEX");
    shaObj.update(value);
    const pSign = shaObj.getHMAC("HEX").toUpperCase();
    let url = `https://3dsecure.bcc.kz:5443/cgi-bin/cgi_link/?AMOUNT=${sum}&CURRENCY=398&ORDER=${uid}&DESC=${desc}&MERCHANT=${merchant}&TERMINAL=${terminal}&MERCH_GMT=6&TIMESTAMP=${timestamp}&TRTYPE=1&NONCE=${uid}&P_SIGN=${pSign}&LANG=RU&BACKREF=${backref}`;
    window.location.replace(url);
    setSrc(url);
  };

  return (
    <div className="pWrapper">
      <div className="paymentWrapper animated fadeInUp faster">
        <img
          className="close"
          onClick={() => props.setOpen(false)}
          src={process.env.PUBLIC_URL + "/close.svg"}
          alt="close"
        />
        <div className="payment">
          <BccTypography type="h6" block className="sumText">
            Сумма пожертвования
          </BccTypography>
          <div className="paymentWrap">
            <div className="sliderWrap">
              <BccInput
                label="Выберите сумму"
                key="sum"
                value={sum}
                variant="filled"
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">₸</InputAdornment>
                  )
                }}
                onChange={(e: any) =>
                  e.target.value > 5000000
                    ? setSum(5000000)
                    : setSum(e.target.value)
                }
                className="input"
              />
              <BccSlider
                style={{
                  left: 6,
                  right: 6,
                  width: "calc(100% - 12px)",
                  bottom: -1,
                  padding: 0,
                  position: "absolute"
                }}
                min={0}
                max={5000000}
                step={5000}
                value={sum}
                valueLabelDisplay="off"
                defaultValue={sum}
                onChange={(e: any, val: any) =>
                  setSum(val instanceof Array ? val[1] : val)
                }
              />
              <div className="sliderRange">
                <span>0</span>
                <span>5 000 000</span>
              </div>
            </div>
            <BccButton
              variant="contained"
              className="nextBtn"
              color="primary"
              onClick={() => generateUrl()}
            >
              Далее
            </BccButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
