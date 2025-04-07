import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { DateSelection } from "../components/DateSelection";
import { TimesChoice } from "../components/TimesChoice";
import { ProfileLogo } from "../components/ProfileLogo";

function Timing() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  let engineer;
  let pathname;
  let nowDate;
  let nowWeekDay;

  if (location.state) {
    engineer = location.state.engineer ? location.state.engineer : null;
    pathname = location.state.pathname ? location.state.pathname : null;
    nowDate = location.state.date ? location.state.date : null;
    nowWeekDay = location.state.weekDay ? location.state.weekDay : null;
  }

  let [date, setDate] = useState(nowDate);
  let [weekDay, setWeekDay] = useState(nowWeekDay);

  return (
    <div className="container d-flex flex-column">
      <header className="bg-warning bg-gradient d-flex justify-content-around">
        <Link onClick={goBack} className="d-flex justify-content-center align-items-center bg-transparent text-primary-emphasis border-0 fs-2" style={{ width: 70 + "px" }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <img src="logo.svg" width={230} height={100} alt="logo" />
        <ProfileLogo />
      </header>
      <main className="bg-light bg-gradient ps-4 pe-4 flex-grow-1 position-relative vh-100">
        <div className="p-3 text-black text-center fw-bold fs-2">Дата и время</div>
        <div className="d-flex flex-column align-items-center gap-4 row">
          <div className="mb-4 col-md-7">
            <DateSelection setDate={setDate} setWeekDay={setWeekDay} date={nowDate} weekDay={nowWeekDay} />
          </div>
          <div className="d-flex justify-content-center gap-4 col-md-7">
            <TimesChoice pathname={pathname} engineer={engineer} date={date} weekDay={weekDay} />
          </div>
        </div>
      </main>
    </div>
  );
}

export { Timing };
