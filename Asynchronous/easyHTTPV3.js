class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });

    const resData = await response.json();
    return resData;
  }
}

// Make an HTTP POST Request

// App

const http = new EasyHTTP();

// Get Users
http
  .get("link/to/api")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: "Mehdi",
  username: "Mehdi",
  email: "myemail@superemail.com"
};

// Create user
http
  .post("link/to/api", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update user
http
  .put("link/to/api/1", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// delete user
http
  .delete("link/to/api/1")
  .then(data => console.log(data))
  .catch(err => console.log(err));
