import React from "react";
import { Link, useNavigate, useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { EngineersChoice } from "../components/EngineersChoice";
import { ProfileLogo } from "../components/ProfileLogo";

function Engineers() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  let choiceTime;
  let pathname;
  let date;
  let weekDay;

  if (location.state) {
    choiceTime = location.state.time ? location.state.time : null;
    pathname = location.state.pathname ? location.state.pathname : null;
    date = location.state.date ? location.state.date : null;
    weekDay = location.state.weekDay ? location.state.weekDay : null;
  }

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
        <div className="p-3 text-black text-center fw-bold fs-2">Выбор инженера СК</div>
        <EngineersChoice choiceTime={choiceTime} pathname={pathname} date={date} weekDay={weekDay} />
      </main>
    </div>
  );
}

export { Engineers };
