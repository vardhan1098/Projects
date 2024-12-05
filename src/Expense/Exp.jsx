import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import Modal from "./Components/Modal";
import ExpenseImg from '../assets/Logo.png';

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
        date: date
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
      <div
        style={{
          backgroundColor: "#2A3663",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          marginBottom: "20px",
          gap: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "40px" }}>
          <h1 style={{ textAlign: "center", fontSize: "35px" }}>
            Expense Calculator
          </h1>
          <h4 style={{ textAlign: "center", fontSize: "25px" }}> Total Price : ₹ {totalPrice.toFixed(2)}</h4>
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <input
            type="text"
            value={expensive}
            style={{
              height: "40px",
              width: "300px",
              borderRadius: "20px",
              paddingLeft: "10px",
            }}
            name="title"
            autoFocus
            placeholder="Enter an Expense"
            onChange={(e) => setExpensive(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            name="price"
            style={{
              height: "40px",
              width: "200px",
              borderRadius: "20px",
              paddingLeft: "10px",
            }}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              height: "40px",
              width: "200px",
              borderRadius: "20px",
              paddingLeft: "10px",
            }}
          />
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: isEditing ? "orange" : "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "15px",
            }}
            onClick={handleAddExpensive}
          >
            {isEditing ? "Save Expense" : "Add Expense"}
          </button>
        </div>
      </div>
      <div>
        {expList.length > 0 &&
          expList.map((list, idx) => (
            <div
              key={idx}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#FFF6E9",
                color: "black",
                display: "flex",
                alignContent: "center",
                justifyContent: "space-around",
              }}
            >
              <h2>
                {list.title.charAt(0).toUpperCase() + list.title.slice(1)}
              </h2>
              <h2>{list.price}</h2>
              <h3>Date: {list.date}</h3> {/* Display the date */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(list)}
                >
                  <FaEdit size={35} color="blue" />
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleDelete(list.id);
                  }}
                >
                  <MdDeleteOutline size={35} color="red" />
                </button>
              </div>
            </div>
          ))}
      </div>
      {expList.length > 0 ? (
        <h3>Total Price: {totalPrice}</h3>
      ) : (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h3
          style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
        >
          Please Add the Expenses.
        </h3>
        <img src={ExpenseImg} alt="" width={800}  />   
        </div>
      )}
    </>
  );
}

export default Exp;
