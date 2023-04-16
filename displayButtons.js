// pageIndex is a property

// index carries the value of the ActiveIndex
// data-index will be used to pass the index value to app.js and control the page of profiles we're displaying

const displayButtons = (btnContainer, pages, index) => {
    let btns = pages.map((_, pageIndex) => {
        return `<button class="page-btn ${index === pageIndex ? "active-btn" : null}" data-index="${pageIndex}">
                    ${pageIndex + 1}
                </button>`; // prettier-ignore
    });
    btns.push(`<button class="next-btn">next</button>`);
    btns.unshift(`<button class="prev-btn">prev</button>`);
    btnContainer.innerHTML = btns.join("");
};

export default displayButtons;
