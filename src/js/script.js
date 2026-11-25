// *** ACCORDEON ***///

let accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((sum) => {
    sum.addEventListener("click", (event) => {
        event.preventDefault();

        let details = sum.parentElement;
        let ouvert = details.open;

        accordeon.querySelectorAll("details").forEach((det) => {
            det.open = false;
        });

        details.open = !ouvert;
    });
});