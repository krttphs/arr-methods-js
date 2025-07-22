const users = [
    { id: 1, name: "John", email: "john.s@gmail.com"},
    { id: 2, name: "Mary", email: "marysocute@gmail.com"},
    { id: 3, name: "Somchai", email: "yourdad@gmail.com"},
];
for (let i = 0 ; i < users.length ; i++){
    console.log(users[i].id);
}
console.log("-----------------");

for(const user of users){
    console.log(user.name);
}
console.log("-----------------");

users.forEach(user =>{
    console.log(user.email);
})
console.log("-----------------");

const userNames = users.map((user) => user.name)
console.log(userNames);
console.log("-----------------");

const products = [
    { name: "ปากกา", stock: 10},
    { name: "ดินสอ", stock: 15},
    { name: "ยางลบ", stock: 8},
    { name: "ไม้บรรทัด", stock: 12},
];

const lowStock = products.filter((product) => product.stock < 10) //filter คือค่าย่อยภายใน array นั้นๆ

console.log(lowStock);
console.log("-----------------");

const cartItems = [
    { name: "เสื้อยืด", price: 199, quantity: 4},
    { name: "กางเกง", price: 250, quantity: 8},
    { name: "รองเท้า", price: 620, quantity: 2},
    { name: "หมวก", price: 79, quantity: 12},
]

// for...of
let totalPrice = 0;

for (const item of cartItems){
    totalPrice += item.price*item.quantity;
}
console.log(totalPrice);
console.log("-----------------");

//reduce
totalPrice = cartItems.reduce((total, currentItem) => {
    return total + (currentItem.price * currentItem.quantity);
}, 16);

console.log(`มูลค่ารวมทั้งหมด ${totalPrice} บาท`);
console.log("-----------------");

//find
const findResult = cartItems.find((item) => item.name === "หมวก");
console.log(findResult);
console.log("-----------------");

const players = [
    { name: "Messi", scores: 177},
    { name: "Ronaldo", scores: 190},
    { name: "Krit", scores: 10000000},
    { name: "Neymar", scores: 142},
    { name: "Somchai", scores: 255},
];

//แสดงชื่อของ player ที่ได้ score มากที่สุด เรียงจากมากไปน้อย
const highScorePlayers = players.filter(player => player.scores > 150);
console.log(highScorePlayers);
console.log("-----------------");

const sortHighScores = highScorePlayers.sort((a,b) => b.scores - a.scores);
console.log(sortHighScores);
console.log("-----------------");

const playersHighScoreName = sortHighScores.map((player) => player.name);
console.log(playersHighScoreName);
console.log("-----------------");

const topScores = players
.sort((a,b) => b.scores - a.scores)
.map(player => player.name)
console.log(topScores);
console.log("-----------------");

const someResult = players.some(player => player.scores > 200);
console.log(someResult);
console.log("-----------------");

const everyResult = players.every(player => player.scores > 200);
console.log(everyResult);
