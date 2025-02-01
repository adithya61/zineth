import axios from "axios";

const client = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/1SvJjbYuUFRNjvFT7I6osprbN49gMQNyoGXJyt2ECcFA/values/Sheet1?key=${
    import.meta.env.VITE_API_KEY
  }`,
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
