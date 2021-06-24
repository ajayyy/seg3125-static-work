function init() {
    const modalBodies = document.querySelectorAll(".modal");

    for (const modalBody of modalBodies) {
        const pages = modalBody.querySelectorAll(".page");
        const previousBtn = modalBody.querySelector(".previousBtn");
        const nextBtn = modalBody.querySelector(".nextBtn");
        const registerBtn = modalBody.querySelector(".registerBtn");

        let currentPage = 0;

        updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        previousBtn.addEventListener("click", () => {
            currentPage--;
            updateModalPages(currentPage, pages);
            updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        });
        nextBtn.addEventListener("click", () => {
            currentPage++;
            updateModalPages(currentPage, pages);
            updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        });
    }
}

function updateModalPages(currentPage, pages) {
    for (let i = 0; i < pages.length; i++) {
        if (currentPage !== i) {
            pages[i].classList.add("hidden");
        } else {
            pages[i].classList.remove("hidden");
        }
    }
}

function updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn) {
    if (currentPage === pages.length - 1) {
        previousBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        registerBtn.classList.remove("hidden");
    } else {
        if (currentPage === 0) {
            previousBtn.classList.add("hidden");
        } else {
            previousBtn.classList.remove("hidden");
        }

        nextBtn.classList.remove("hidden");
        registerBtn.classList.add("hidden");
    }
}

window.addEventListener('load', init);