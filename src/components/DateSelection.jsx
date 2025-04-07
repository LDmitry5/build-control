import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function DateSelection(props) {
  // Получение текущей даты в формате ХХХХ-ХХ-ХХ
  const nowYear = new Date().getFullYear();
  let nowDay;
  new Date().getDate() < 10 ? (nowDay = "0" + new Date().getDate()) : (nowDay = new Date().getDate());
  let nowMonth;
  new Date().getMonth() + 1 < 10 ? (nowMonth = "0" + (new Date().getMonth() + 1)) : (nowMonth = new Date().getMonth());
  const currentDate = `${nowYear}-${nowMonth}-${nowDay}`; // текущая дата

  // Преобразовать дату в русскую версию
  let nowDate = new Date();
  const options = {
    month: "long",
    day: "numeric",
    timezone: "UTC",
  };
  let ruDate;
  props.date ? (ruDate = props.date) : (ruDate = new Date(nowDate).toLocaleString("ru", options));

  // Получить текущий день недели
  function getWeekDay(date) {
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return days[date.getDay()];
  }
  let nowWeek;
  props.weekDay ? (nowWeek = props.weekDay) : (nowWeek = getWeekDay(nowDate));

  // Отобразить выбранную дату
  function displaySelectedDate(event) {
    ruDate = new Date(event.target.value).toLocaleString("ru", options);
    nowDate = new Date(event.target.value);
    return ruDate;
  }

  let [count, setCount] = useState(ruDate);
  let [choiceWeek, setChoiceWeek] = useState(nowWeek);

  useEffect(() => {
    if (props.setDate && props.setWeekDay) {
      props.setDate(count);
      props.setWeekDay(choiceWeek);
    }
  }, [count, choiceWeek]);

  return (
    <div className="position-relative d-flex align-items-center">
      <div className="bg-body rounded-4 d-flex justify-content-center pt-3 pb-3 fs-5 w-100">
        {count}, {choiceWeek}
      </div>
      <label htmlFor="dateSelection" className="position-absolute w-100 p-3 d-flex justify-content-end">
        <FontAwesomeIcon icon={faCalendarDays} />
      </label>
      <input
        type="date"
        id="dateSelection"
        onChange={(event) => {
          setCount((count = displaySelectedDate(event)));
          setChoiceWeek((choiceWeek = getWeekDay(nowDate)));
        }}
        className="w-100 p-3 position-absolute opacity-0"
        min={currentDate}
      />
    </div>
  );
}

export { DateSelection };
