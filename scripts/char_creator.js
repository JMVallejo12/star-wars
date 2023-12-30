// haciendo fetch a el json
const skillcontainer = document.getElementById("skill-container")
fetch(json_url)
.then(response => response.json())
.then(data => {

    data.skills.forEach((skill)=>{
        skillcontainer.innerHTML += `
        
        <div class="skill-card">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        </div>
        ` 
        
    })
})
.catch(error=>console.log("error con la carga de habilidades"))

// creando el nuevo jugador

const char_name = document.getElementById("name")
const char_race = document.getElementById("race")
const char_gender = document.getElementById("gender")
const char_age = document.getElementById("age")
const char_facc = document.getElementById("facc")
const char_job = document.getElementById("job")
const char_bg = document.getElementById("background")
const char_planet = document.getElementById("planet")


function create_player(){

    fetch(json_url)
    .then(response => response.json())
    .then(data => {

        const new_char = {
            "name" : char_name,
            "race": char_race,
            "gender": char_gender,
            "age": char_age,
        }

    })

}
