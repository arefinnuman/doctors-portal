import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = format(selected, "PP");
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;

    const booking = {
      appointmentDate: date,
      treatmentName: name,
      patientName: name,
      slot,
      email,
      phoneNumber,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <input
              disabled
              type="text"
              value={slots}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
