// flashMessage.js

import { apiResponse } from "../network/constants";

const displayFlashMessage = (
  text,
  type = apiResponse.SUCCESS,
  duration = 3000
) => {
  const flashMessageElement = document.createElement("div");

  flashMessageElement.textContent = text;
  flashMessageElement.style.position = "fixed";
  flashMessageElement.style.bottom = "20px";
  flashMessageElement.style.left = "50%";
  flashMessageElement.style.transform = "translateX(-50%)";
  flashMessageElement.style.padding = "10px";
  flashMessageElement.style.color = "white";
  flashMessageElement.style.fontWeight = "bold";
  flashMessageElement.style.borderRadius = "5px";
  flashMessageElement.style.backgroundColor =
    type === apiResponse.SUCCESS ? "green" : "red";
  flashMessageElement.style.zIndex = 9999;

  document.body.appendChild(flashMessageElement);

  setTimeout(() => {
    document.body.removeChild(flashMessageElement);
  }, duration);
};

export default displayFlashMessage;
