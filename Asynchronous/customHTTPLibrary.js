function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};
// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send();
};


// APP

const http = new easyHTTP();

// Get Posts
http.get("url/to/api", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Post
http.get("url/to/api/1", function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create Data
const data = {
  title: "Custome post",
  body: "This is a custom post"
};

// Create post
http.post("url/to/api", data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update post
http.put("url/to/api/id", data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete post

http.delete("url/to/api/1", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
