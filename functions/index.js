/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Define a route
app.get('/api/someendpoint', (req, res) => {
  // You can access sensitive information securely here
  const apiKey = functions.config().yourapi.key;
  // Your API logic here
  res.json({ apiKey });
});

// Deploy Express app as a Firebase Function
export const storage = getStorage(app);
export const db = getFirestore(app);

exports.api = functions.https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
