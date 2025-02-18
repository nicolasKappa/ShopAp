# 🛒 ShopApp – E-Commerce Web Application

**ShopApp** is a fully functional e-commerce web application designed to provide users with a smooth and intuitive online shopping experience. It includes user authentication, product management, and a secure checkout process.


# Table of Contents
- [Features](#Features)
- [Technologies Used](#Technologies_Used)
- [Setup Instructions](#Setup_Instructions)
- [Contributing](#Contributing)
- [License](#license)


# Installation

1. Download and Visual Studio Code at https://visualstudio.microsoft.com/downloads/
2. Clone GitHub Repo from https://github.com/nicolasKappa/ShopApp
3. Create Free Account at https://www.mongodb.com and Download MongoDB Compass at https://www.mongodb.com/products/tools/compass
4. In App.js replace Your MongoDB Private Key to connect with database.
```bash
   const MONGODB_URI =
  'mongodb+srv://<username>:<password>@cluster0.jkcn0.mongodb.net/shop';
   ```
5. In controller/auth.js Change "Enter Your Api Key Here" With your private nodemailer key from https://sendgrid.com
```bash 
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        'Enter Your Api Key Here'
    }
  })
);
```


5. Navigate to http://localhost/flavourfinds/website/login.php
6. Register a new account on the Website or log in using an existing Testing user: John Doe with Email john.doe@example.com and Password = Password1



## 🚀 Features

- 🔐 **User Authentication** – Secure login and registration system  
- 🛍️ **Product Management** – Browse, search, and filter products  
- 🛒 **Shopping Cart** – Add, remove, and update cart items  
- 📦 **Order Tracking** – View order history and status updates  
- 🎨 **Responsive UI** – Fully optimized for different screen sizes  

## 🛠️ Technologies Used

- **Backend**: Node.js, Express,  
- **Database**: MongoDB
- **Frontend**: EJS 
- **Authentication**: session-based authentication with cookies

## 🏗️ Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/nicolasKappa/ShopApp.git
   cd ShopApp
   ``` 

   
# Backend
```bash
npm install module
```

```bash
npm install nodemailer
```


```bash
npm install --save bcryptjs```
```

# Start backend
```bash
npm start
```

# Access the Application
 - **Open your browser and go to http://localhost:3000**

## 🛠️ Contributing 

 **Contributions are welcome! To contribute:**

- **Fork the repository**
- **Create a feature branch (git checkout -b feature-name)**   
- **Commit your changes (git commit -m "Added new feature")**
- **Push to the branch (git push origin feature-name)**
- **Open a pull request**

## 📄 License

 - **This project is licensed under the MIT License. See the LICENSE file for details.**





