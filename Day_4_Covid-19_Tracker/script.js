let NewConfirmed = document.getElementById("NewConfirmed");
const NewDeaths = document.getElementById("NewDeaths");
const NewRecovered = document.getElementById("NewRecovered");
const TotalConfirmed = document.getElementById("TotalConfirmed");
const TotalRecovered = document.getElementById("TotalDeaths");
const TotalDeaths = document.getElementById("TotalRecovered");

const table = document.getElementById("table");

async function loadApi() {
  await fetch("https://api.covid19api.com/summary")
    .then((data) => data.json())
    .then((data) => {
      NewConfirmed.textContent = data.Global.NewConfirmed.toLocaleString();

      NewDeaths.textContent = data.Global.NewDeaths.toLocaleString();
      NewRecovered.textContent = data.Global.NewRecovered.toLocaleString();
      TotalDeaths.textContent = data.Global.TotalDeaths.toLocaleString();
      TotalConfirmed.textContent = data.Global.TotalConfirmed.toLocaleString();
      TotalRecovered.textContent = data.Global.TotalRecovered.toLocaleString();
      console.log(data);

      //Random Background Color
      NewDeaths.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;
      NewConfirmed.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;
      NewRecovered.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;
      TotalDeaths.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;
      TotalConfirmed.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;
      TotalRecovered.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )})`;

      //Create the table
      for (let i = 0; i < data.Countries.length; i++) {
        let newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = new Date(
          data.Countries[i].Date
        ).toLocaleDateString();
        newRow.insertCell(1).innerHTML = data.Countries[i].Country;
        newRow.insertCell(2).innerHTML = data.Countries[i].NewConfirmed;
        newRow.insertCell(3).innerHTML = data.Countries[i].NewDeaths;

        
      }
    })
    .catch((error) => error);
}

loadApi();
