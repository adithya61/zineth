import axios from "axios";

const client = axios.create({
  baseURL:
    "https://sheets.googleapis.com/v4/spreadsheets/1SvJjbYuUFRNjvFT7I6osprbN49gMQNyoGXJyt2ECcFA/values/Sheet1?key=AIzaSyA_Kp4h7AQ_GQdVTCNXd8QPMvu7rKy7nVk",
});

class APIClient {
  getPage = async () => {
    try {
      const response = await client.get();
      return response.data; // Returns the entire Google Sheets API response
    } catch (error) {
      console.error("API fetch error:", error);
      return null; // Return null or empty data if there's an error
    }
  };
}

export default APIClient;
