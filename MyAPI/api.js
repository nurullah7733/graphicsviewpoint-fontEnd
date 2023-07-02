export const sendContactForm = async (data) =>
  fetch("/api/contactapi", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const tApi = async (data) =>
  fetch("/api/t", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    // body: data,
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
