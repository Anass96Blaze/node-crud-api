const express = require("express");
const generateId = require("./utilities");

const app = express();
app.use(express.json());
const port = 3000;

let customers = [
  { id: "1", name: "Anass", age: 28, city: "Tanger" },
  { id: "2", name: "Walid", age: 26, city: "Rabat" },
  { id: "3", name: "Fajr", age: 17, city: "Casablanca" },
];

const addCustomer = (customer) => {
  return customer.push(customer);
};

const removeCustomer = (id) => {
  customers.filter((customer) => {
    return customer.id !== id;
  });
};

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/customerslist", (req, res) => {
  const customersList = `Customers list`;
  res.send(customersList);
});

app.post("/addcustomer/:id/:name/:age/:city", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  const age = req.params.age;
  const city = req.params.city;
  const dataCustomer = `id: ${id}
  name: ${name}
  age: ${age}
  city: ${city}`;

  res.send(dataCustomer);
});

app.put("/editcustome/:id", (req, res) => {
  res.send();
});

app.delete("/deletecustomer/:id", (req, res) => {
  res.send();
});

app.get("/customerslistjson", (req, res) => {
  // res.send(req.query);
  res.send(req.body);
});

app.get("customerslistquery", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log("The server is runing");
});
