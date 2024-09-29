import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import Button from "../components/Button";
const Contact = () => {
  const [successSubmit, setSuccessSubmit] = useState(false);

  const success = () => {
    Swal.fire({
      title: "Hvala na interesovanju.",
      text: "Kliknite OK da izadjete.",
      icon: "success",
    });
  };
  const { handleSubmit, register, reset } = useForm();
  const formSubmit = (data) => {
    reset();
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a1cdeb79-c728-4dd5-8a5f-a765efa3a104");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessSubmit(true);
      formSubmit();
      setTimeout(() => {
        setSuccessSubmit(false);
      }, 400);
    }
  };

  return (
    <section className="contact">
      <h2 className="heading">
        Kontakirajte <span>me:</span>
      </h2>
      <form onSubmit={onSubmit}>
        {successSubmit && success()}
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Ime i prezime / Naziv kompanije"
            required
            {...register("name")}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            {...register("email")}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="phone_number"
            placeholder="Broj telefona"
            required
            {...register("phone_number")}
          />
          <input
            type="text"
            name="text"
            {...register("text")}
            placeholder="Naslov"
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Vaša poruka"
          required
          {...register("message")}
        ></textarea>
        <Button info="Pošalji poruku" />
      </form>
    </section>
  );
};

export default Contact;
