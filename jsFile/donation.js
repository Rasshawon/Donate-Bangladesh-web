// Call function

getDonation(
  "btn-donation-for-noakhali",
  "donation-amount-for-noakhali",
  "total-donation-for-noakhali",
  "noakhali-title"
);
getDonation(
  "btn-donation-for-feni",
  "donation-amount-for-feni",
  "total-donation-for-feni",
  "feni-title"
);
getDonation(
  "btn-donation-for-quota-protest",
  "donation-amount-for-quota-protest",
  "total-donation-for-quota-protest",
  "quota-protest-title"
);

// Move history or donation section
document.getElementById("btn-donation").addEventListener("click", function () {
  showSectionById("donation-section");
});

document.getElementById("btn-history").addEventListener("click", function () {
  showSectionById("history-section");
});
