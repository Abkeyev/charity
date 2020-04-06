import React from "react";
import { BccTypography } from "./BccComponents/index";

const Share = () => {
  return (
    <div className="shareWrapper">
      <div className="innerWrapper">
        <BccTypography block type="h3" className="title" weight="bold">
          Поделитесь с друзьями
        </BccTypography>
        <BccTypography block type="p2" className="title">
          Расскажите друзьям про Вашу инициативу и мы вместе сохраним больше
          жизней ❤️
        </BccTypography>
        <div className="social">
          <div>
            <a href="#" target="_blank">
              <img src={process.env.PUBLIC_URL + "/fb.svg"} />
            </a>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={process.env.PUBLIC_URL + "/in.svg"} />
            </a>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={process.env.PUBLIC_URL + "/vk.svg"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
