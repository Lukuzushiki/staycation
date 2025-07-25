import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import propTypes from "prop-types";
import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

const BookingForm = ({ ItemDetails, startBooking }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    const countDuration = (endDate - startDate) / (1000 * 3600 * 24) + 1;

    if (countDuration !== data.duration) {
      setData((prev) => ({ ...prev, duration: countDuration }));
    }
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + Number(data.duration) - 1);

    if (data.date.endDate.toDateString() !== endDate.toDateString()) {
      setData((prev) => ({
        ...prev,
        date: {
          ...prev.date,
          endDate,
        },
      }));
    }
  }, [data.duration]);

  const updateData = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = () => {
    startBooking({
      _id: ItemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    navigate("/checkout");
  };

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${ItemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {ItemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix=" night"
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${ItemDetails.price * data.duration} USD
        </span>{" "}
        for{" "}
        <span className="text-gray-900">
          {data.duration} {ItemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={handleBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  ItemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default BookingForm;
