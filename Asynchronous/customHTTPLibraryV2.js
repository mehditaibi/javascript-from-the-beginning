class EasyHTTP {
  // Make an HTTP GET Request
  get() {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => resolve("Resource Deleted"))
        .catch(err => reject(err));
    });
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
