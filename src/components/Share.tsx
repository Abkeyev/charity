import React from "react";
import { BccTypography } from "./BccComponents/index";

const Share = () => {
  return (
    <div className="shareWrapper">
      <div className="innerWrapper animated fadeIn faster">
        <BccTypography block type="h3" className="title" weight="bold">
          Поделитесь с друзьями
        </BccTypography>
        <BccTypography block type="p2" className="title">
          Расскажите друзьям про Вашу инициативу и мы вместе сохраним больше
          жизней ❤️
        </BccTypography>
        <div className="socialLinks">
          <div>
            <a
              href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bcc.kz%2Fcharity%2F"
              target="_blank"
            >
              <img src={process.env.PUBLIC_URL + "/fb.svg"} />
            </a>
          </div>
          <div>
            <a
              href="http://vk.com/share.php?title=%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8%20%D0%BC%D0%B5%D0%B4%D0%B8%D0%BA%D0%B0%D0%BC%20%D0%B2%20%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B5%20%D1%81%20CoVID-19%20%D0%92%D1%8B%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0%20%D0%BF%D0%BE%D0%B9%D0%B4%D1%83%D1%82%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BC%D0%B5%D0%B4%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%2C%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D1%8B%20%D0%B8%20%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B7%D0%B0%D0%B1%D0%BE%D0%BB%D0%B5%D0%B2%D1%88%D0%B8%D1%85&amp;url=https%3A%2F%2Fwww.bcc.kz%2Fcharity%2F"
              target="_blank"
            >
              <img src={process.env.PUBLIC_URL + "/vk.svg"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
