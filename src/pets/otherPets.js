const otherPets = [
    {
      image: "https://assets.annuncianimali.it/image/5185ed37-18f6-40b3-893b-0230a0f9a52d/image_wm/image.webp",
      nameImage: "dog8.jpg",
      name: "Shadow",
      age: "5 anni",
      city: "Torino",
      description: "Un cane leale e protettivo.",
      razza: "Pastore Tedesco",
      type:"Cane",
      size:"Taglia grande",
      owner: {
        name: "Francesco Grigio",
        phone: "320-876-5432",
        email: "francesco.grigio@example.com"
      }
    },
    {
      image: "https://animaliadozionetoscana.wordpress.com/wp-content/uploads/2014/09/2014-08-24-18-41-12.jpg",
      nameImage: "cat7.jpg",
      name: "Simba",
      age: "8 anni",
      city: "Bari",
      description: "Un gatto tranquillo e affettuoso.",
      razza: "Persiano",
      type:"Gatto",
      owner: {
        name: "Giovanna Viola",
        phone: "327-654-3211",
        email: "giovanna.viola@example.com"
      }
    },
    {
      image: "https://www.rescuebouledoguefranceseitalia.it/wp-content/uploads/2023/07/12-e1688748715482.jpg",
      nameImage: "dog9.jpg",
      name: "Duke",
      age: "1 anno",
      city: "Torino",
      description: "Un cucciolo energico e giocoso.",
      razza: "Bulldog Francese",
      type:"Cane",
      size:"Taglia piccola",
      owner: {
        name: "Alessandro Nero",
        phone: "322-543-7890",
        email: "alessandro.nero@example.com"
      }
    },
    {
      image: "https://i.pinimg.com/736x/d2/e8/66/d2e866fb22a3705c19dd4ad4b25b2fdc.jpg",
      nameImage: "cat8.jpg",
      name: "Tigro",
      age: "6 mesi",
      city: "Firenze",
      description: "Un gattino curioso e avventuroso.",
      razza: "Bengala",
      type:"Gatto",
      owner: {
        name: "Lorenzo Blu",
        phone: "321-987-6544",
        email: "lorenzo.blu@example.com"
      }
    },
    {
      image: "https://manualstech.ams3.cdn.digitaloceanspaces.com/images/adottame/images/613b4cddbcd81_2021-09-10-121733-WhatsApp%20Image%202021-09-10%20at%2013.19.13.thumb.jpeg",
      nameImage: "dog10.jpg",
      name: "Bruno",
      age: "4 anni",
      city: "Roma",
      description: "Un cane affettuoso e obbediente.",
      razza: "Rottweiler",
      type:"Cane",
      size:"Taglia grande",
      owner: {
        name: "Marta Rossi",
        phone: "324-567-8902",
        email: "marta.rossi@example.com"
      }
    },
    {
      image: "https://citynews-trevisotoday.stgy.ovh/~media/11252408296321/278205968_5705196749494525_7244948194860916275_n-2.jpg",
      nameImage: "cat9.jpg",
      name: "Oreo",
      age: "3 anni",
      city: "Napoli",
      description: "Un gatto socievole e affettuoso.",
      razza: "Siberiano",
      type:"Gatto",
      owner: {
        name: "Carla Verde",
        phone: "315-789-6544",
        email: "carla.verde@example.com"
      }
    },
    {
      image: "https://www.animaleamico.com/public/image/photo_an/506771/2150439/FT_146831911.jpg",
      nameImage: "dog11.jpg",
      name: "Rex",
      age: "6 mesi",
      city: "Milano",
      description: "Un cane fedele e coraggioso.",
      razza: "Dobermann",
      type:"Cane",
      size:"Taglia grande",
      owner: {
        name: "Marco Bianchi",
        phone: "316-547-8391",
        email: "marco.bianchi@example.com"
      }
    },
    {
      image: "https://assets.annuncianimali.it/image/38dfcf3d-e144-4da3-aa64-d1a33a007cec/image_wm/image.webp",
      nameImage: "cat10.jpg",
      name: "Lily",
      age: "5 anni",
      city: "Verona",
      description: "Una gatta dolce e coccolona.",
      razza: "Ragdoll",
      type:"Gatto",
      owner: {
        name: "Simona Gialli",
        phone: "318-765-4322",
        email: "simona.gialli@example.com"
      }
    },
    {
        image: "https://lh6.googleusercontent.com/proxy/0E6FKW5DT7DrExG7Phdu9RUqNjoM4ZDtiIFkTMAHeOcDbctJeIz-_9OueLvEy6uXigP9LgyH7VDZ8DAkiJiuiG6nQEABG7pB7BJV43sQ1FQ",
        nameImage: "dog12.jpg",
        name: "Buddy",
        age: "3 anni",
        city: "Cagliari",
        description: "Un cane affettuoso e vivace.",
        razza: "Border Collie",
        type:"Cane",
        size:"Taglia media",
        owner: {
          name: "Paolo Rossi",
          phone: "327-654-3212",
          email: "paolo.rossi@example.com"
        }
      },
      {
        image: "https://manualstech.ams3.cdn.digitaloceanspaces.com/images/adottame/1695921549-2023-09-28-051909-WhatsApp%20Image%202023-09-12%20at%2011.56.39%20(2).jpeg",
        nameImage: "cat11.jpg",
        name: "Milo",
        age: "2 anni",
        city: "Trieste",
        description: "Un gatto dolce e giocoso.",
        razza: "British Shorthair",
        type:"Gatto",
        owner: {
          name: "Elena Bianchi",
          phone: "329-678-1235",
          email: "elena.bianchi@example.com"
        }
      },
      {
        image: "https://i.pinimg.com/originals/5d/b7/d4/5db7d4d2435015f14abdf5f903106079.jpg",
        nameImage: "dog13.jpg",
        name: "Charlie",
        age: "1 anno",
        city: "Perugia",
        description: "Un cucciolo energico e affettuoso.",
        razza: "Cocker Spaniel",
        type:"Cane",
        size:"Taglia piccola",
        owner: {
          name: "Giovanni Verde",
          phone: "312-456-7891",
          email: "giovanni.verde@example.com"
        }
      }
    ];
  export default otherPets