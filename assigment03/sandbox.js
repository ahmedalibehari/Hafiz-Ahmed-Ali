let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 52000, quantity: 3 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
        { id: 4, color: "white", price: 54000, quantity: 4 },
        { id: 5, color: "blue", price: 51000, quantity: 2 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Excellent Product",
          comments: "Ali: I absolutely love it!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "orange", price: 48000, quantity: 6 },
        { id: 3, color: "green", price: 55000, quantity: 8 },
        { id: 4, color: "purple", price: 53000, quantity: 3 },
        { id: 5, color: "gold", price: 59000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair: It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Best Mobile",
          comments: "Ali: Perfect for my needs!",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Headphones",
      variations: [
        { id: 1, color: "black", price: 3000, quantity: 15 },
        { id: 2, color: "white", price: 3500, quantity: 10 },
        { id: 3, color: "red", price: 3200, quantity: 5 },
        { id: 4, color: "blue", price: 3400, quantity: 8 },
        { id: 5, color: "green", price: 3100, quantity: 12 },
      ],
      reviews: [
        {
          id: 1,
          user: "Samira",
          rating: 4.2,
          title: "Great Sound",
          comments: "Samira: The sound quality is impressive.",
          date: "10-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Tariq",
          rating: 4.0,
          title: "Good for the Price",
          comments: "Tariq: Comfortable and decent sound.",
          date: "09-02-2021",
          status: true,
        },
        {
          id: 3,
          user: "Zara",
          rating: 4.7,
          title: "Love Them!",
          comments: "Zara: Best headphones for my workouts.",
          date: "08-02-2021",
          status: true,
        },
      ],
    },
  ];
  
  // Exercise 1
  // Get all product titles and display them in array format.
  // Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
  // Try with function or without function
  
  let productTitles = [];
  for(let i=0; i < products.length; i++) {
      productTitles.push(products[i].title)
  }
  
  console.log(productTitles);
  
  let product = {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 52000, quantity: 3 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
      { id: 4, color: "white", price: 54000, quantity: 4 },
      { id: 5, color: "blue", price: 51000, quantity: 2 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Excellent Product",
        comments: "Ali: I absolutely love it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  };
  // Product <id> = avgRating(totalRating)
  // Product 101 = 4.3 (3)
  
  function countReviews(product) {
    return product.reviews.length;
  }
  
  function avgRating(product) {
    let sum = 0;
  
    for (let i = 0; i < product.reviews.length; i++) {
      sum += product.reviews[i].rating;
    }
  
    let avg = sum / product.reviews.length;
  
    return avg;
  }
  
  function display(product) {
    console.log(
      "Product" +
        product.id +
        "=" +
        " " +
        avgRating(product) +
        "(" +
        countReviews(product) +
        ")"
    );
  }
  
  for (let i = 0; i < products.length; i++) {
    display(products[i]);
  }
//   excercies 1
  let productTitle = [];
  for (let i = 0; i < products.Title; i++){
    productTitle.push(products[i].lenth);
  }
//   excercies 2
  let productUniquecolor = [];
  for (let i = 0; i < products.lenth; i++){
   for (let j = 0; j < products[i].variations.length; j++){
    if(!productsUniquecolor.includes(products[i].variations[j].color)){
      productUniquecolor.push(products[i].variations[j].color)
    }    
   }
}
console.log(productUniquecolor);


//   excercies 3
function totalquantity (products){
  for (let i= 0; i products.length; i++){
    let sum = 0;
    for (let j=0; j < products[i].variations.length; j++){
      sum += products[i].variations[j].quantity;
    }
    console.log(sum);
    
  }
}
totalquantity(products)
// excercies 4
function Review (products){
  let array = [];
  for (let i=0; i < products.length; i++){
    for (let j=0; j < products[i].reviews.length; j++){
      if (products[i].reviews[j].status){
        array.push(products[i].reviews[j]);
        console.log(array);
        
      }
    }
  }
}
Review(products);
// exceries 5
let maxPrice =0;
for (let i =0; i < products.length; i++){
  for (let j =0; j < products[i].variations.length; j++){
    let price= products[i].variations[j].price;
    if (price > maxPrice){
      maxPrice = price;
      maxPrice = products[i].variations[j]
      }
    }
  }
console.log(maxPrice);


// excercies 6

function avgRating(products){
  for (let i= 0; i < product.length; i++){
    let sum = 0;
    for (let j = 0; j < products[i].reviews.length; j++){
      sum += products[i].reviews[j].rating;
    }
    let avgRating = sum / products[i].reviews.length;
    console.log(avgRating);
  }
}
avgRating(products);


// excercies 7
function findproduct(products){
  for (let i =0; i < products.length; i++){
    if (products[i].id == 101 || products[i].id == 102 || products[i].id == 103){
      console.log(products[i]);
    }
  }
}
findproduct(products);
  // for (let i = 0; i < products.length; i++) {
  //   let sum = 0;
  
  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     sum += products[i].reviews[j].rating;
  //   }
  
  //   let avgRating = sum / products[i].reviews.length;
  
  //   console.log(
  //     "Product" +
  //       products[i].id +
  //       " = " +
  //       avgRating +
  //       "(" +
  //       products[i].reviews.length +
  //       ")"
  //   );
  // }
  
  // -------------------------------------------------------------
  // function calc(a, b, op) {
  //   if (op === "+") {
  //     return a + b;
  //   }
  
  //   if (op === "-") {
  //     return a - b;
  //   }
  
  //   if (op === "*") {
  //     return a * b;
  //   }
  
  //   if (op === "/") {
  //     return a / b;
  //   }
  // }
  
  // let sum = calc(2, 4, "+");
  // let sub = calc(8, 4, "-");
  // let mul = calc(2, 4, "*");
  // let devide = calc(16, 4, "/");
  
  // console.log(sum);
  // console.log(sub);
  // console.log(mul);
  // console.log(devide);
  
  // ------------------------------------------------
  // function sum(a, b) {
  //   // let c = a + b;
  //   // return c
  //   return a + b;
  // }
  
  // console.log(sum(2, 4))
  // let a = sum(3, 4);
  // console.log(a);
  
  // function sum(a, b) {
  // //   let a = 10;
  // //   let b = 20;
  //   let c = a + b;
  //   console.log(c);
  // }
  
  // function sub(a, b) {
  //   let c = a - b;
  //   console.log(c);
  // }
  
  // sum(2, 3)
  // sum(4, 5)
  // sum(6, 6)
  // sum(5, 6)
  // sub(4, 2)
  
  // function sum() {
  //   let a = 10;
  //   let b = 20;
  //   let c = a + b;
  //   console.log(c);
  // }
  
  // sum()
  // sum()
  // sum()
  
  // function display() {
  //   console.log("Hello world");
  //   console.log("Hello world");
  //   console.log("Hello world");
  //   console.log("Hello world");
  //   console.log("Hello world");
  // }
  
  // display()
  // display()
  // display()
  
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")
  
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")
  // console.log("Hello world")