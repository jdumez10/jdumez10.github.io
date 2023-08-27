document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const menu = document.querySelector("#menu-icon");
    const navlist = document.querySelector('.navlist');

    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", this.window.scrollY > 120);
    });

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    };

    // Smooth scroll function
    function smoothScroll(target, duration) {
        // ... (rest of the smoothScroll function)

    }

    // Smooth scroll when the "Contact Me" button is clicked
    const contactButton = document.querySelector('.resume-btn');
    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll('#contact', 1000); // Adjust the duration as needed
    
        // Close the mobile menu if open
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    });

    // Open resume PDF
    document.getElementById("open-resume").addEventListener('click', function() {
        const pdfUrl = "https://github.com/jdumez10/jdumez10.github.io/blob/main/resume/Resume%20Juan%20Diego%20Dumez.pdf";
        window.open(pdfUrl, "_blank");
    });
});
