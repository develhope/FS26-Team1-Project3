import { useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/OtherSectionCard.css";
import logoImage from "../assets/logo-senza-background.png";
import otherPetsData from "../pets/otherPets";
import FormBackground from "./FormBackground";
import useWishlist from "../pets/useWishlist";
import Footer from "./Footer";

function OtherSectionCard() {
  const [otherPets, setOtherPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [animalSize, setAnimalSize] = useState("");
  const [breedInput, setBreedInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [animalNotFound, setAnimalNotFound] = useState(false);

  const navigate = useNavigate();

  const handleHomepageNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setOtherPets(otherPetsData);
    setFilteredPets(otherPetsData);
  }, []);

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
  };

  const handleAnimalSizeChange = (event) => {
    setAnimalSize(event.target.value);
  };

  const handleBreedInputChange = (event) => {
    setBreedInput(event.target.value);
  };

  const { isWish, handleWishlist } = useWishlist();

  const handleCityInputChange = (event) => {
    setCityInput(event.target.value);
  };

  useEffect(() => {
    const filtered = otherPets.filter((pet) => {
      return (
        (animalType === "" || pet.type === animalType) &&
        (animalSize === "" || pet.size === animalSize) &&
        (breedInput === "" ||
          pet.razza.toLowerCase().includes(breedInput.toLowerCase())) &&
        (cityInput === "" ||
          pet.city.toLowerCase().includes(cityInput.toLowerCase()))
      );
    });

    setFilteredPets(filtered);
    setAnimalNotFound(filtered.length === 0);
  }, [animalType, animalSize, breedInput, cityInput, otherPets]);

  const handleWhatsappClickOther = (phone) => {
    const whatsappUrl = `https://wa.me/${phone}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <div className="containerAnnunci">
        <FormBackground />
        <nav className="navAnnunci">
          <div className="logoNav">
            <img className="logoNav" src={logoImage} alt="FurFind Logo" />
          </div>

          <div className="contSelect">
            <div className="textSelect"></div>
            <select
              className="selectAnnunci"
              value={animalType}
              onChange={handleAnimalTypeChange}
            >
              <option value="">Tutti gli animali</option>
              <option value="Cane">Cane</option>
              <option value="Gatto">Gatto</option>
            </select>
          </div>
          <div className="contSelect">
            <div className="textSelect"></div>
            <select
              className="selectAnnunci"
              value={animalSize}
              onChange={handleAnimalSizeChange}
            >
              <option value="">Tutte le taglie</option>
              <option value="Taglia piccola">Taglia piccola</option>
              <option value="Taglia media">Taglia media</option>
              <option value="Taglia grande">Taglia grande</option>
            </select>
          </div>
          <div>
            <input
              className="formAnnunci"
              type="text"
              placeholder="Inserisci Razza"
              value={breedInput}
              onChange={handleBreedInputChange}
            />
          </div>
          <div>
            <input
              className="formAnnunci"
              type="text"
              placeholder="Inserisci città"
              value={cityInput}
              onChange={handleCityInputChange}
            />
          </div>
          <Link className="homelink" to="/" onClick={handleHomepageNavigate}>
            Home
          </Link>
        </nav>

        {filteredPets.length === 0 && animalNotFound && (
          <div className="animaleNonTrovato">Animale non trovato!</div>
        )}

        <div className="otherCard">
          {filteredPets.map(
            (
              { image, name, age, city, description, razza, nameImage, owner },
              index,
              id
            ) => (
              <div key={index}>
                <div className="containerOtherCard">
                  <div className="nomeImmagine">
                    <img className="immaginiPet" src={image} alt={nameImage} />
                    <div className="nomiPet">
                      <svg
                        className="iconPet"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                      </svg>
                      <h3> {name} </h3>
                      <svg
                        className="iconPet"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="descrizioniCard">
                    <div className="posizione">
                      <svg
                        className="iconPosizione"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      {city}
                    </div>
                    <div className="scritte">
                      <b>Età:</b> {age}
                    </div>
                    <div className="scritte">
                      <b>Razza:</b> {razza}
                    </div>
                    <div className="scritte">
                      <b>Descrizione:</b> {description}
                    </div>
                  </div>
                  <div className="righeContatti">
                    <div>
                      <b>Nome proprietario:</b> {owner.name}
                    </div>
                    <div>
                      <b>Telefono:</b> {owner.phone}
                    </div>
                    <div>
                      <b>Email:</b> {owner.email}
                    </div>
                    <div className="iconeContatti">
                      <svg
                        className="iconAnnunci cuoreAnnunci"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill={isWish(index) ? "#7b2cbf" : "none"}
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          handleWishlist(index);
                        }}
                      >
                        <path
                          d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                          stroke=""
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className="iconAnnunci whatsapp"
                        width="30px"
                        height="30px"
                        fill="#7b2cbf"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        onClick={() => handleWhatsappClickOther(owner.phone)}
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
export default OtherSectionCard;
