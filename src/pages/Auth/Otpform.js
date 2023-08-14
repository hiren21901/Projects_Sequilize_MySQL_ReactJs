import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Newpass from './Newpass';

const Otpform = () => {
  const navigate = useNavigate();
  const [section,setsection]= useState(true);

  const [Otp, setOtp] = useState("");
  const [genotp, setgenotp] = useState();

  useEffect(() => {
    const data = localStorage.getItem("user");
    console.log(data);
    if (data) {
      setgenotp(data);
    }
  }, []);

  const sendotp = () => {
    if (genotp == Otp) {
        setsection(true)
    } else {
      toast.error("Invalid Otp");
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
                    {/* <form> */}
                    <div className="form-outline mb-2">
                      <p>{genotp}</p>
                      <label
                        className="form-label  d-flex justify-content-start"
                        htmlFor="form3Example4"
                      >
                        One Time Password
                      </label>
                      <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        name="otp"
                        maxLength={4}
                        placeholder="Enter your O.T.P"
                        autoComplete="off"
                        value={Otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary  mb-4 mt-1"
                      onClick={sendotp}
                    >
                      submit
                    </button>

                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
        ):(
          <Newpass/>
        )}
    </>
  );
};

export default Otpform;
