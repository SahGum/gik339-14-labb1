// Hämta checkboxen och lagra den i en variabel
const checkbox = document.getElementsByClassName("checkbox")[0];

// Hämta textfälten som en samling och lagra den i en variabel
const textfields = document.querySelectorAll(".textfield");

// Hämta knappen och lagra den i en variabel
const button = document.querySelector("button");

// Hämta div-elementet och lagra det i en variabel
const lastDiv = document.getElementById("lastDiv");

// Eventlyssnare för textfälten
function handleInputEvent(e) {
  const nameAttribute = e.target.name;

  // Om name-attributet är "content", skriv ut värdet till div-elementet
  if (nameAttribute === "content") {
    console.log("Input-event: Target:", e.target);
    console.log("Input-event: Innehåll:", e.target.value);

    lastDiv.innerHTML = e.target.value;
  }
}

// Eventlyssnare för checkboxen
checkbox.addEventListener("change", function () {
  const colorInput = document.getElementById("color");
  const color = colorInput.value;

  // Ändra bakgrundsfärgen på div-elementet
  lastDiv.style.backgroundColor = color;
});

// Koppla eventlyssnare för varje textfält
textfields.forEach(function (textfield) {
  textfield.addEventListener("input", handleInputEvent);
  textfield.addEventListener("blur", handleInputEvent);
});

// Eventlyssnare för knappen
button.addEventListener("click", function () {
  // Ta bort div-elementet
  lastDiv.remove();
});
