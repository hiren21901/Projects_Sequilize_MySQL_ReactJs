import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Otpform from "./Otpform";
 
const Forgotpass = () => {
  const navigate = useNavigate();
  const [section,setsection]= useState(true);

  const [user, setUser] = useState({
    credentials: "",
  });

  let name, value;

  const handleinput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  console.log(user);


  const showToast = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/forgotPassword", user)

        .then((response) => {
          console.log(response);
          if (response.data == "Invalid UserID") {
            toast.error(response.data);
          } else {
            // toast.success("UserName add success");
            localStorage.setItem("user", response.data.otp);
            localStorage.setItem("id",response.data.message.UserID)
            setsection(false)
// navigate("/otpform");
          }
        });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.log(status, data);

        if (data.errors && data.errors.length > 0) {
          data.errors.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data);
        }
      }
    }
  };
  return (
    <>
  

      <div
        style={{
          width: "100%",
          backgroundColor: "hsl(0, 0%, 96%)",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <Header />
      </div>
      {
        section==true?(
          <section className=" position-relative">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start "
          style={{ height: "90.5vh" }}
        >
          <div className="container-fluid">
            <div
              className="row gx-lg-5 align-items-center "
              style={{
                marginLeft: "100px",
                marginRight: "50px",
                marginTop: "60px",
              }}
            >
              <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-4 fw-bold ls-tight ">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p
                  style={{ color: "hsl(217, 10%, 50.8%)" }}
                  className="text-left"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div className="col-lg-6 col-md-6 mb-5 mb-lg-0 d-flex justify-content-center">
                <div className="card" style={{ width: "380px" }}>
                  <div className="card-body py-5 px-md-5">
                    <form method="POST">
                      <div className="form-outline mb-2">
                        <label
                          className="form-label  d-flex justify-content-start"
                          htmlFor="form3Example4"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          id="form3Example4"
                          className="form-control"
                          name="credentials"
                          placeholder="Enter your UserName"
                          autoComplete="off"
                          value={user.credentials}
                          onChange={handleinput}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary  mb-4 mt-1"
                        onClick={showToast}
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        ):(
          <Otpform/>
        )
      }

     
    </>
  );
};

export default Forgotpass;
