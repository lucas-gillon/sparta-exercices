import request from "@fewlines-education/request";
import "dotenv/config";
function weatherByCity(city: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        console.log(Math.floor(data.main.temp), "°C");
      }
    },
  );
}
// leave lines below for tests to work properly
export { weatherByCity };
