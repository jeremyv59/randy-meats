import axios from "axios";

const API_ENDPOINT = "http://localhost:5000";

export async function GetFewRecipes() {
  try {
    const response = await axios("http://localhost:5000/api");
    return response;
  } catch (error) {
    alert(error);
  }
}
