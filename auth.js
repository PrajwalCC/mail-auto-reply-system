const fs = require('fs');
const { google } = require('googleapis');
const readline = require('readline');
const TOKEN_PATH = 'token.json';
const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const { client_secret, client_id, redirect_uris } = credentials.installed;

// Creating an OAuth2 client for Google API authorization
const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
);

// Scopes required for Gmail API access
const SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];

// Handles Gmail API authorization flow:
// Generates an authorization URL, prompts user consent, exchanges code for access tokens, and saves tokens to TOKEN_PATH.
const authorize = async () => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
        prompt: 'consent',
    });

    console.log('Authorize this app by visiting this URL:', authUrl);
    
    // Creating an interface for user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const code = await new Promise((resolve) => {
        rl.question('Enter the authorization code here: ', (code) => {
            rl.close();
            resolve(code);
        });
    });

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    console.log('Token stored to', TOKEN_PATH);
}

// Loads previously stored tokens from the TOKEN_PATH.
// If tokens are not available or invalid, initiates the authorization flow.
exports.loadToken = async () => {
    try {
        const token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
    } catch (err) {
        // console.error(err);
        await authorize();
    }
}

exports.gmail = google.gmail({ version: 'v1', auth: oAuth2Client });