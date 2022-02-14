import request from "@fewlines-education/request";
import "dotenv/config";
import * as moment from "moment";
type TempObject = {
  date: "";
  hour: "";
  temperature: "";
  weather: "";
};
function weatherByZipcode(zipcode: string, countryCode: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        for (let i = 0; i < data.list.length; i++) {
          const tempObject = {
            date: "",
            hour: "",
            temperature: "",
            weather: "",
          };
          tempObject.date = String(moment().format("DD/MM/YYYY"));
          tempObject.hour = String(moment().format("hh:mm:ss"));
          tempObject.temperature = String(data.list[i].main.temp + "°C");
          tempObject.weather = String(data.list[i].weather[0].description);
          console.log(tempObject);
        }
      }
    },
  );
}
weatherByZipcode("59000", "fr");
// function weatherByLatitudeAndLongitude(latitude, longitude) {
//   // code the function here
// }

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  // weatherByLatitudeAndLongitude
};
