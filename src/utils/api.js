const baseUrl = "http://localhost:3001";

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
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

export function deleteCard(_id) {
  return request(`${baseUrl}/items/${_id}`, { method: "DELETE" });
}
