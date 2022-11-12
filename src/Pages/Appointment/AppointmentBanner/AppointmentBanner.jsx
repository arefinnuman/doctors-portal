import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import bgbanner from "../../../Assets/images/bg.png";
import chair from "../../../Assets/images/chair.png";

const AppointmentBanner = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <header>
      <section
        className="md:my-20 md:mx-5"
        style={{ background: `url(${bgbanner})` }}
      >
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="rounded-lg md:w-1/2 shadow-2xl"
              alt="dentist chair"
            />
            <div>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AppointmentBanner;
