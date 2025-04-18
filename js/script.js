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

const user = {
    name: "Max",
    age: 12,
    hobby: "programming",
    isStudent: true
};

console.log(countProps(user));