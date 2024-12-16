import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import Modal from "./Components/Modal";
import ExpenseImg from '../assets/Logo.png';
import "./Exp.css"; // Separate CSS file for better structure

function Exp() {
  const [expensive, setExpensive] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [expList, setExpList] = useState(() => {
    const savedItem = localStorage.getItem("exp");
    return savedItem ? JSON.parse(savedItem) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem("exp", JSON.stringify(expList));
  }, [expList]);

  const handleAddExpensive = () => {
    if (!currentUser) {
      setIsModalOpen(true);
      return;
    }

    if (expensive.trim() === "" || amount <= 0) {
      alert("Please Add the Expenses || Amount");
    } else {
      let newExpensive = {
        id: new Date().getTime(),
        title: expensive,
        price: amount,
        date: date,
      };
      if (isEditing) {
        handleSaveEdit(newExpensive);
      } else {
        setExpList((prevExp) => [...prevExp, newExpensive]);
        toast.success("Expense is Added..", { autoClose: 1000 });
        console.log("getting tracker...", newExpensive);
      }
      setExpensive("");
      setAmount(0);
      setDate(new Date().toISOString().split("T")[0]);
      setIsEditing(false);
      setCurrentId(null);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to Delete This expense?")) {
      setExpList((prevCart) => prevCart.filter((item) => item.id !== id));
      toast.error("❌ It Expense is Deleted..", { autoClose: 1000 });
    }
  };

  const handleSaveEdit = (selectedItem) => {
    setExpList((prevExp) =>
      prevExp.map((item) =>
        item.id === currentId ? { ...selectedItem } : item
      )
    );
  };

  useEffect(() => {
    document.querySelector("input[name='title']").focus();
  }, [isEditing]);

  const totalPrice = expList.reduce((acc, item) => acc + item.price, 0);

  const handleEdit = (item) => {
    setExpensive(item.title);
    setAmount(item.price);
    setDate(item.date);
    setIsEditing(true);
    setCurrentId(item.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const clearExpenses = () => {
    setExpList([]);
  };

  return (
    <>
      <NavBar clearExpenses={clearExpenses} />
      <ToastContainer />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div className="header-container">
        <div className="header-content">
          <h1>Expense Calculator</h1>
          <h4>Total Price : ₹ {totalPrice.toFixed(2)}</h4>
        </div>
        <div className="form-container">
          <input
            type="text"
            value={expensive}
            className="form-input"
            name="title"
            placeholder="Enter an Expense"
            onChange={(e) => setExpensive(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            className="form-input"
            name="price"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <input
            type="date"
            value={date}
            className="form-input"
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className={`form-button ${isEditing ? "edit-button" : "add-button"}`}
            onClick={handleAddExpensive}
          >
            {isEditing ? "Save Expense" : "Add Expense"}
          </button>
        </div>
      </div>
      <div className="expenses-container">
        {expList.length > 0 ? (
          expList.map((list, idx) => (
            <div key={idx} className="expense-item">
              <h2>{list.title.charAt(0).toUpperCase() + list.title.slice(1)}</h2>
              <h2>₹ {list.price}</h2>
              <h3>Date: {list.date}</h3>
              <div className="action-buttons">
                <FaEdit size={25} color="blue" onClick={() => handleEdit(list)} />
                <MdDeleteOutline
                  size={25}
                  color="red"
                  onClick={() => handleDelete(list.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="empty-expenses">
            <h3>Please Add the Expenses.</h3>
            <img src={ExpenseImg} alt="No Expenses" className="empty-img" />
          </div>
        )}
      </div>
    </>
  );
}

export default Exp;
