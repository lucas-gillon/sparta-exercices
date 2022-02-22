type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string[], ages: number[], countries: string[], haveTraveled: boolean[]): Profile[] {
  // Code here
  const profiles = [];
  for (let i = 0; i < names.length; i++) {
    const tempObject: Profile = {
      name: names[i],
      age: ages[i],
      country: countries[i],
      haveTraveled: haveTraveled[i],
    };
    profiles.push(tempObject);
  }
  return profiles;
}
