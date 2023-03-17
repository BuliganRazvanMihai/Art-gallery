import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import { Link } from "react-router-dom";
import router, { useRouter } from "next/router";
import Navbar from "../../components/Navbar/navbar";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import Services from "../../components/Services/services";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Team from "../../components/Team/team";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
// import Link from "next/link";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  // let navigate = useNavigate();

  const redirect = "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      router.push(redirect);
    }
  }, [router, redirect, userInfo]);

  return (
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div>
          <form className='form' onSubmit={submitHandler}>
            <div>
              <h1>Sign In</h1>
            </div>
            <div>
              <label htmlFor='email'>Email address</label>
              <input
    type='email'
    id='email'
    placeholder='Enter email'
    required
    onChange={(e) => setEmail(e.target.value)}
    />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
    type='password'
    id='password'
    placeholder='Enter password'
    required
    onChange={(e) => setPassword(e.target.value)}
    />
            </div>
            <div>
              <label />
              <button className='primary' type='submit'>
                Sign In
              </button>
            </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </form>
        </div>
        <Footer />
      </LightTheme>

  );
};

export default Signin;
