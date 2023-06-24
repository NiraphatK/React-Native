const SITE_NAME = "Information Technology"
const BASE_URL = "https://it.tni.ac.th"
const COLOR_THEME = "blue"
const ALLOW_SIGNUP = true

console.log("Welcome to " + SITE_NAME)

let languages = ["Javascirpt", "Python", "Ruby", "Java", "PHP"]
for (let i in languages){
    let url = BASE_URL + "lang/" + languages[i].toLocaleLowerCase()
    console.log(`- ${languages[i]} programming (${url})`)
}

console.log("Footer")

let footer = ["About","Privacy"]
for (let i in footer){
    let url = BASE_URL + ' ' + footer[i].toLocaleLowerCase()
    console.log(`- ${footer[i]} (${url})`)
}

if (ALLOW_SIGNUP){
    console.log("[Sign up for new settle]")
}

console.log(`© ${new Date().getFullYear()} ${SITE_NAME}`)