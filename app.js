const Ciudades = [
  {
    Ciudad: "Madrid",
    Monumento: "Puerta Alcalá",
    Comida: "Cocido Madrileño",
    foto: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/07/11093212/shutterstock_296841734-1.jpg",
  },
  {
    Ciudad: "Barcelona",
    Monumento: "La Sagrada familia",
    Comida : "CalÇot",
    foto: "https://i.redd.it/gqehvcd89xv41.jpg",
  },
  {
    Ciudad: "León",
    Monumento: "Catedral de León",
    Comida : "Cecina",
    foto: "https://hablemosdereligion.com/wp-content/uploads/2019/12/catedral-de-leon-2.jpg",
  },
  {
    Ciudad: "Córdoba",
    Monumento: "Mezquita de Córdoba",
    Comida : "Salmorejo",
    foto:"https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/09/18/img_lbernaus_20190509-115907_imagenes_lv_terceros_istock-467787426_4_6_2135837196.jpg" ,
  },
  {
    Ciudad: "San Sebastián",
    Monumento: "El peine de los vientos",
    Comida : "Tortilla de Bacalao",
    foto: "https://www.sansebastianturismoa.eus/images/tematicos-2/peine-del-viento-temporal.jpg"
  },
 {
  Ciudad: "Toledo",
    Monumento: "Alcazar de Toledo",
    Comida : "Carcamusas",
    foto: "https://a.cdn-hotels.com/gdcs/production87/d1847/ee667fe0-708b-11e8-99fe-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
},
];
const main = document.querySelector("main");
const printCiudades = () => {
  main.innerHTML=""

  const section = document.createElement("section");
  for (const Ciudad of Ciudades) {
    section.innerHTML += ` 
    
    <article>
       <h3>${Ciudad.Ciudad}</h3>
      <h4>Gran Monumento: ${Ciudad.Monumento} </h4>
      <h5>Comida Típica: ${Ciudad.Comida}</h5>
    <img src=${Ciudad.foto} alt=${Ciudad.foto}/>
  </article>`
  }
  main.appendChild(section)
};
const Ciudadeslink = document.querySelector("#Ciudades");
Ciudadeslink.addEventListener("click", () => {
  printCiudades();
});

