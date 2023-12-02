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

- **Node-cron**: Node-cron is used to schedule and run periodic tasks. In this case, it's employed to periodically check for new emails in the inbox and respond to them automatically.

- **FS (File System) Module**: The FS module in Node.js is used for file system operations, such as reading and writing files. It's used here to manage and store token information required for Gmail API authentication.

- **Readline**: This module provides an interface for reading data from a Readable stream (like the user's input from the terminal). It's used in the authorization flow to prompt the user to enter the authorization code.

- **@google-cloud/local-auth**: This library facilitates the authentication process, enabling the app to authenticate with Google APIs locally.
