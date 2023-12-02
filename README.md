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
