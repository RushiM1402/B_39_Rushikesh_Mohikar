// server.js


// ...rest of your code

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Mock function for payment
const completePayment = (userData, paymentDetails) => {
  // Implement your payment logic here
  // For now, just returning a mock response
  return { success: true, message: 'Payment completed successfully' };
};

// API endpoint for enrolling in Yoga classes
app.post('/api/enroll', (req, res) => {
  // Basic backend validations
  const { name, age, selectedBatch } = req.body;

  if (!name || !age || !selectedBatch) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Store data in the database (Assuming you have a database connection)
  // Implement your database logic here

  // Mock payment function
  const paymentResult = completePayment(req.body, { amount: 500 });

  if (paymentResult.success) {
    return res.status(200).json({ success: true, message: 'Enrollment successful' });
  } else {
    return res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
