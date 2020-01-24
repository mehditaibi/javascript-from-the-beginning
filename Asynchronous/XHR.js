document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true); // data.txt is local file

  // On Load
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // optional used for spinners/ loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  console.log("READYSTATE: ", xhr.readyState);

  //   xhr.onreadystatechange = function() {
  //     console.log("READYSTATE: ", xhr.readyState);

  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };
  //   console.log("READYSTATE: ", xhr.readyState);

  xhr.onerror = function() {
    console.log("request error...");
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200 ok
  // 403 forbidden
  // 404 not found
}
