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
      const data = JSON.parse(body);
      if (error) {
        console.error(error);
      } else {
        console.log(`Weather for ${zipcode}`);
        for (let i = 0; i < data.list.length; i++) {
          const tempObject = {
            date: "",
            hour: "",
            temperature: "",
            weather: "",
          };
          const timeAndHour = data.list[i].dt_txt.split(" ");
          tempObject.hour = timeAndHour[1];
          tempObject.date = moment(timeAndHour[0]).format("DD/MM/YYYY");
          tempObject.temperature = String(data.list[i].main.temp + "°C");
          tempObject.weather = String(data.list[i].weather[0].description);
          console.log(tempObject);
        }
      }
    },
  );
}

// function weatherByLatitudeAndLongitude(latitude, longitude) {
//   // code the function here
// }

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  // weatherByLatitudeAndLongitude
};
