document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button1").addEventListener("click", loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById("custumer").innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = "";
      customers.forEach(customer => {
        ouput += `
            <ul>
              <li>ID: ${customer.id}</li>
              <li>Name: ${customer.name}</li>
              <li>Company: ${customer.company}</li>
              <li>Phone: ${customer.phone}</li>
            </ul>
            `;
      });

      document.getElementById("custumers").innerHTML = output;
    }
  };

  xhr.send();
}
