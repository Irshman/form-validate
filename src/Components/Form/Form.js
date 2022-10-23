import React, { useRef, useState } from 'react';
import './Form.scss';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [secondNameDirty, setSecondNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState("Empty name:");
  const [secondNameError, setSecondNameError] = useState("Empty second name:");
  const [emailError, setEmailError] = useState("Invalid email");
  const [passwordError, setPasswordError] = useState("Invalid password");

  function onChangeName(event) {
    setFirstName(event.target.value)
    if(event.target.value === '') {
      setNameError("Empty name")
    } else {
      setNameError("")
    }
  }

  function onChangeSecondName(event) {
    setSecondName(event.target.value)
    if(event.target.value === '') {
      setSecondNameError("Empty second name:")
    } else {
      setSecondNameError("")
    }
  }

  function onChangeEmail(event) {
    setEmail(event.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
    const rp  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!rp.test(String(event.target.value))) {
      setPasswordError("Invalid password")
    } else {
      setPasswordError("")
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
        case "secondName":
          setSecondNameDirty(true);
          break;
        case "email":
          setEmailDirty(true);
          break;
        case "password":
          setPasswordDirty(true);
          break;
      default:
        break;
    }
  }

  return (
    <div className='content'>
      <h1 className='title'>Create account</h1>
      <form className='form'>
        <label className= "form__label">
          {(nameDirty && nameError) && <span className='form__info'>{nameError}</span>}
          <input
            name='name'
            className='form__input'
            placeholder='First name:'
            type='text'
            value={firstName}
            onChange={onChangeName}
            onBlur={blurHandler}
          />
        </label>
        <label className= "form__label">
        {(secondNameDirty) && <span className='form__info'>{secondNameError}</span>}
          <input
            name='secondName'
            className='form__input'
            placeholder='Second name:'
            type='text'
            value={secondName}
            onChange={onChangeSecondName}
            onBlur={blurHandler}
          />
        </label>
        <label className= "form__label">
        {(emailDirty && emailError) && <span className='form__info'>{emailError}</span>}
          <input
            name='email'
            className='form__input'
            placeholder='Email:'
            type='email'
            value={email}
            onChange={onChangeEmail}
            onBlur={blurHandler}
          />
        </label>
        <label className= "form__label">
        {(passwordDirty && passwordError) && <span className='form__info'>{passwordError}</span>}
          <input
            name='password'
            className='form__input'
            placeholder='Password:'
            type='password'
            value={password}
            onChange={onChangePassword}
            onBlur={blurHandler}
          />
        </label>
        <input className='form__btn' type='submit' value='Sign Up' />
      </form>
    </div>
  );
};

export default Form;
