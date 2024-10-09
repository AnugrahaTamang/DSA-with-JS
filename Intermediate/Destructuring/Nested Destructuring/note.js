// const songs = [
//   {name: "Lucky You", singer: "Joyner", duration: 4.34},
//   {name: "Just Like You", singer: "NF", duration: 3.23},
//   {name: "Humble", singer: "Kendrick Lamar", duration: 2.33},
//   {name: "Old Town Road", singer: "Lil Nas X", duration: 1.43},
//   {name: "Cold Shoulder", singer: "Central Cee", duration: 5.23},
// ];
// // console.log(songs);
// // const [, , {singer}] = songs;
// // console.log(singer);
// // const [, , {singer: s}] = songs;
// // console.log(s);
// // const [, , , {singer}] = songs;
// // console.log(singer);

// const [, , , , {name, singer, duration}] = songs;
// console.log(name);
// console.log(duration);
// console.log(singer);

const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "kathmandu",
      country: "Nepal",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Phone", price: 800},
    {id: 3, name: "Tablet", price: 500},
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};
// console.log(data);

//Extracting data using object destructuring

const {
  user: {
    name,
    age,
    address: {city, country},
    hobbies,
    scores: {math, science, history},
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;
console.log(name);
console.log(product1);

console.log(emailNotifications);
