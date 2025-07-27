//task 1

const menuItems = [
  "burger",
  "pizza",
  "sushi",
  "ramen",
  "tacos",
  "fries",
  "burrito",
  "salad",
  "sandwich",
  "pasta",
];

function createOrder(name, deliveryStatus) {
  // Random food
  const randomIndex = Math.floor(Math.random() * menuItems.length);
  const randomFood = menuItems[randomIndex];

  // Capitalize name+food
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const capitalizedFood =
    randomFood.charAt(0).toUpperCase() + randomFood.slice(1);

  // delivery time
  let deliveryTime;

  if (deliveryStatus === "on time") {
    deliveryTime = "30 minutes";
  } else if (deliveryStatus === "late") {
    deliveryTime = "45 minutes";
  } else {
    deliveryTime = "an unknown time";
  }

  // return message
  return `Hi ${capitalizedName}! Your ${capitalizedFood} will arrive in ${deliveryTime}!`;
}

console.log(createOrder("luca", "on time"));
console.log(createOrder("tina", "late"));
console.log(createOrder("milo", "unknown"));

//task 2

const usedPasswords = ["password123!", "helloWorld!", "qwerty&"];

function checkPasswordStrength(password) {
  // check password against used
  if (usedPasswords.includes(password)) {
    return "This password has been used before. Please choose a new one.";
  }

  // Symbol counting
  let symbolCount = 0;

  if (password.includes("&")) {
    symbolCount++;
  }
  if (password.includes("%")) {
    symbolCount++;
  }
  if (password.includes("!")) {
    symbolCount++;
  }
  if (password.includes("?")) {
    symbolCount++;
  }

  // Too weak
  if (password.length < 6 || symbolCount < 1) {
    return "Too weak";
  }

  // strong
  if (password.length > 8 && symbolCount >= 2) {
    return "Strong";
  }

  // medium
  return "Medium";
}

checkPasswordStrength("abc");
checkPasswordStrength("password123!");
checkPasswordStrength("longpassword?");
checkPasswordStrength("%myNewPass!");
