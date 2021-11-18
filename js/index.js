const url = "http://localhost:3000/monsters";

fetch (url)
.then((resp) => resp.json())
.then(arrayOfMonsterObjects => {
    const monsterContainer = document.querySelector("#monster-container")
    for (let i = 0; i < arrayOfMonsterObjects.length; i++) {
        //  arrayOfMonsterObjects[i] === monsterContainer
        //  return monsterContainer
    }
});

function submitForm() {
fetch (url, {
    method: "POST", //PATCH, DELETE
    headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},

body:
{ name: string, age: number, description: string }
})
    .then((resp) => resp.json())
    .then((arra) => console.log(json));
}
    
