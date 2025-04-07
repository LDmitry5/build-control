import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProfileLogo } from "../components/ProfileLogo";

function Confirmation() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const location = useLocation();
  let weekDay;
  let date;
  let time;
  let engineer;
  let cause;
  let frame;
  let section;
  let volume;

  if (location.state) {
    weekDay = location.state.weekDay ? location.state.weekDay : null;
    date = location.state.date ? location.state.date : null;
    time = location.state.time ? location.state.time : null;
    engineer = location.state.engineer ? location.state.engineer : null;
    cause = location.state.cause ? location.state.cause : null;
    frame = location.state.frame ? location.state.frame : null;
    section = location.state.section ? location.state.section : null;
    volume = location.state.volume ? location.state.volume : null;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container d-flex flex-column vh-100">
      <header className="bg-warning bg-gradient d-flex justify-content-around">
        <Link onClick={goBack} className="d-flex justify-content-center align-items-center bg-transparent text-primary-emphasis border-0 fs-2" style={{ width: 70 + "px" }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <img src="logo.svg" width={230} height={100} alt="logo" />
        <ProfileLogo />
      </header>
      <main className="position-relative bg-light bg-gradient ps-4 pe-4 pt-4 flex-grow-1">
        <div className="d-flex flex-column align-items-center row">
          <div className="mb-3 col-md-7">
            <h5>Подтверждение записи</h5>
          </div>
          <div className="mb-3 col-md-7">
            <div className="d-flex flex-column mb-4 bg-white rounded-4 p-3">
              <div>
                Дата:&nbsp;{date},&nbsp;{weekDay}
              </div>
              <div>Время:&nbsp;{time}</div>
              <div>Инженер СК:&nbsp;{engineer}</div>
              <div className="text-break">Предъявление:&nbsp;{cause}</div>
              <div>Корпус:&nbsp;{frame}</div>
              <div>Секция:&nbsp;{section}</div>
              <div>Объём:&nbsp;{volume}</div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 bg-white rounded-4 p-4 start-0 end-0">
          <Button className="w-100" variant="primary" onClick={handleShow}>
            Подтвердить запись
          </Button>
        </div>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Запись подтверждена!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Информация о записи направлена Вам на почту. Для переноса или отмены записи перейдите по ссылке: https://ssylka.ru</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { Confirmation };
