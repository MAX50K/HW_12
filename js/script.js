const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}
// 2
function countProps(obj) {
    return Object.keys(obj).length;
}

const user2 = {
    name: "Max",
    age: 12,
    hobby: "programming",
    isStudent: true
};

console.log(countProps(user2));
// 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

const employeesTasks = {
    Pam: 29,
    David: 35,
    Colt: 1,
    Shelly: 99
};

console.log(findBestEmployee(employeesTasks)); 
// 4
function countTotalSalary(employees) {
    return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

const salaries = {
    Willow: 100,
    Byron: 150,
    Sandy: 80
};

console.log(countTotalSalary(salaries));
// 5
function getAllPropValues(arr, prop) {
    const values = [];

    for (const object of arr) {
        if (prop in object) {
            values.push(object[prop]);
        }
    }

    return values;
}

const products = [
    { name: "Power", price: 1300, quantity: 4 },
    { name: "Gear", price: 2700, quantity: 3 },
    { name: "Super", price: 400, quantity: 7 },
    { name: "Gadget", price: 1200, quantity: 9 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));

// 6
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
    return 0;
}

const products2 = [
    { name: "Mutations", price: 1300, quantity: 4 },
    { name: "Hyper", price: 2700, quantity: 3 },
    { name: "", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 }
];

console.log(calculateTotalPrice(products2, "Radar"));  
console.log(calculateTotalPrice(products2, "Droid"));  
console.log(calculateTotalPrice(products2, "Scanner"));
console.log(calculateTotalPrice(products2, "Tablet"));

