let url = "https://api.genderize.io/?name="
let input = document.querySelector("input");
let btn = document.querySelector("button");
let gender = document.querySelector(".gender")
let probability = document.querySelector(".probability")
let name = document.querySelector(".name")


let showData = () => {
    let oldUrl = url
    url = url.concat(input.value)
    console.log(url);
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            name.innerText = data.name;
            gender.innerText = data.gender
            probability.innerText = data.probability * 100 + "%"
        })
        .catch(error => {
            console.log(error)
        })
    url = oldUrl
    input.value = ""
}


btn.addEventListener("click", () => {
    showData()
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        showData()
    }
})
