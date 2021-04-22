import React, { useRef } from "react";
import Router from "next/router";
import styles from '../styles/Login.module.css';
import axios from 'axios';

function Home() {

  const userNameInput = useRef();
  const passwordInput = useRef();

  const login = async () => {
    const username = userNameInput.current.value;
    const password = passwordInput.current.value;
    const response = await axios.post("/api/login", { username, password });
    console.log(response)
    if (response.status===200){
      return Router.push("/main");
    }
  }

  return (
    <div>
      <div className={styles.loginForm}>
        <div className={styles.loginFormIn}>
          <h2 className="text-center">Log in</h2>       
          <div className="form-group">
              <input type="text" className={`form-control ${styles.formControl}`} placeholder="Username" required="required" ref={userNameInput}/>
          </div>
          <div className="form-group">
              <input type="password" className={`form-control ${styles.formControl}`} placeholder="Password" required="required" ref={passwordInput}/>
          </div>
          <div className="form-group">
              <input type="button" className={`btn btn-primary btn-block ${styles.Btn}`} value="Log in" onClick={login} />
          </div>
          <div className="clearfix">
              <a href="#" className="float-right">Forgot Password?</a>
          </div>   
        </div>  
      </div>   
    </div>
  )
}

Home.NoLayout = true;
export default Home;
