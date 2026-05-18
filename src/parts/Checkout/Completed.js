import React, { useMemo } from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  const booking = useMemo(() => {
    try {
      const rawBooking = window.sessionStorage.getItem("staycation:lastBooking");
      return rawBooking ? JSON.parse(rawBooking) : null;
    } catch (error) {
      return null;
    }
  }, []);

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              alt="Completed checkout"
              className="img-fluid"
            />
            {booking?.bookingCode && (
              <h5 className="mt-4 mb-2">{booking.bookingCode}</h5>
            )}
            <p className="text-gray-500">
              Your mock booking has been recorded successfully. This portfolio
              flow stays fully functional without relying on the deprecated
              backend.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
