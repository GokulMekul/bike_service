I used Mern Technology to create a website for a bike repair shop. For the front-end, I used HTML, CSS, JavaScript, and Bootstrap. Then I developed a website using Node Express, MongoDb, and Mongoose for the backend.  
My local site is at localhost:4000. 
Admin Login User Name: john
            Email : john@gmail.com
            Password :john12345
Its a login And password to View Admin Booking

           
#  Bike Service System

My Bike Service System is a web application that allows users to book bike service appointments online. This system helps bike owners schedule and manage their service requests conveniently.

## Features

- User registration and login.
- Booking service appointments with date, bike model, and service type selection.
- Real-time updates on service status (Pending, Complete).
- Admin dashboard for managing and tracking service bookings.
- Email notifications for status updates.

## Getting Started
   Server Installation
   cd server
   npm install

   client Installation
   cd client
   cd Bike
   npm install

This will start the Node.js server on port 4000 (or the port specified in your .env file).

##Prerequistited

Node.js and npm: You need to have Node.js and npm (Node Package Manager) installed on your machine. You can download them from https://nodejs.org/.

MongoDB: The system uses MongoDB as its database. Make sure you have MongoDB installed locally or have access to a MongoDB database. You can download MongoDB from https://www.mongodb.com/try/download/community.

Git: You'll need Git to clone and manage the source code repositories. You can download Git from https://git-scm.com/.

Email.js Account: To send email notifications, you'll need an Email.js account. You can sign up for a free account at https://www.emailjs.com/.


## User (Client) Usage:

1. Homepage: When you first access the system at [http://localhost:4000](http://localhost:4000), you'll land on the homepage. From here, you can explore the available services and bike models.

2. Registration: If you are a new user, you can click on the "Register" link in the navigation menu to create an account. Provide your details, including name, email, and password, to register.

3. Login: After registering, you can log in by clicking on the "Login" link in the navigation menu. Enter your email and password to access your account.

4. Booking a Service:
   - Once logged in, you can book a service by clicking on the "Book Now" button on the service or bike model of your choice.
   - Select the date for your service.
   - Choose the specific service you want.
   - Confirm your booking.

5. Viewing Bookings: You can view your booked services on booking service Here, you'll see a list of your booked services, including their status.

## Admin (Server) Usage:

1. Admin Login: Admins can log in by accessing the admin login page at [http://localhost:4000/adminlogin](http://localhost:4000/adminlogin).

2. Admin Dashboard: Once logged in as an admin, you'll have access to the admin dashboard at [http://localhost:4000/abouta](http://localhost:4000/abouta). Here, you can view all the bookings made by users.

3. Updating Booking Status:
   - Admins can update the status of bookings from the admin dashboard.
   - Select a booking from the list and update its status to "Complete" or any other relevant status.
   - Click "Save" to update the status.

4. Viewing and Managing Bookings:
   - Admins can view and manage both pending and completed bookings.
   - Completed bookings can be canceled if needed.
5. Notifications:
   - When an admin updates the status of a booking to "Complete," an email notification is sent to the user's registered email address.
  
#Screenshots
Home Page
![Blank 2 Grids Collage](https://github.com/GokulMekul/bike_service/assets/113968152/1c963a7a-c0b2-4a7a-94a9-c647a95eb4ec) 
![Collage Maker-10-Oct-2023-10-05-PM-1432](https://github.com/GokulMekul/bike_service/assets/113968152/a02e78ac-da02-47ba-acd1-d3031fb7042b)
![Collage Maker-10-Oct-2023-10-08-PM-7032](https://github.com/GokulMekul/bike_service/assets/113968152/5c39719f-c4d8-4a84-a3be-995671335e5e)
Login & registration
![Collage Maker-10-Oct-2023-10-11-PM-6417](https://github.com/GokulMekul/bike_service/assets/113968152/6ed8d939-faed-4e61-88ae-65f637239bfd)
![Collage Maker-10-Oct-2023-10-14-PM-4403](https://github.com/GokulMekul/bike_service/assets/113968152/c7d8ca7c-baf8-4e99-b284-2ab4564ca05f)
admin login & admin Abouta
![Collage Maker-10-Oct-2023-10-15-PM-9191](https://github.com/GokulMekul/bike_service/assets/113968152/c8d7a928-0db9-4d74-9ffb-3e4053379727)
![Collage Maker-10-Oct-2023-10-17-PM-9892](https://github.com/GokulMekul/bike_service/assets/113968152/2dbe7677-4950-45dc-9ff5-a9f82b16fa80)


##technologies And Installation Used :
Express    React-icon
Node        Boostrap
Mongodb 
cors
Mongoose
React
Reactrouter
email.js 
env
