import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a13767e3-c997-4d2c-aa90-d418192e2fd7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a messgae <img src="src/assets/msg-icon.png" alt="" /></h3>
        <p>Feel free to reach out throught contact form or find our contact information belwow. Your feddback, questions, and suggestions are important to us as we strive to provide execeptional service to our university community.</p>
        <ul>
          <li> <img src="src/assets/mail-icon.png" alt="" />Iamosahrry@gmail.com </li>
          <li> <img src="src/assets/phone-icon.png" alt="" />+2348161264599 </li>
          <li> <img src="src/assets/location-icon.png" alt="" />77 Massachusetts Ave, Cambrifge <br /> MA 02139, United States </li>
      </ul>
      </div>
      
      <div className="contact-col second">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your messgaes here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit'>Submit now <img  src="src/assets/white-arrow.png" alt="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact