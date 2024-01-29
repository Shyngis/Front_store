import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { URL, imgPrefixURL } from "../Common/ddata";
import { Button, Card } from "react-bootstrap";
import CategoryService from "../services/CategoryService";
import "./Catalog.css";
import { CatalogFilter } from "./CatalogFilter";
import carou from "../../Assets/carou.jpg";
import cow from "../../Assets/cow.png";
import lake from "../../Assets/lake.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export const Catalog = () => {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    CategoryService.findByParentAndImageId(1).then(
      (result) => {
        setMainCategories(result);
      }
    );
  }

  return (
    <>
      {/* <MDBCarousel fade interval={5000} className="slider_wrap">
        <MDBCarouselItem itemId={1} className="slider">
          <img src={carou} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2} className="slider">
          <img src={cow} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3} className="slider">
          <img src={lake} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
      </MDBCarousel> */}
      <div>
        <div className="row mt-3">
          {mainCategories.map((item) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              key={item.category.id}
            >
              <Link
                to={`/catalog/${item.category.id}`}
              >
                <div className="card santehplast-card">
                  <img
                    src={`${imgPrefixURL}/${item.image.filename}`}
                    className="card-img-top"
                  />
                  <div className="card-body" style={{ overflow: "hidden" }}>
                    <p className="card-text">{item.category.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
