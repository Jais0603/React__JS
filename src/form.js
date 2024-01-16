import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ email, password });
  };

  return (
    <div>
      <form>
        <label>Email Id</label>
        <input type="email"value={email} onChange={(e) => setEmail(e.target.value)}/>

        <br />
        <br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <br />
        <br/>

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      <br/>

      {submittedData && (
        <div>
          <h3> The submitted data is: </h3>
          
          <p>Your Email is: {submittedData.email}</p>
          <p>your Password is: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
