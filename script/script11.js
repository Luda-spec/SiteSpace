const modal1 = document.querySelector(".modal");
const modal2 = document.querySelector(".modal-2");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn1 = document.querySelector(".modal .btn-close");
const closeModalBtn2 = document.querySelector(".modal-2 .btn-close");
const modalBtn = document.querySelector(".btn");
const tykSyudaBtn = document.querySelector(".btn-tyk-syuda");

const closeModal = function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
    overlay.classList.add("hidden");
};

const openModal1 = function () {
    modal1.style.display = "flex";
    modal2.style.display = "none";
    overlay.classList.remove("hidden");
};

const openModal2 = function () {
    modal2.style.display = "flex";
    modal1.style.display = "none";
    overlay.classList.remove("hidden");
};

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (modal1.style.display !== "none" || modal2.style.display !== "none")) {
        closeModal();
    }
});

closeModalBtn1.addEventListener("click", closeModal); 
closeModalBtn2.addEventListener("click", closeModal); 
overlay.addEventListener("click", closeModal); 
openModalBtn.addEventListener("click", openModal1); 

modalBtn.addEventListener("click", function() {
    openModal1();
    openModal2();
});

tykSyudaBtn.addEventListener("click", function() {
    modal2.style.display = "none";
    overlay.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    menuToggle.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        var isClickInside = dropdownMenu.contains(event.target);
        var isMenuToggle = menuToggle.contains(event.target);
        
        if (!isClickInside && !isMenuToggle) {
            dropdownMenu.style.display = 'none';
        }
    });
});