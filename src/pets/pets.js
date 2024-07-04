const pets = [
  {
    image: "https://www.vitadacani.org/wp-content/uploads/2023/08/Nome_sitoVert2-28.jpg",
    nameImage: "dog1.jpg",
    name: "Fido",
    age: "3 anni",
    city: "Milano",
    description: "Un cane molto amichevole e giocherellone.",
    razza: "Labrador",
    owner: {
      name: "Mario Rossi",
      phone: "3665364606",
      email: "mario.rossi@example.com"
    }
  },
  {
    image: "https://manualstech.ams3.cdn.digitaloceanspaces.com/images/adottame/1693597486-2023-09-01-074446-DSS.jpg",
    nameImage: "cat1.jpg",
    name: "Micia",
    age: "2 anni",
    city: "Roma",
    description: "Una gatta dolcissima che ama le coccole.",
    razza: "Europeo",
    owner: {
      name: "Luca Bianchi",
      phone: "321-654-9870",
      email: "luca.bianchi@example.com"
    }
  },
  {
    image: "https://images.sbito.it/api/v1/sbt-ads-images-pro/images/c9/c951bfdf-d35c-4308-9148-f96f24d3edac?rule=gallery-mobile-1x-auto",
    nameImage: "cat2.jpg",
    name: "Luna",
    age: "1 mese",
    city: "Napoli",
    description: "Una gattina curiosa e vivace.",
    razza: "Siamese",
    owner: {
      name: "Giulia Verdi",
      phone: "312-456-7890",
      email: "giulia.verdi@example.com"
    }
  },
  {
    image: "https://www.enpaparma.it/wp-content/uploads/2019/09/cucciolo-2-1024x988.jpg",
    nameImage: "dog3.jpg",
    name: "Rocky",
    age: "2 mesi",
    city: "Firenze",
    description: "Un cane coraggioso e affettuoso.",
    razza: "Golden Retriever",
    owner: {
      name: "Alessandro Neri",
      phone: "324-567-8901",
      email: "alessandro.neri@example.com"
    }
  },
  {
    image: "https://lh3.googleusercontent.com/proxy/Qb3D8DOj5z671i86o6XmJNklLGbDzvxVE1uZskFAeaU9RoJZlUPsdptqwkgvxVUSCRxTQLXPsdIm49-1dR_wL73CFCgn9H0",
    nameImage: "cat3.jpg",
    name: "Birba",
    age: "3 anni",
    city: "Bologna",
    description: "Una gatta vivace e intelligente.",
    razza: "Europea",
    owner: {
      name: "Martina Gialli",
      phone: "320-123-4567",
      email: "martina.gialli@example.com"
    }
  },
  {
    image: "https://www.giornalelavoce.it/resizer/480/-1/true/2023_11_01/396536753_666370105632521_6517157245349192235_n-1698857724654.jpeg--a_a_a__cercasi_famiglie_disposte_ad_adottare_i_cani_sequestrati_nell_allevamento_abusivo.jpeg?1698857724694",
    nameImage: "dog4.jpg",
    name: "Max",
    age: "2 anni",
    city: "Verona",
    description: "Un cucciolo di cane giocherellone.",
    razza: "Beagle",
    owner: {
      name: "Paolo Blu",
      phone: "329-987-6543",
      email: "paolo.blu@example.com"
    }
  },
  {
    image: "https://www.centrotiziano.it/immagini/eventi-cat/262/retina_zoom_Tiziano_post_ENPA_febb_200207_013.jpg",
    nameImage: "cat4.jpg",
    name: "Whiskers",
    age: "4 mesi",
    city: "Palermo",
    description: "Un gatto con un carattere affabile.",
    razza: "Maine Coon",
    owner: {
      name: "Anna Rosa",
      phone: "318-765-4321",
      email: "anna.rosa@example.com"
    }
  },
  {
    image: "https://img.poweredcache.net/www.quattrozampeinfamiglia.it/wp-content/uploads/2023/01/317888573_507589098065973_8796262037453209524_n.jpg?w=660&ssl=1&format=webp",
    nameImage: "dog5.jpg",
    name: "Bella",
    age: "7 anni",
    city: "Genova",
    description: "Una cagnolina elegante e amorevole.",
    razza: "Meticcio",
    owner: {
      name: "Giorgio Verde",
      phone: "327-654-3210",
      email: "giorgio.verde@example.com"
    }
  },
  {
    image: "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=200,height=200,fit=cover/adoption/pet/picture/660bb000368f3482719666.jpeg",
    nameImage: "cat5.jpg",
    name: "Oliver",
    age: "10 anni",
    city: "Catania",
    description: "Un gatto affettuoso e giocoso.",
    razza: "British Shorthair",
    owner: {
      name: "Roberta Gialla",
      phone: "316-547-8390",
      email: "roberta.gialla@example.com"
    }
  },
  {
    image: "https://www.comunicazioneiniziativeenpa.it/wp-content/uploads/2022/11/Chicco-di-Vicenza-...ok_.jpg",
    nameImage: "dog6.jpg",
    name: "Lucky",
    age: "2 anni",
    city: "Milano",
    description: "Un cane vivace e protettivo.",
    razza: "Meticcio",
    owner: {
      name: "Federico Rosso",
      phone: "311-876-5432",
      email: "federico.rosso@example.com"
    }
  },
  {
    image: "https://www.anfipiemonte.org/wp-content/uploads/2017/05/La-Franca-18-1-624x640.jpg",
    nameImage: "cat6.jpg",
    name: "Cleo",
    age: "3 anni",
    city: "Roma",
    description: "Una gatta elegante e indipendente.",
    razza: "Sphynx",
    owner: {
      name: "Elena Viola",
      phone: "329-678-1234",
      email: "elena.viola@example.com"
    }
  },
  {
    image: "https://inregalo.net/wp-content/uploads/2017/12/regalo-golden-retriever-399x500.jpg",
    nameImage: "dog7.jpg",
    name: "Marilù",
    age: "2 anni",
    city: "Palermo",
    description: "Un giovane cane tranquillo e affettuoso.",
    razza: "Golden Retriever",
    owner: {
      name: "Riccardo Nero",
      phone: "315-789-6543",
      email: "riccardo.nero@example.com"
    }
  }
];


export default pets;