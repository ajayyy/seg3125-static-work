const disableDates = {
    "John Miller": ["07/01/2021", "07/02/2021", "07/21/2021", "07/22/2021", "07/28/2021", "07/29/2021"],
    "Gina Harris": ["07/01/2021", "07/06/2021", "07/07/2021", "07/08/2021"],
    "Emily Thomas": ["07/01/2021", "07/13/2021", "07/14/2021", "07/15/2021"]
}

function init() {
    $(".modal").each((i, modalBody) => {
        const pages = modalBody.querySelectorAll(".page");
        const closeBtn = modalBody.querySelector(".closeBtn");
        const previousBtn = modalBody.querySelector(".previousBtn");
        const nextBtn = modalBody.querySelector(".nextBtn");
        const registerBtn = modalBody.querySelector(".registerBtn");

        const storedInfo = {};

        let currentPage = 0;

        updateModalPages(currentPage, pages, storedInfo);
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
            if (!$(pages[currentPage]).find("#phone").val().match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) { // Regex from https://stackoverflow.com/a/16699507/1985387
                alert("Phone number is invalid");
                return false;
            }

            if (!$(pages[currentPage]).find("#email").val().match(/.+\@.+\..+/)) { // Regex from https://www.wired.com/2008/08/four-regular-expressions-to-check-email-addresses/
                alert("Email is invalid");
                return false;
            }

            if ($(pages[currentPage]).find("#date").val().length === 0) {
                alert("Date is not filled out yet");
                return false;
            }

            if ($(pages[currentPage]).find("#time").val().length === 0) {
                alert("Time is not filled out yet");
                return false;
            }

            if ($(pages[currentPage]).find("#time").val().split(":")[0] < 9) {
                alert("Time is too early. Please book after 9 am and before 5 pm");
                return false;
            }

            if ($(pages[currentPage]).find("#time").val().split(":")[0] >= 17) {
                alert("Time is too late. Please book after 9 am and before 5 pm");
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

    switch (currentPage) {
        case 0:
            $("#date").datepicker({
                dateFormat: 'mm/dd/yy',
                minDate: Date.now(),
                maxDate: '+3M',
                // used to disable some dates
                // beforeShowDay: $.datepicker.noWeekends,
                beforeShowDay: (date) => {
                    if (date.getDay() === 0 || date.getDay() === 6 || (date.getMonth() < 6 && date.getDate() < 29)) return [false];
                    return [!disableDates[$(pages[currentPage]).find("#experts").val()].includes(jQuery.datepicker.formatDate('mm/dd/yy', date))];
                }
            });
            break;
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