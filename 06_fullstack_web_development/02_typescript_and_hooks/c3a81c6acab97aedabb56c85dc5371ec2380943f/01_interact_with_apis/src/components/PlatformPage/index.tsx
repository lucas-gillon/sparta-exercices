import React from "react";
import { Platform } from "../../types/Platform";

const PlatformPage = (): JSX.Element => {
  return (
    <div>
      {React.useEffect(() => {
        fetch("https://videogame-api.fly.dev/platforms", { method: "GET", headers: { Accept: "application/json" } })
          .then((response) => response.json())
          .then((platformsList) => {
            platformsList.platforms.map((element: Platform) => {
              console.log(element.name);
            });
          });
      }, [])}
      patate
    </div>
  );
};

export default PlatformPage;
