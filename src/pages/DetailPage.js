import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetail from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimonials from "parts/Testimoni";
import Footer from "parts/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const pageData = page[id];

  useEffect(() => {
    document.title = "Detail Page";
    window.scrollTo(0, 0);

    if (!pageData) {
      dispatch(fetchPage(`/detail-page/${id}`, id));
    }
  }, [dispatch, id, pageData]);

  if (!pageData) return null;

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header />
      <PageDetail breadcrumb={breadcrumb} data={pageData} />
      <FeaturedImage data={pageData.imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={pageData} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                ItemDetails={pageData}
                startBooking={(payload) => dispatch(checkoutBooking(payload))}
              />
            </Fade>
          </div>
        </div>
      </section>

      <Activities data={pageData.activityId} />
      <Testimonials data={pageData.testimonial} />
      <Footer />
    </>
  );
}
