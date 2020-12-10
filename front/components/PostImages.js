import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useCallback } from "react";
import ImagesZoom from "./ImagesZoom";

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImageZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImageZoom(false);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        <img
          src={images[1].src}
          alt={images[1].src}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <img
        src={images[0].src}
        alt={images[0].src}
        style={{ width: "50%", display: "inline-block" }}
        onClick={onZoom}
      />
      <div
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <PlusOutlined />
        <br />
        {images.length - 1} 개의 사진 더보기
      </div>
      {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

export default PostImages;
