import axios from "axios";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "816dc7576b204cf698661ff73981d924";

const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-library-read",
  "user-read-currently-playing",
  "user-read-recently-played",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item: string) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const spotifyFetch = async (endpoint: string) => {
  const token = getTokenFromUrl();
  const localToken = localStorage.getItem("access_token");

  return axios
    .create({
      baseURL: "https://api.spotify.com/v1",
      headers: {
        Authorization: `Bearer ${token.access_token || localToken}`,
      },
    })
    .get(endpoint)
    .then((response) => response.data);
};
