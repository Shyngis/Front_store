import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductSizeService from "../services/ProductSizeService";
import FileService from "../services/FileService";

const ProductDetails = () => {
  // const IMAGE_URL = "http://161.97.144.45:8182/images/";
  const IMAGE_URL = "http://161.97.144.45:8182/images/";
  const [product, setProduct] = useState("");
  const [images, setImages] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [activeImg, setActiveImage] = useState();

  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    ProductService.findById(id).then((result) => {
      setProduct(result);
    });

    FileService.findImagesByContainerId(id).then((result) => {
      const thumbs = result.filter((i) => i.containerClass == "Thumbnail");
      if (thumbs && thumbs.length > 0) {
        setImages(thumbs);
        const originalFilename = getImageFilename(thumbs[0].filename);
        setActiveImage(IMAGE_URL + originalFilename);
      }
    });

    ProductSizeService.findAllByProductId(id).then((result) => {
      setProductSizes(result);
    });
  }, []);

  function getImageFilename(filename) {
    console.log("fielname", filename);
    if (filename) {
      return filename.replace("thumbnail-", "");
    }
    return filename;
  }

  function activateThumbnail(thumbnailFilename) {
    // thumbnailFilename.preventDefault();
    // event.preventDefault();
    // const thumbnailFilename = event.target.value;
    // console.log('onclick', thumbnailFilename);
    setActiveImage(IMAGE_URL + getImageFilename(thumbnailFilename));
  }

  return (
    <div>
      <>
        <div className="flex-vertical">
          
          <div><h5 className="product-name">{product.name}</h5></div>

          <div className="flex-horizontal">

          <div className="image-container">
            <img src={activeImg} alt="" className="product-image" />
            <div className="thumbnail-container">
              {images.map((image) => (
                <img
                  src={IMAGE_URL + image.filename}
                  alt=""
                  className="thumbnail"
                  onClick={(event) => activateThumbnail(image.filename)}
                />
              ))}
            </div>
          </div>
          <div className="about-container">
            <p className="product-description">{product.description}</p>

            <table>
              <thead>
                <tr>
                  <th>Артикул</th>
                  <th>Размер</th>
                </tr>
              </thead>
              <tbody>
                {productSizes.map((productSize) => (
                  <tr>
                    <td>{productSize.article}</td>
                    <td>{productSize.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="video-container">
              <ReactPlayer
                className="video-player"
                url={product.video}
                controls
              />
            </div>

            <div id="fileDisplayArea">{product.file_pr}</div>
          </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductDetails;
