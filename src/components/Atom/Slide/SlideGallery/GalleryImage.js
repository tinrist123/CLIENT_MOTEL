import React from "react";
import SlideImage from "../SlideImage";
import Modal from "../../../Modal/Modal";
function GalleryImage(props) {
  const { closeModal, currentImgClicked, gallery_img } = props;
  return (
    <Modal>
      <SlideImage
        closeModal={closeModal}
        currentImgClicked={currentImgClicked}
        gallery_img={gallery_img}
      />
    </Modal>
  );
}

export default GalleryImage;
