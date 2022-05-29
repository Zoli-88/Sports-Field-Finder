import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Nav } from "../../../../components/Nav";
import { Footer } from "../../../HomePage/Footer/Footer";
import {
  FaCoffee,
  FaToilet,
  FaParking,
  FaShower,
  FaWifi,
  FaHome,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";
import { ImGlass2 } from "react-icons/im";
import { Map } from "../../../Map/Map";
import { WeatherApi } from "../../WeatherApi/WeatherApi";
import { useAuthContext } from "../../../Auth/Auth.context";
import { Loading } from "../../../Loading/Loading";
import { Link } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { BsFillClockFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";

export function BasketballDetails() {
  const { user, token } = useAuthContext();
  const { basketBallId } = useParams();
  const [basketBallDetails, setBasketballFieldDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [confirmationInfoModal, setConfirmationInfoModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3005/basketball/${basketBallId}`)
      .then((res) => res.json())
      .then((data) => setBasketballFieldDetails(data));
  }, [basketBallId]);

  async function addToFavorites(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/favorites`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
        name: basketBallDetails.name,
        images: basketBallDetails.images,
        phone: basketBallDetails.phone,
      }),
    }).then((res) => res.json());

    setOpenModal(false);
    setConfirmationInfoModal(true);
  }

  if (!basketBallDetails) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <header className="detailsHeaderContainer">
        <h1 className="detailsTitle">{basketBallDetails.name}</h1>

        <div className="addToFavoritesAndBackButtonContainer">
          <Link to="/sports/basketball">
            <button className="addToFavoritesButton">Back</button>
          </Link>
          {user && (
            <button
              className="addToFavoritesButton"
              onClick={() => setOpenModal(true)}
            >
              Add To Favorites
            </button>
          )}
        </div>
      </header>
      <div className="detailsWrapper">
        <div className="detailsContainer">
          <div>
            <img
              src={basketBallDetails.images}
              alt={`Poster for ${basketBallDetails.name}`}
            ></img>
          </div>

          <div>
            {
              <Map
                latitude={basketBallDetails.latitude}
                longitude={basketBallDetails.longitude}
                name={basketBallDetails.name}
              ></Map>
            }
          </div>

          <div>
            <WeatherApi />
          </div>

          <div>
            <p className="detailsSubTitle">Details</p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <FcInfo className="descriptionIcons" /> Description:{" "}
              </span>
              {basketBallDetails.description}
            </p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <BsFillClockFill className="descriptionIcons descriptionIconsClock" />{" "}
                Hours:{" "}
              </span>
              {basketBallDetails.hours}
            </p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <FaHome className="descriptionIcons descriptionIconsHome" />{" "}
                Address:{" "}
              </span>
              {basketBallDetails.address}
            </p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <AiOutlineDollar className="descriptionIcons descriptionIconsPrice" />{" "}
                Prices:{" "}
              </span>
              {basketBallDetails.price}
            </p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <FaPhoneSquareAlt className="descriptionIcons descriptionIconsPhone" />{" "}
                Phone:{" "}
              </span>
              {basketBallDetails.phone}
            </p>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                <FaEnvelope className="descriptionIcons descriptionIconsEmail" />{" "}
                Email:{" "}
              </span>
              {basketBallDetails.email}
            </p>
          </div>

          <div>
            <p className="facilitiesSubTitle">Facilities</p>
            <div className="facilitiesContainer">
              <ul>
                <li>
                  <FaParking />
                  Parking
                </li>
                <li>
                  <FaToilet />
                  WC
                </li>
                <li>
                  <FaShower />
                  Showers
                </li>
              </ul>
              <ul>
                <li>
                  <FaCoffee />
                  Terrace
                </li>
                <li>
                  <ImGlass2 />
                  Bar
                </li>
                <li>
                  <FaWifi />
                  WiFi
                </li>
              </ul>
            </div>
            <p className="detailsParagraphs">
              <span className="spanDetailsParagraphs">
                Full list of facilities:{" "}
              </span>
              {basketBallDetails.facilities}
            </p>
          </div>

          {openModal && (
            <div className="modalBoxContainer">
              <div className="modalBackground">
                <div>
                  <p>Are you sure you want to add this item to your list?</p>
                </div>
                <div className="modalButtonsContainer">
                  {user && <button onClick={addToFavorites}>Confirm</button>}
                  <button onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {confirmationInfoModal && (
            <div className="modalBoxContainer">
              <div className="modalBackground">
                <div>
                  <p>The selected item was added to your list.</p>
                </div>
                <div className="modalButtonsContainer">
                  {user && (
                    <button onClick={() => setConfirmationInfoModal(false)}>
                      Ok
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
