// Local Modules
import api from "./api.js";

function heartbeat() {
  try {
    api("POST", "i/heartbeat");
  } catch (error) {
    console.error(error?.message || "Failed to beat your Heart!");
  }
}

export default heartbeat;
