import React, { useState } from "react";
import { Link, useLocation } from "react-router";

import { DateSelection } from "../components/DateSelection";
import { ProfileLogo } from "../components/ProfileLogo";

function Welcome() {
  const [date, setDate] = useState("");
  const [weekDay, setWeekDay] = useState("");

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="container d-flex flex-column vh-100">
      <header className="bg-warning bg-gradient d-flex justify-content-around">
        <Link className="d-flex justify-content-center align-items-center bg-transparent text-primary-emphasis border-0 fs-2" style={{ width: 70 + "px" }}></Link>
        <img src="logo.svg" width={230} height={100} alt="logo" />
        <ProfileLogo />
      </header>
      <main className="bg-light bg-gradient ps-4 pe-4 flex-grow-1">
        <div className="p-3 text-black text-center fw-bold fs-2">Новая запись</div>
        <div className="d-flex flex-column align-items-center gap-4 row">
          <div className="mb-4 col-md-7">
            <DateSelection setDate={setDate} setWeekDay={setWeekDay} />
          </div>
          <div className="d-flex justify-content-center gap-4 col-md-7">
            <Link
              to="/engineers-choice"
              preventScrollReset={"true"}
              state={{ pathname: pathname, date: date, weekDay: weekDay }}
              className="btn btn-primary rounded-4 d-flex justify-content-center align-items-center w-50 border-0 text-white pt-5 pb-5 pe-2 ps-2">
              Выбрать инженера СК
            </Link>
            <Link
              to="/timing"
              preventScrollReset
              state={{ pathname: pathname, date: date, weekDay: weekDay }}
              className="btn btn-primary rounded-4 d-flex justify-content-center align-items-center w-50 border-0 text-white pt-5 pb-5 pe-2 ps-2">
              Выбрать время
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Welcome };
