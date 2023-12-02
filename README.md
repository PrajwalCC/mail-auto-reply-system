# Automated Email Reply System
## Overview
The Automated Email Reply System is a Node.js application that streamlines email management by automating responses to incoming emails while maintaining organized labeling and inbox management within Gmail.

## Key Features
### Authorization Flow
The system initiates the authorization flow for the Gmail API, generating an authorization URL. Users are prompted to visit the URL, granting consent and generating the required access tokens.

### Label Management
The application checks for the existence of a custom label named 'AUTO_REPLIED_MAILS' in the user's Gmail account. If the label doesn't exist, it creates it to mark emails that have been automatically replied to.

### Email Processing and Reply
The system fetches unread emails from the user's inbox, extracts necessary details like the sender's email and subject, and constructs personalized replies. It sends these replies back to the respective senders.

## Libraries and Technologies Used

- **Node.js**: The backend of the application is built using Node.js, providing a runtime environment for executing JavaScript code server-side.

- **Google APIs (googleapis)**: The application leverages the googleapis library to interact with various Google APIs, particularly the Gmail API for handling email-related operations such as fetching emails, replying to them, and managing labels.

- **@google-cloud/local-auth**: This library facilitates the authentication process, enabling the app to authenticate with Google APIs locally.

- **Node-cron**: Node-cron is used to schedule and run periodic tasks. In this case, it's employed to periodically check for new emails in the inbox and respond to them automatically.

- **FS (File System) Module**: The FS module in Node.js is used for file system operations, such as reading and writing files. It's used here to manage and store token information required for Gmail API authentication.

- **Readline**: This module provides an interface for reading data from a Readable stream (like the user's input from the terminal). It's used in the authorization flow to prompt the user to enter the authorization code.

## Prerequisites

Before running this application, ensure that you have the following prerequisites installed and set up:

- Node.js (version 14 or higher)
- Gmail API credentials (credentials.json) from the Google Cloud Console

## Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/PrajwalCC/mail-auto-reply-system.git
    ```

2. **Install dependencies**

    Navigate to the cloned repository directory:

    ```bash
    cd mail-auto-reply-system
    ```

    Install the required dependencies:

    ```bash
    npm install node-cron googleapis @google-cloud/local-auth readline
    ```

3. **Obtain Gmail API credentials**

    - Go to the Google Cloud Console.
    - Create a new project or select an existing project.
    - Enable the Gmail API for your project.
    - Create credentials (OAuth client ID) for a Web/Desktop application.
    - Download the credentials JSON file and save it as credentials.json in the project directory.

4. **Run the application**

    Start the application by running the following command:

    ```bash
    node index.js
    ```

    The application will prompt you to authorize it by visiting a URL in your web browser. Follow the authorization flow and enter the generated authorization code in the terminal from the browser URL bar. Below is a sample URL, where YOUR_CODE is the token you need to put in the terminal.

     http://localhost:3000/callback?code={YOUR_AUTH_CODE}&scope=https://www.googleapis.com/auth/gmail.modify
    
## Usage

1. **Authorization:**

    - Access the provided authorization URL in your browser to grant access to the Gmail API.
    - Upon accessing the URL, follow the prompts to provide consent and obtain an authorization code.

2. **Label Creation:**

    If the 'AUTO_REPLIED_MAILS' label doesn't exist in your Gmail account, the application will create it automatically.

3. **Automated Email Replies:**

    The application will periodically check your inbox for new emails and send automated replies based on predefined message templates.

4. **Getting Started:**

    To begin using the application, follow the setup instructions in the README and run the necessary commands.




