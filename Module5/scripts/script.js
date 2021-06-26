function init() {
    $(".modal").each((i, modalBody) => {
        const pages = modalBody.querySelectorAll(".page");
        const closeBtn = modalBody.querySelector(".closeBtn");
        const previousBtn = modalBody.querySelector(".previousBtn");
        const nextBtn = modalBody.querySelector(".nextBtn");
        const registerBtn = modalBody.querySelector(".registerBtn");

        const storedInfo = {};

        let currentPage = 0;

        updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        previousBtn.addEventListener("click", () => {
            currentPage--;
            updateModalPages(currentPage, pages, storedInfo);
            updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        });
        nextBtn.addEventListener("click", () => {
            if (validate(currentPage, pages, storedInfo)) {
                currentPage++;
            }
            updateModalPages(currentPage, pages, storedInfo);
            updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        });
        registerBtn.addEventListener("click", () => {
            if (validate(currentPage, pages, storedInfo)) {
                currentPage++
            }

            updateModalPages(currentPage, pages, storedInfo);
            updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn);
        });
        closeBtn.addEventListener("click", () => {
            currentPage = 0;
        });
    })
}

function validate(currentPage, pages, storedInfo) {
    switch (currentPage) {
        case 0:
            const phoneNumber = pages[currentPage].querySelector("#phone");
            if (!phoneNumber.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) { // Regex from https://stackoverflow.com/a/16699507/1985387
                alert("Phone number is invalid");
                return false;
            }

            const email = pages[currentPage].querySelector("#email");
            if (!email.value.match(/.+\@.+\..+/)) { // Regex from https://www.wired.com/2008/08/four-regular-expressions-to-check-email-addresses/
                alert("Email is invalid");
                return false;
            }

            storedInfo.expert = $(pages[currentPage]).find("#experts").val();
            storedInfo.time = $(pages[currentPage]).find("#time").val();
            storedInfo.date = $(pages[currentPage]).find("#date").val();
    
            return true;
        case 1:
            const cardNumber = pages[currentPage].querySelector("#card-number");
            if (!cardNumber.value.match(/^(?:\d{4} ?){4}$/)) {
                alert("Credit card number is invalid");
                return false;
            }

            const ccv = pages[currentPage].querySelector("#ccv");
            if (ccv.value.length !== 3) {
                alert("CCV number is invalid");
                return false;
            }
        default:
            return true;
    }
}

function updateModalPages(currentPage, pages, storedInfo) {
    for (let i = 0; i < pages.length; i++) {
        if (currentPage !== i) {
            pages[i].classList.add("hidden");
        } else {
            pages[i].classList.remove("hidden");
        }
    }

    if (currentPage == pages.length - 1) {
        $(pages[currentPage]).find("#registration-information")
            .text(`You booked with ${storedInfo.expert} at ${storedInfo.time} on ${storedInfo.date}`);
    }
}

function updateModalButtons(currentPage, pages, previousBtn, nextBtn, registerBtn) {
    if (currentPage === pages.length - 2) {
        previousBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        registerBtn.classList.remove("hidden");
    } else if (currentPage === pages.length - 1) {
        previousBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        registerBtn.classList.add("hidden");
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

$(init);