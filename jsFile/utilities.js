//get input value function

function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  if (inputNumber.toString() !== inputValue) {
    alert("invalid input");
    return;
  } else {
    return inputNumber;
  }
}

//get text value function

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// show and close modal function
function getModals() {
  document.getElementById("myModal").classList.remove("hidden");
  function closeModal() {
    document.getElementById("myModal").classList.add("hidden");
  }
  document.querySelector(".close").onclick = closeModal;
  document.getElementById("closeModal").onclick = closeModal;
  document.onclick = function (event) {
    if (event.target === document.getElementById("myModal")) {
      closeModal();
    }
  };
}

//main function

function getDonation(buttonId, amountInputId, totalDonationId, titleId) {
  document.getElementById(buttonId).addEventListener("click", function () {
    const donationAmount = getInputValueById(amountInputId);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input");
      document.getElementById(amountInputId).value = "";
      return;
    }

    const remainingBalance = getTextValueById("remaining-balance");
    if (donationAmount > remainingBalance) {
      alert("Doesn't have enough money to donate");
      return;
    }

    const totalDonationAmount = getTextValueById(totalDonationId);
    const updatedTotalAmount = totalDonationAmount + donationAmount;
    document.getElementById(totalDonationId).innerText = updatedTotalAmount;

    const updatedRemainingBalance = remainingBalance - donationAmount;
    document.getElementById("remaining-balance").innerText =
      updatedRemainingBalance.toFixed(2);
    document.getElementById(amountInputId).value = "";
    getModals();

    const div = document.createElement("div");
    div.classList.add("border-2", "mt-2", "rounded-lg");
    div.innerHTML = `
            <div class="px-10 py-4 mb-2">
                <h4 class="md:text-xl text-base font-bold text-gray-600">${donationAmount.toFixed(
                  2
                )} Taka is Donated for ${
      document.getElementById(titleId).innerText
    }</h4>
                <p class="md:text-base text-xs text-gray-500 font-semibold my-2 md:px-1 bg-gray-100">Date: ${new Date().toString()}</p>
            </div>
        `;
    document.getElementById("history-section").appendChild(div);
  });
}

function showSectionById(id) {
  //hide all section
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document
    .getElementById("btn-donation")
    .classList.add("border-2", "bg-white", "border-gray-300");
  document.getElementById("btn-donation").classList.remove("bg-[#B4F461]");

  document
    .getElementById("btn-history")
    .classList.add("border-2", "bg-white", "border-gray-300");
  document.getElementById("btn-history").classList.add("bg-[#B4F461]");

  //show the section I want
  document.getElementById(id).classList.remove("hidden");
  if (id === "donation-section") {
    document.getElementById("btn-donation").classList.add("bg-[#B4F461]");
    document
      .getElementById("btn-donation")
      .classList.remove("border-2", "bg-white", "border-gray-300");
    document.getElementById("home-section").classList.add("hidden");
  } else if (id === "history-section") {
    document.getElementById("btn-history").classList.add("bg-[#B4F461]");
    document
      .getElementById("btn-history")
      .classList.remove("border-2", "bg-white", "border-gray-300");
    document.getElementById("home-section").classList.add("hidden");
  }
}

function togglePage() {
  const button = document.getElementById("toggle-btn");
  if (button.innerText === "Home") {
    document.location.href = "/index.html";
  } else {
    document.location.href = "/Blog.html";
  }
}
