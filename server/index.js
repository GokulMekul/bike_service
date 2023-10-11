const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const Booking = require('./models/Booking'); // Assuming 'Booking.js' is in the 'models' directory
//const adminRouter = require('./routes/admin'); 

//app.use('/admin', adminRouter); 
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');


app.use(bodyParser.json());

app.use(cors());
// MongoDB connection
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

 // Login route

// Import route files
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/Login'); // im changed here
const bookingRouter = require('./routes/bookings'); // Add this line

// ...

// Use the routes
app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('/api', bookingRouter); // Add this line

// ...


// Import your bookings route and use it

const bookingsRoute = require('./routes/bookings'); // Adjust the path as needed

// Use the bookings route
app.use('/bookings', bookingsRoute);
// ...


// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the React HTML file

app.get('/service', (req, res) => {
  res.redirect('/service')
  });

  // Define a route to handle login
app.post('/login', (req, res) => {
  // You would typically validate the login credentials here
  const { email, password } = req.body;

  // For demonstration purposes, assume a successful login
  if (email && password === 'password') {
    // Redirect to the dashboard route with the email as a URL parameter
    res.redirect(`/dashboard?email=${email}`);
  } else {
    res.status(401).send('Login failed');
  }
});



app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error canceling booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



    
app.get("/test",async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//console.log(Booking.find())

 Booking.find({})
  .then((bookings) => {

 // console.log(bookings);
  })
 .catch((error) => {
   console.error(error);
  });

  app.get("/api/bookings", async (req, res) => {
    console.log('bookings')
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  });
  
// Server-side route for updating the status
app.put('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
console.log(id);
  try {
    // Validate the input data as needed

    // Update the status in the database
    const updatedBooking = await Booking.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Send a success response with the updated booking
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
