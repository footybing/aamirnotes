const buttons = document.querySelectorAll(".subject-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Close all other sections
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.nextElementSibling.style.display = "none";
            }
        });

        // Toggle current section
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}
