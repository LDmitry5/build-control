import React, { useState } from "react";
import { useNavigate } from "react-router";

import Button from "react-bootstrap/Button";

function TimesChoice(props) {
  const engineer = props.engineer;
  const pathname = props.pathname;
  let date = props.date;
  let weekDay = props.weekDay;

  const navigate = useNavigate();
  const goEngineers = () => navigate("/engineers-choice", { state: { time: count, date: date, weekDay: weekDay } });
  const goReasonForCall = () => navigate("/application-form", { state: { time: count, engineer: engineer, date: date, weekDay: weekDay } });

  // Переход дальше в зависимости с какой страницы пользователь пришел
  const go = () => {
    if (pathname === "/") {
      goEngineers();
    } else goReasonForCall();
  };

  const times = [
    {
      id: 1,
      time: "09:00",
    },
    {
      id: 2,
      time: "09:30",
    },
    {
      id: 3,
      time: "10:00",
    },
    {
      id: 4,
      time: "10:30",
    },
    {
      id: 5,
      time: "11:00",
    },
    {
      id: 6,
      time: "11:30",
    },
    {
      id: 7,
      time: "12:00",
    },
    {
      id: 8,
      time: "12:30",
    },
    {
      id: 9,
      time: "13:00",
    },
    {
      id: 10,
      time: "13:30",
    },
    {
      id: 11,
      time: "14:00",
    },
    {
      id: 12,
      time: "14:30",
    },
    {
      id: 13,
      time: "15:00",
    },
    {
      id: 14,
      time: "15:30",
    },
    {
      id: 15,
      time: "16:00",
    },
    {
      id: 16,
      time: "16:30",
    },
    {
      id: 17,
      time: "17:00",
    },
    {
      id: 18,
      time: "17:30",
    },
    {
      id: 19,
      time: "18:00",
    },
    {
      id: 20,
      time: "18:30",
    },
    {
      id: 21,
      time: "19:00",
    },
    {
      id: 22,
      time: "19:30",
    },
    {
      id: 23,
      time: "20:00",
    },
    {
      id: 24,
      time: "20:30",
    },
  ];

  function timeChoice() {
    const div = document.querySelector(".d-none ");
    if (div) {
      div.classList.remove("d-none");
      div.classList.add("d-flex");
    }
  }

  let [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-3 bg-white rounded-4 p-3 w-100">
        {times.length > 0
          ? times.map((el) => (
              <button
                onClick={() => {
                  timeChoice();
                  setCount((count = el.time));
                }}
                className="btn btn-outline-success"
                key={el.id}>
                {el.time}
              </button>
            ))
          : "Нет свободного времени"}
        <div className="form-check bg-white rounded-4 p-4 d-none justify-content-between align-items-center position-fixed start-0 end-0 bottom-0">
          <div>
            <div>{engineer}</div>
            <div>{count}</div>
          </div>
          <Button variant="primary" size="sm" className="h-75" onClick={go}>
            Продолжить
          </Button>
        </div>
      </div>
    </>
  );
}

export { TimesChoice };
