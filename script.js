// select all filter buttons and filterable cards

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//Defining the filterCards function
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  //Iterate over each filterable card
  filterableCards.forEach((card) => {
    //add hide class to hide the class initially
    card.classList.add("hide");
    //check if the selected card matches the selected filter or "all" button
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

//Adding event handlers to each filter button
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
