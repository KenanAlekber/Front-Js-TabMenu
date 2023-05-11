const btns = document.querySelectorAll("#tabs-menu .tabs button");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        btns.forEach((btn) => {
            btn.classList.remove("bg-white")
        })
        e.classList.add("bg-white")
        document.querySelectorAll(".tab-container").forEach((e) => {
            e.classList.add("dis-none")
        })
        document.getElementsByClassName(e.value)[0].classList.remove("dis-none");
    })
})