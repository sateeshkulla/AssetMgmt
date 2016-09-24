export const ADD_TODO = "ADD_TODO";

import config from "../config/application";

export function addTodo (text) {
    return {
        type: ADD_TODO,
        promise: (httpClient) => httpClient.get(`${config.apiURL}/V1/property`)
      };
}