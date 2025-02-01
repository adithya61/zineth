import { useState, useEffect } from "react";
import APIClient from "../services/api-client";

const client = new APIClient();

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getPage();
        if (response && response.values) {
          setData(response.values); // Store all rows from the sheet
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useData;
