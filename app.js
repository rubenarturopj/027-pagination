import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setUpUI = () => {
    displayFollowers(pages[index]); // to display that data (the selected profiles)
    displayButtons(btnContainer, pages, index); // to control the buttons
};

const init = async () => {
    const followers = await fetchFollowers(); // to fetch data
    title.textContent = "Pagination"; // to change title
    pages = paginate(followers); // to send pagination info to this array that we will display, one per page
    setUpUI(); // to invoke the function that will display the items
};

btnContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-container")) return; // for the click to be only on the buttons and not the whole container
    if (e.target.classList.contains("page-btn")) {
        index = parseInt(e.target.dataset.index);
    }
    if (e.target.classList.contains("next-btn")) {
        index++;
        if (index > pages.length - 1) {
            index = 0;
        }
    }
    if (e.target.classList.contains("prev-btn")) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }
    setUpUI();
});

// add event listener to the moment the page/windows load
window.addEventListener("load", init);
