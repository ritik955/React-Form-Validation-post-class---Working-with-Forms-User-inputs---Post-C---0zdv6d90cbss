import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

   const fnameRef = useRef(null)
   const emailRef = useRef(null)

  const [error, setError] = useState(null)
  const validateEmail = (e) => {   
    const email = emailRef.current.value
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError(null)
    } else {
      setError('Email is invalid')
    }
  }

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit = {validateEmail}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"   ref={emailRef} />
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
//         data.fname !== undefined && (
//           <div>
//           <h1>{data.fname}</h1>
//           <h2>{data.lname}</h2>
//           </div>
//         )
      }
    </div>
  )
}


export default App;
