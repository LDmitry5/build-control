import React, { useState } from "react";

import { useAuth } from "../hook/useAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Authentication() {
  const { signin } = useAuth();
  const [show, setShow] = useState(false); // Оповещение о неверном логине или пароле

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    // Аутентификация
    if (username === "admin" && password === "admin") {
      const isLogin = true;
      signin(isLogin);
      form.querySelector("#formUsername").classList.remove("is-invalid");
      form.querySelector("#formGroupPassword").classList.remove("is-invalid");
    }

    setShow(true);

    form.querySelector("#formUsername").classList.add("is-invalid");
    form.querySelector("#formGroupPassword").classList.add("is-invalid");
  };

  return (
    <div className="container d-flex flex-column vh-100">
      <header className="bg-warning bg-gradient d-flex justify-content-center">
        <img src="logo.svg" width={230} height={100} alt="logo" />
      </header>
      <main className="bg-light bg-gradient ps-4 pe-4 flex-grow-1">
        <div className="p-4 text-black text-center fw-semibold fs-1">Вход в профиль</div>
        <Alert className="d-flex align-items-center" variant="danger" show={show}>
          Введен неверный логин или пароль!
        </Alert>
        <Form onSubmit={handleSubmit} className="row d-flex flex-column align-items-center">
          <Form.Group className="mb-3 col-md-7" controlId="formUsername">
            <Form.Label>Логин</Form.Label>
            <Form.Control type="text" placeholder="admin" name="username" required />
          </Form.Group>
          <Form.Group className="mb-4 col-md-7" controlId="formGroupPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="admin" name="password" required />
          </Form.Group>
          <div className="mb-3 col-md-7">
            <Button className="w-100 d-flex justify-content-center align-items-center gap-2" variant="primary" type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      </main>
    </div>
  );
}

export { Authentication };
