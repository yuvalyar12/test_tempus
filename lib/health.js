// lib/health.js

import healthData from '../data/filtered_health_analysis.json';

export async function sendHealthDataToLambda() {
  console.log("Sending health data to Lambda...");

  try {
    const response = await fetch('https://sazlhtbr90.execute-api.us-east-1.amazonaws.com/TempusHealthHandler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(healthData),
    });

    const result = await response.json();
    console.log("Lambda response:", result);
    return result;
  } catch (err) {
    console.error("Lambda error:", err);
  }
}
