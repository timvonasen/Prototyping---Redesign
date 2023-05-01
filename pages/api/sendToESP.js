import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { pumpStates } = req.body;

    try {
      const ESP8266_API_URL = "http://192.168.2.43/pumpStates";
      const espResponse = await axios.post(ESP8266_API_URL, { pumpStates });

      res.status(200).json({
        message: "Data sent to ESP8266",
        response: espResponse.data,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
