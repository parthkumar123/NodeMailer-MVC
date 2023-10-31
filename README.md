# Node.js Email Sender with MVC Architecture

## Introduction

The Node.js Email Sender with MVC Architecture is a versatile and well-structured application that demonstrates how to use Nodemailer to send emails in a Node.js environment while adhering to the Model-View-Controller (MVC) architectural pattern. Whether you are building a contact form, a newsletter subscription system, or any other email-related functionality, this project serves as an excellent foundation for your email-sending needs.

## Key Features

- **MVC Architecture**: The project is organized using the MVC architectural pattern, which promotes clean code separation, maintainability, and scalability. The codebase is structured into three core components:

  - **Model**: Manages the data and email sending logic.
  - **View**: Handles the presentation layer for email templates and user interface.
  - **Controller**: Orchestrates communication between the model and view, handling user requests and responses.

- **Nodemailer Integration**: The project showcases how to set up and configure Nodemailer, a powerful Node.js library, for sending emails. You'll learn how to send various types of emails, including plain text, HTML, and attachments, using Nodemailer's features.

## Prerequisites

Before getting started with this project, ensure you have the following prerequisites:

- Node.js and npm installed on your system.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/parthkumar123/NodeMailer-MVC.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NodeMailer-MVC
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure your email credentials in the project.

## Usage

1. Run the application:

   ```bash
   npm run dev
   ```

2. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

3. Follow the on-screen instructions to send emails using the MVC architecture and Nodemailer.

## Configuration

To configure your email credentials, open the `development.env` file and update the following fields:

- `EMAIL_ADDRESS`: Your email address (e.g., 'your_email@gmail.com').
- `EMAIL_PASSWORD`: Your app-specific password or email account password.

## Contact

If you have any questions or need further assistance, feel free to reach out to shiyaniparth276@gmail.com.

Happy coding!