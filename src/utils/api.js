const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function getItems() {
  return fetch(`${baseUrl}/items`, { method: "GET" }).then(checkServerResponse);
}

export function addItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkServerResponse);
}

export function deleteCard(_id) {
  return fetch(`${baseUrl}/items/${_id}`, { method: "DELETE" }).then(
    checkServerResponse
  );
}
