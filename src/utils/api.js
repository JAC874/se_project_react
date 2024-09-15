const baseUrl = "http://localhost:3001";
import { getToken } from "./token";

export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(checkServerResponse);
}

export function getItems() {
  return request(`${baseUrl}/items`, { method: "GET" });
}

export function addItems({ name, imageUrl, weather }) {
  const token = getToken();
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

export function deleteCard(_id) {
  const token = getToken();
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getCurrentUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
}

export function updateCurrentUser(data, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      avatar: data.avatar,
    }),
  })
    .then(checkServerResponse)
    .then((response) => {
      console.log("API Response after update:", response); // Log the response
      return response; // Ensure the data is returned correctly
    });
}
