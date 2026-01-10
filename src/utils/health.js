// Local Modules
import api from "./api.js";

async function health() {
  const start = performance.now();
  const response = await api("GET", "i/health", false);
  const duration = performance.now() - start;
  if (response.status === 200 && response.data.isSuccess === true) {
    if (duration < 3000) {
      const min = 2.5;
      const max = 5.5;
      const delay = Math.random() * (max - min) + min * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export default health;
