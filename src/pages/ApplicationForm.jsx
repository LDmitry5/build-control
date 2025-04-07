import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ProfileLogo } from "../components/ProfileLogo";

function ApplicationForm() {
  const location = useLocation();
  let weekDay;
  let date;
  let time;
  let engineer;
  let [cause, setCause] = useState(""); // Предъявление
  let [frame, setFrame] = useState(""); // Корпус
  let [section, setSection] = useState(""); // Секция
  let [volume, setVolume] = useState(""); // Объем

  if (location.state) {
    weekDay = location.state.weekDay ? location.state.weekDay : null;
    date = location.state.date ? location.state.date : null;
    time = location.state.time ? location.state.time : null;
    engineer = location.state.engineer ? location.state.engineer : null;
  }

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity() === true) {
      navigate("/confirmation", { state: { time: time, engineer: engineer, date: date, weekDay: weekDay, cause: cause, frame: frame, section: section, volume: volume } });
    }
  };

  const getValue = (event) => {
    if (event.currentTarget.id === "causeValue") {
      const value = event.currentTarget.value;
      setCause(value);
    }
    if (event.currentTarget.id === "frameValue") {
      const value = event.currentTarget.value;
      setFrame(value);
    }
    if (event.currentTarget.id === "sectionValue") {
      const value = event.currentTarget.value;
      setSection(value);
    }
    if (event.currentTarget.id === "volumeValue") {
      const value = event.currentTarget.value;
      setVolume(value);
    }
  };

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
        <div className="p-3 text-black text-center fw-bold fs-2"></div>
        <Form className="row d-flex flex-column align-items-center" noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mb-3 col-md-7">
            <Form.Group controlId="causeValue">
              <Form.Label>Предъявление</Form.Label>
              <Form.Control as="textarea" rows={3} onInput={getValue} required />
              <Form.Control.Feedback type="invalid">Введите значение</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="mb-3 col-md-7">
            <Form.Group controlId="frameValue">
              <Form.Label>Корпус</Form.Label>
              <Form.Select aria-label="Default select example" defaultValue="" onChange={getValue} required>
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value="Первый">Первый</option>
                <option value="Второй">Второй</option>
                <option value="Третий">Третий</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">Выберите один пункт из списка</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="mb-3 col-md-7">
            <Form.Group controlId="sectionValue">
              <Form.Label>Секция</Form.Label>
              <Form.Select aria-label="Default select example" defaultValue="" onChange={getValue} required>
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value="1">Первая</option>
                <option value="2">Вторая</option>
                <option value="3">Третья</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">Выберите один пункт из списка</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="mb-3 col-md-7">
            <Form.Group controlId="volumeValue">
              <Form.Label>Объем</Form.Label>
              <Form.Control type="textarea" placeholder="Объем" onInput={getValue} required />
              <Form.Control.Feedback type="invalid">Введите значение</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="mb-3 col-md-7 p-0">
            <div className="form-check bg-white rounded-4 p-3 justify-content-between position-fixed start-0 end-0 bottom-0">
              <Button className="w-100" type="submit">
                Продолжить
              </Button>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
}

export { ApplicationForm };
