// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.
const LOCAL_API_URL = "http://localhost:8080/Property";
const API_PREFIX = "/api";

const headContent = {
  title: "My Gluestick App",
  titleTemplate: "%s | Gluestick Application",
  meta: [
    {name: "description", content: "Gluestick application"}
  ]
};

const config = {
  development: {
    assetPath: "http://localhost:8888/assets",
    head: headContent,
    apiURL: LOCAL_API_URL + API_PREFIX,
    proxies: [
              {
                path: API_PREFIX,
                destination: LOCAL_API_URL || LOCAL_API_URL,
                options: {
                  xfwd: true,
                  changeOrigin: true
                }
              }
    ],
    infiniteScrollBatchSize: 50,
    messageCloseDelayInMilliSeconds: 1500,
  },
};

export default (config["development"]);

