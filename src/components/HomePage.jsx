// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from "./Hero";
import "../css/App.css";
import SectionCard from "./sectionCard";
import Button from ".//button";
import ArticleSection from "./ArticleSection";
import Mission from "./Mission";
import Footer from "./Footer";

const pets = [
  {
    image:
      "https://www.vitadacani.org/wp-content/uploads/2023/08/Nome_sitoVert2-28.jpg",
    nameImage: "dog1.jpg",
    name: "Fido",
    age: "3 anni",
    city: "Milano",
    description: "Un cane molto amichevole e giocherellone.",
    razza: "Labrador",
  },
  {
    image:
      "https://manualstech.ams3.cdn.digitaloceanspaces.com/images/adottame/1693597486-2023-09-01-074446-DSS.jpg",
    nameImage: "cat1.jpg",
    name: "Micia",
    age: "2 anni",
    city: "Roma",
    description: "Una gatta dolcissima che ama le coccole.",
    razza: "Europeo",
  },
  {
    image:
      "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/c9/c951bfdf-d35c-4308-9148-f96f24d3edac?rule=gallery-mobile-1x-auto",
    name: "Luna",
    age: "1 mese",
    city: "Napoli",
    description: "Una gattina curiosa e vivace.",
    razza: "Siamese",
  },
  {
    image:
      "https://www.enpaparma.it/wp-content/uploads/2019/09/cucciolo-2-1024x988.jpg",
    nameImage: "dog3.jpg",
    name: "Rocky",
    age: "2 mesi",
    city: "Firenze",
    description: "Un cane coraggioso e affettuoso.",
    razza: "Golden Retriever",
  },
  {
    image:
      "https://lh3.googleusercontent.com/proxy/Qb3D8DOj5z671i86o6XmJNklLGbDzvxVE1uZskFAeaU9RoJZlUPsdptqwkgvxVUSCRxTQLXPsdIm49-1dR_wL73CFCgn9H0",
    nameImage: "cat3.jpg",
    name: "Birba",
    age: "3 anni",
    city: "Bologna",
    description: "Una gatta vivace e intelligente.",
    razza: "Europea",
  },
  {
    image:
      "https://www.giornalelavoce.it/resizer/480/-1/true/2023_11_01/396536753_666370105632521_6517157245349192235_n-1698857724654.jpeg--a_a_a__cercasi_famiglie_disposte_ad_adottare_i_cani_sequestrati_nell_allevamento_abusivo.jpeg?1698857724694",
    nameImage: "dog4.jpg",
    name: "Max",
    age: "2 anni",
    city: "Verona",
    description: "Un cucciolo di cane giocherellone.",
    razza: "Beagle",
  },
  {
    image:
      "https://www.centrotiziano.it/immagini/eventi-cat/262/retina_zoom_Tiziano_post_ENPA_febb_200207_013.jpg",
    nameImage: "cat4.jpg",
    name: "Whiskers",
    age: "4 mesi",
    city: "Palermo",
    description: "Un gatto con un carattere affabile.",
    razza: "Maine Coon",
  },
  {
    image:
      "https://img.poweredcache.net/www.quattrozampeinfamiglia.it/wp-content/uploads/2023/01/317888573_507589098065973_8796262037453209524_n.jpg?w=660&ssl=1&format=webp",
    nameImage: "dog5.jpg",
    name: "Bella",
    age: "7 anni",
    city: "Genova",
    description: "Una cagnolina elegante e amorevole.",
    razza: "Meticcio",
  },
  {
    image:
      "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=200,height=200,fit=cover/adoption/pet/picture/660bb000368f3482719666.jpeg",
    nameImage: "cat5.jpg",
    name: "Oliver",
    age: "10 anni",
    city: "Catania",
    description: "Un gatto affettuoso e giocoso.",
    razza: "British Shorthair",
  },
  {
    image:
      "https://www.comunicazioneiniziativeenpa.it/wp-content/uploads/2022/11/Chicco-di-Vicenza-...ok_.jpg",
    nameImage: "dog6.jpg",
    name: "Lucky",
    age: "2 anni",
    city: "Milano",
    description: "Un cane vivace e protettivo.",
    razza: "Meticcio",
  },
  {
    image:
      "https://www.anfipiemonte.org/wp-content/uploads/2017/05/La-Franca-18-1-624x640.jpg",
    nameImage: "cat6.jpg",
    name: "Cleo",
    age: "3 anni",
    city: "Roma",
    description: "Una gatta elegante e indipendente.",
    razza: "Sphynx",
  },
];

function HomePage() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="announce-section">
        <div className="title">
          <svg
            className="iconPet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
          <h2 className="title">I nostri annunci...</h2>
          <svg
            className="iconPet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
        </div>
        <div className="app">
          {pets.map((pet, index) => (
            <SectionCard
              key={index}
              image={pet.image}
              name={pet.name}
              age={pet.age}
              city={pet.city}
              description={pet.description}
              razza={pet.razza}
              nameImage={pet.nameImage}
            />
          ))}
        </div>
        <Button />
      </div>
      <div>
        <ArticleSection />
      </div>
      <div>
        <Mission />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
