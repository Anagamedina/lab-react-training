import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const greetings ={
    en:"Hello",
    fr:"Bonjour",
    de:"Haloo"
  }
 // Función para verificar si el email es válido
  const isEmailValid = () => { 
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  //REGEX 
       
  };

  // Función para verificar si la contraseña es fuerte
  const isPasswordStrong = () => {
    // Por ejemplo, puedes verificar la longitud de la contraseña
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return (regularExpression.test(password))
    // return password.length >= 8;
  };

  
  const handleNationalityChange = (e) => { 
    setNationality(e.target.value);
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          backgroundColor: isEmailValid() ? 'green' : 'red',
        }}
      />
      <br />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          backgroundColor: isPasswordStrong() ? 'green' : 'red',
        }}
      />
      <br />

      <label>Nationality:</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      <br />
 
      
      <p>
         { greetings[nationality] } {', '}
        Your email is {email}
      </p>
    </div>
  );
};

export default SignupPage;


