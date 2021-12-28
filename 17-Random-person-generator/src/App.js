/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("");
  const [person, setPerson] = useState("");
  const [nationality, setNationality] = useState("US");

  useEffect(() => {
    getUserFromApi();
  }, []);

  const getUserFromApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const person = data.results[0];
      setLoading(false);
      getUserInfos(person);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  };

  const getUserInfos = (person) => {
    const { first, last } = person.name;
    const { email, phone, nat } = person;
    const age = person.dob.age;
    const image = person.picture.large;
    const { username } = person.login;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      name: `${first} ${last}`,
      email,
      age,
      image,
      address: `${number} ${name}`,
      username: `${username}`,
      phone,
      nat,
    };
    setUserInfos(newPerson);
  };

  const setUserInfos = (newPerson) => {
    setPerson(newPerson);
    setValue(newPerson.name);
    setNationality(newPerson.nat);
  };

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      <div className="block bcg-black">
        <h1 className="header">Random User Generator</h1>
      </div>
      <div className="block">
        <div className="container">
          <img
            src={person.image || defaultImage}
            alt="random user"
            className="user-img"
          />
          <ReactCountryFlag
            id="countryFlag"
            countryCode={nationality}
            svg
            style={{
              width: "3em",
              height: "3em",
            }}
            title={nationality}
          />

          <p className="user-title">My {title} is</p>
          <p className="user-value">{value || "loading..."}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
              onFocus={handleValue}
            >
              <FaUser className="user-icons" />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
              onFocus={handleValue}
            >
              <FaEnvelopeOpen className="user-icons" />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={handleValue}
              onFocus={handleValue}
            >
              <FaCalendarTimes className="user-icons" />
            </button>
            <button
              className="icon"
              data-label="address"
              onFocus={handleValue}
              onMouseOver={handleValue}
            >
              <FaMap className="user-icons" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
              onFocus={handleValue}
            >
              <FaPhone className="user-icons" />
            </button>
            <button
              className="icon"
              data-label="username"
              onMouseOver={handleValue}
              onFocus={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getUserFromApi}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
