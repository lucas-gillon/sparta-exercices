import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<void> => {
  try {
    const response = await fetch(`https://api.github.com/users/${nickname}`);
    const data = await response.json();
    if (data.message === "Not Found") {
      throw new Error("The user doesn't exist");
    } else {
      return data.repos_url;
    }
  } catch (data) {
    throw new Error("The user doesn't exist");
  }
};

export const getRepos = async (url: string): Promise<GitHub[]> => {
  const repos = [];
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    repos.push(data[i]);
  }
  // console.log(repos[0].name);
  return repos;
};

export const printRepos = async (getRepos: string[]): Promise<string[]> => {
  getRepos.forEach((index) => {
    console.log(index.name);
  });
  return getRepos;
};

// export const printRepository = () => {
//   // Code here
// };

// export const getProjectInformations = () => {
//   // Code here
// };
