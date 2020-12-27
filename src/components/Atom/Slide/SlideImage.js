import React, { useState, useEffect } from "react";
import "./SlideImage.scss";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CloseIcon,
} from "../../../assets/images/icons/index";
function SlideImage(props) {
  const { closeModal, currentImgClicked, gallery_img } = props;

  const [imgGallery, setImgGallery] = useState(gallery_img);
  const [indexImg, setIndexImg] = useState(currentImgClicked);

  let prevImgSelected = 0;

  const slideNextImg = () => {
    prevImgSelected = indexImg;
    let temporary = indexImg;
    temporary = ++temporary % imgGallery.length;
    setIndexImg(temporary);
  };

  const slidePreviousImg = () => {
    prevImgSelected = indexImg;
    let temporary = indexImg;
    temporary = --temporary % imgGallery.length;
    setIndexImg(temporary < 0 ? imgGallery.length - 1 : temporary);
  };

  return (
    <div className="slide_image">
      <div className="gallery_image">
        <ul className="gallery">
          {imgGallery.map((img, index) => {
            return (
              <li className={index === indexImg && "active"}>
                <img src={img} alt="room_img" />
              </li>
            );
          })}
        </ul>
        <div className="btn">
          <div className="btn_close btn_slide" onClick={closeModal}>
            <CloseIcon />
          </div>
          <div
            className="btn_next btn_slide"
            onClick={() => slidePreviousImg()}
          >
            <CaretLeftIcon />
          </div>
          <div
            className="btn_previous btn_slide"
            onClick={() => slideNextImg()}
          >
            <CaretRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideImage;
