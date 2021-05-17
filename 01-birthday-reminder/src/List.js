import React from "react";

const List = (props) => {
  const { people, setPeople } = props;

  const removePerson = (e) => {
    let newPeople = people.filter((person) => person.id !== e);

    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="profile" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button
              className="removeBtn"
              onClick={() => removePerson(person.id)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
