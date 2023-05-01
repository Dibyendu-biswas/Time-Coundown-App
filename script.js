const days = document.getElementById("days")
const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const h1 = document.getElementById("heading")
const couter = document.querySelector(".counter")

let s = 1000
let m = 60 * s
let hh = 60 * m
let dd = 24 * hh
const coundown = () => {
    let now = new Date();
    let date = String(now.getDate()).padStart(2, "0")
    let month = String(now.getMonth() + 1).padStart(2, "0")
    let yy = now.getFullYear()
    now = `${month}/${date}/${yy}`
    console.log(now);

    let userDate = prompt("Enter Day").padStart(2, "0")
    let userMonth = prompt("Enter Month").padStart(2, "0")
    let target = `${userMonth}/${userDate}/${yy}`

    if (now > target) {
        target = `${userMonth}/${userDate}/${yy + 1}`
    }
    const interval = setInterval(() => {
        const timer = new Date(target).getTime()
        const today = new Date().getTime()

        const distance = timer - today

        const leftDays = Math.floor(distance / dd)
        const leftHours = Math.floor((distance % dd) / hh)
        const leftMin = Math.floor((distance % hh) / m)
        const leftSec = Math.floor((distance % m) / s)

        days.innerText = leftDays
        hour.innerText = leftHours
        min.innerText = leftMin
        sec.innerText = leftSec

        if (distance < 0) {
            coundown.style.display = "none"
            h1.innerText = "times up"
            clearInterval(interval)
        }

    }, 0);
}
coundown()
