import React, { useState } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

function EngineersChoice(props) {
  const choiceTime = props.choiceTime;
  const pathname = props.pathname;
  const date = props.date;
  const weekDay = props.weekDay;

  const navigate = useNavigate();
  const goDateAndTime = () => navigate("/timing", { state: { engineer: count, date: date, weekDay: weekDay } });
  const goReasonForCall = () => navigate("/application-form", { state: { time: choiceTime, engineer: count, date: date, weekDay: weekDay } });

  // Переход дальше в зависимости с какой страницы пользователь пришел
  const go = () => {
    if (pathname === "/") {
      goDateAndTime();
    } else goReasonForCall();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const engineers = [
    {
      id: 1,
      name: "Дементьев И.В.",
    },
    {
      id: 2,
      name: "Веряскин А.С.",
    },
    {
      id: 3,
      name: "Аитов А.Э.",
    },
    {
      id: 4,
      name: "Чилочи А.Ф.",
    },
    {
      id: 5,
      name: "Трунов А.А.",
    },
  ];

  function inputChecked(name) {
    const div = document.querySelector(".d-none ");
    if (div) {
      div.classList.remove("d-none");
      div.classList.add("d-flex");
    }
  }

  function searchEngineers(event) {
    const role = event.target.parentElement.nextElementSibling.querySelectorAll(".form-check-label");
    const value = event.target.value;
    const regex = new RegExp(value, "gi");

    role.forEach(function (item) {
      const atr = item.textContent;

      const coincidence = atr.match(regex);
      if (!coincidence) {
        item.parentElement.classList.add("d-none");
      } else {
        item.parentElement.classList.remove("d-none");
      }
    });
  }

  let [count, setCount] = useState("");

  return (
    <>
      <form className="d-flex flex-column align-items-center gap-4 row" role="search" onSubmit={handleSubmit}>
        <div className="d-flex col-md-7">
          <input className="form-control ps-5" type="search" name="search" placeholder="Поиск" aria-label="Поиск" onInput={searchEngineers} />
          <button className="border-0 position-absolute btn btn-outline-secondary" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="d-flex flex-column gap-2 col-md-7">
          {engineers.length > 0
            ? engineers.map((el) => (
                <div className="form-check bg-white rounded-4 p-3 ps-5" key={el.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={el.id}
                    onChange={() => {
                      inputChecked(el.name);
                      setCount((count = el.name));
                    }}
                  />
                  <label className="d-flex form-check-label" htmlFor={el.id}>
                    {el.name}
                  </label>
                </div>
              ))
            : "Инженеров нет"}
          <div className="form-check bg-white rounded-4 p-4 d-none justify-content-between align-items-center position-fixed bottom-0 start-0 end-0">
            <div>
              <div>{count}</div>
              <div>{choiceTime}</div>
            </div>
            <Button variant="primary" size="sm" className="h-75" onClick={go}>
              Продолжить
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export { EngineersChoice };
