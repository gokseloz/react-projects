import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("groceryAll")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: " ", type: " " });

  const refInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg }); //show:show, type:type, msg:msg that is the long version which is NOT ES6
  }

  useEffect(() => {
    localStorage.setItem("groceryAll", JSON.stringify(list));
  }, [list]);

  function clearList() {
    showAlert(true, "danger", "empty list");
    setList([]);
  }

  function deleteItem(id) {
    showAlert(true, "danger", "item removed");
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("groceryAll", JSON.stringify(newList));
  }

  function editItem(id) {
    refInput.current.focus();
    setIsEditing(true);
    const editingItem = list.find((item) => item.id === id);
    setEditID(id);
    setName(editingItem.title);
  }

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Grocery List</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={refInput}
            />

            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List
              list={list}
              setList={setList}
              deleteItem={deleteItem}
              editItem={editItem}
            />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
