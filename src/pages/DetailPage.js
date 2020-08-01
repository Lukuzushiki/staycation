import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetail from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonials from "parts/Testimoni";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails";

import { checkoutBooking } from "store/actions/checkout";

class DetailPage extends Component {
  compenentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageRef: "" },
      { pageTitle: "House Details", pageRef: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetail breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimonials data={ItemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailPage);
