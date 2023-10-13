const $chatMessages = Qs(".messages");

const setRoomActive = (room_id) => {
  QsAll(".list-rooms li").forEach((el) => el.classList.remove("active"));
  Qs(`#room-${room_id}`).classList.add("active");
  Qs("#selected-room").value = room_id;
};

const getMessages = async (room_id) => {
  const response = await fetch(`/${room_id}`);
  const html = await response.text();
  $chatMessages.innerHTML = html;
  setRoomActive(room_id);
};

const sendMessage = async (data) => {
  console.log(data);

  const response = await fetch(`/${data.room_id}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": data.csrfmiddlewaretoken,
    },
    body: JSON.stringify(data),
  });
  const html = await response.text();
  const $uniqueMessageContainer = Qs(".unique-message-container");
  $uniqueMessageContainer.insertAdjacentHTML("beforeend", html);
  Qs(".send-message").reset();
};

const createRoom = async (data) => {
  const response = await fetch(`/create-room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": data.csrfmiddlewaretoken,
    },
    body: JSON.stringify(data),
  });
  const html = await response.text();
  const $listRooms = Qs(".list-rooms");
  $listRooms.insertAdjacentHTML("afterbegin", html);
  const modal = bootstrap.Modal.getInstance(Qs(".modal"));
  modal.hide();
  Qs(".create-room").reset();
  getLastRoom();
};

const getLastRoom = () => {
  Qs(".list-rooms li").click();
};

//// EVENTS

// intercept form send message
Qs(".send-message").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  sendMessage(data);
});

// intercept form create room
Qs(".create-room").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  createRoom(data);
});

// INIT
getLastRoom();
