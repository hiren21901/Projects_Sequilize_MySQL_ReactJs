  import React,{useState} from 'react'
import Header from './Header'
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Newpass = () => {
    const navigate= useNavigate()
    const [Username,setUsername] = useState('');
    const [Username1,setUsername1] = useState('');
    


    const sendotp = () => {
       navigate("/");
       toast.success('SignUp Successful...please login!');
          };
  return (
    <>
    <head>
      <title>login</title>
    </head>
    
    <div style={{width:"100%",backgroundColor:"hsl(0, 0%, 96%)",position:"absolute",zIndex:"1"}}>
    <Header/>
    </div>
        
  <section className=" position-relative" >
 
    <div className="px-4 py-5 px-md-5 text-center text-lg-start " style={{height:"90.5vh"}}>
      <div className="container-fluid">
        <div className="row gx-lg-5 align-items-center " style={{marginLeft:"100px",marginRight:"50px",marginTop:"60px"}}>
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-4 fw-bold ls-tight ">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>
            <p style={{ color: "hsl(217, 10%, 50.8%)", }} className='text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </div>
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0 d-flex justify-content-center">
            <div className="card" style={{width:"380px"}}>
              <div className="card-body py-5 px-md-5">
                {/* <form> */}
                  <div className="form-outline mb-2">
                  <label className="form-label  d-flex justify-content-start" htmlFor="form3Example4">
                      New Password           
                       </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      name='Username'
                        placeholder='Enter your New Password'
                        autoComplete='off'
                        value={Username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-2">
                  <label className="form-label  d-flex justify-content-start" htmlFor="form3Example4">
                      confirm Password           
                       </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      name='confirmpassword'
                        placeholder='Enter your confirm Password'
                        autoComplete='off'
                        value={Username1}
                        onChange={(e)=> setUsername1(e.target.value)}
                    />
                  </div>
                 
                  
                  <button
                    type="submit"
                    className="btn btn-primary  mb-4 mt-1" onClick={sendotp}
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
    


</>

    
  )
}

export default Newpass