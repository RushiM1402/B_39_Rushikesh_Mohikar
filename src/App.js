// AdmissionForm.js

import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    selectedBatch: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Perform basic frontend validations here

    // Call the backend API to submit the form data
    const response = await fetch('http://localhost:3001/api/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result); // Handle the response from the backend

    if (result.success) {
      // Simulate payment
      const paymentResponse = await completePayment(formData);
      console.log(paymentResponse); // Handle the payment response
    }
  };

  // Simulated payment function
  const completePayment = async (formData) => {
    // Implement your payment logic here (this is just a placeholder)
    console.log('Processing payment...');
    return { success: true, message: 'Payment completed successfully' };
  };

  return (
    <div style={styles.container}>
      <h2>Yoga Class Admission Form</h2>
      <form style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="name" onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Age:</label>
        <input type="number" name="age" onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Select Batch:</label>
        <select name="selectedBatch" onChange={handleChange} style={styles.input}>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>

        {/* Payment Section */}
        <label style={styles.label}>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          onChange={handleChange}
          placeholder="Enter card number"
          style={styles.input}
        />

        <button type="button" onClick={handleSubmit} style={styles.button}>
          Submit and Pay
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    padding: '5px',
    margin: '5px 0',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AdmissionForm;
