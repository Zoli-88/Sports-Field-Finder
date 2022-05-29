import { Nav } from "../../components/Nav";
import { Footer } from "../HomePage/Footer/Footer";
import { BodyMassIndexCalculator } from "./BodyMassIndexCalculator/BodyMassIndexCalculator";
import { useAuthContext } from "../Auth/Auth.context";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loading } from "../Loading/Loading";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

export function MyProfile() {
  const { user, token } = useAuthContext();
  const { userId } = useParams();
  const [favorites, setFavorites] = useState(null);

  const [changeFirstName, setChangeFirstName] = useState(null);
  const [changeLastName, setChangeLastName] = useState(null);

  const [usersFirstName, setUsersFirstName] = useState(user.firstName);
  const [usersLastName, setUsersLastName] = useState(user.lastName);
  const [showEdit, setShowEdit] = useState(false);

  //const [deleteOpenModal, setDeleteOpenModal] = useState(false);
  //const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);

  const [confirmationInfoModal, setConfirmationInfoModal] = useState(false);
  const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");

    const updatedUser = JSON.parse(data);

    setUsersFirstName(updatedUser.firstName);
    setUsersLastName(updatedUser.lastName);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3005/favorites?userId=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [token, userId, user]);

  function revealEditInputs() {
    setShowEdit(true);
  }

  function handleOpenModal(e) {
    e.preventDefault();
    setOpenPersonalInfoModal(true);
  }

  function handlefnInputChange(e) {
    setChangeFirstName(e.target.value);
  }

  function handlelnInputChange(e) {
    setChangeLastName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3005/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        firstName: changeFirstName,
        lastName: changeLastName,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setUsersFirstName(changeFirstName);
    setUsersLastName(changeLastName);
    setShowEdit(false);
    setOpenPersonalInfoModal(false);
    setConfirmationInfoModal(true);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        firstName: changeFirstName,
        id: user.id,
        lastName: changeLastName,
      })
    );
  }

  async function openDeleteModal(favorites, item) {
    const newList = favorites.filter((element) => element.id !== item.id);

    await fetch(`http://localhost:3005/favorites/${item.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: userId,
        name: item.name,
        images: item.images,
        phone: item.phone,
        id: item.id,
      }),
    });
    setFavorites(newList);
  }

  if (!favorites) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <div className="myProfileContainer">
        <div className="personalInformationContainer">
          <div>
            <CgProfile />
          </div>
          <h2 className="personalInformationTitle">
            Personal Information
            <span>
              <button onClick={revealEditInputs} className="editButton">
                <BsPencilFill />
              </button>
            </span>
          </h2>
          <p>
            <span className="firstAndLastNameTitle">First Name:</span>
            <span className="firstAndLastNameValue"> {usersFirstName}</span>
          </p>
          <p>
            <span className="firstAndLastNameTitle">Last Name:</span>
            <span className="firstAndLastNameValue"> {usersLastName}</span>
          </p>

          {showEdit && (
            <form className="editForm" onSubmit={handleOpenModal}>
              <label className="newFirstAndLastNameLabel" htmlFor="firstName">
                New First Name:{" "}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handlefnInputChange}
                className="editInput"
              />

              <label className="newFirstAndLastNameLabel" htmlFor="lastName">
                New Last Name:{" "}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handlelnInputChange}
                className="editInput"
              />
              <div>
                <button type="submit" className="saveAndCancelButton">
                  Save
                </button>
                <button
                  onClick={() => setShowEdit(false)}
                  type="button"
                  className="saveAndCancelButton"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {openPersonalInfoModal && (
            <div className="modalBoxContainer">
              <div className="modalBackground">
                <div>
                  <p>Are you sure you want to save changes?</p>
                </div>
                <div className="modalButtonsContainer">
                  {user && <button onClick={handleSubmit}>Confirm</button>}
                  <button onClick={() => setOpenPersonalInfoModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {confirmationInfoModal && (
            <div className="modalBoxContainer">
              <div className="modalBackground">
                <div>
                  <p>Your name has been successfully updated.</p>
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
        <div>
          <BodyMassIndexCalculator />
        </div>
      </div>
      <div className="myFavoritesContainer">
        <h2 className="myFavoritesTitle">My favorites</h2>

        {favorites && (
          <div className="myFavouritesListItemsContainer">
            {favorites.map((item) => (
              <div key={item.id}>
                <img src={item.images} alt={`Poster of ${item.name}`}></img>

                <p className="myFavouritesListParagraphs">{item.name}</p>
                <p className="myFavouritesListParagraphs">
                  <FaPhoneSquareAlt className="phoneIcon" />
                  {item.phone}
                </p>
                {token && (
                  <button onClick={() => openDeleteModal(favorites, item)}>
                    Delete
                  </button>
                )}
                {/* {deleteOpenModal && (
                  <div className="modalBoxContainer">
                    <div className="modalBackground">
                      <div>
                        <p>
                          Are you sure you want to remove this item from your
                          list?
                        </p>
                      </div>
                      <div className="modalButtonsContainer">
                        <button>
                          Confirm
                        </button>

                        <button>Cancel</button>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            ))}
            {/* {deleteConfirmModal && (
              <div className="modalBoxContainer">
                <div className="modalBackground">
                  <div>
                    <p>The selected item was removed from your list.</p>
                  </div>
                  <div className="modalButtonsContainer">
                    {user && (
                      <button>Ok</button>
                    )}
                  </div>
                </div>
              </div>
            )} */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
