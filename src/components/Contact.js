import React, { useState } from 'react';
import { checkField, validateEmail } from '../utils/helpers';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, subject, and message
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'subject') {
        setSubject(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the subject is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !subject) {
        setErrorMessage('Email or subject is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
      }
      if (!checkField(message)) {
        setErrorMessage(
          `Please fill out the message form`
        );
        return;
      }
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setSubject('');
      setMessage('');
      setEmail('');
    };
  
    return (
      <div>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={subject}
            name="subject"
            onChange={handleInputChange}
            type="text"
            placeholder="subject"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Write your message here"
          />
          <div className="submitDiv">
          <button type="button" className="submitBtn" onClick={handleFormSubmit}>Submit</button>
          </div>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }

export default Contact;