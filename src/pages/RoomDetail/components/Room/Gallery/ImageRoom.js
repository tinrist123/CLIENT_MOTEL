import React, { useState } from "react";
import "./ImageRoom.scss";
import RemainImageNumber from "./RemainImageNumber";

import { GalleryModal } from "../../../../../components";

function GalleryImageRoom(props) {
  const [activeModal, setActiveModal] = useState(false);
  const [indexActiveImg, setIndexActiveImg] = useState(0);

  const { gallery_img } = props;

  let sub_gallery;
  if (gallery_img.length > 5) {
    sub_gallery = gallery_img.slice(5);
  }
  let show_gallery_img = gallery_img.slice(
    1,
    gallery_img.length - sub_gallery.length
  );

  function showModalOverlay(currentImgClicked) {
    setActiveModal(true);
    setIndexActiveImg(currentImgClicked);
  }

  function CloseModalOverlay() {
    setActiveModal(false);
  }

  return (
    <div className="gallery">
      {activeModal && (
        <GalleryModal
          closeModal={CloseModalOverlay}
          currentImgClicked={indexActiveImg}
          gallery_img={gallery_img}
        />
      )}
      <div className="gallery_grid">
        <div className="big_img">
          <div className="img" onClick={() => showModalOverlay(0)}>
            <img src={gallery_img[0]} alt="" />
          </div>
        </div>
        <div className="mini_img">
          <div className="grid_all_img">
            {show_gallery_img.map((img, index) => {
              if (index === show_gallery_img.length - 1) {
                return (
                  <div
                    className="img position_relative"
                    onClick={() => showModalOverlay(index + 1)}
                  >
                    <img src={img} alt="" />
                    {sub_gallery.length > 0 && (
                      <RemainImageNumber numberRemain={sub_gallery.length} />
                    )}
                  </div>
                );
              } else {
                return (
                  <div
                    className="img"
                    onClick={() => showModalOverlay(index + 1)}
                  >
                    <img src={img} alt="" />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryImageRoom;
