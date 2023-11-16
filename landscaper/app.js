//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

console.log("hello world")

alert("landscaper: user can use teeth to cut grass")

let money = 0

let cutGrass = prompt("we cut the grass")

if(cutGrass === "yes"){
    console.log(cutGrass)
    money = money + 5
    console.log(money)
}
let profit = -25
let lawnMower = prompt("landscaper: user can buy push lawnmower"
)
if(lawnMower === "if you have enough money"){
    console.log(lawnMower)
    console.log(profit)

}
let pushMow = prompt("landscaper: user can use push lawnmower to cut grass")

if(pushMow === "make $50"){
 console.log(pushMow)   
}
let profit2 = -250
let batMow= prompt("landscaper: user can buy battery-powered lawnmower")

if(batMow === "if you have enough money"){
    console.log(batMow)
    console.log(profit2)
}
let batMow2 = prompt("landscaper: user can use battery-powered lawnmower to cut grass")
let profit3 = 100

if(batMow2 === "spend the day cutting lawns"){
    console.log(batMow2)
    console.log(profit3)
}
let profit4 = -500
let team = prompt("landscaper: user can hire a team")

if(team === "if you have enough money"){
    console.log(team)
    console.log(profit4)
}

let winG = prompt("landscaper: win scenario")


if(winG === "when you have a team of starving students and $1000"){
    console.log(winG)
}