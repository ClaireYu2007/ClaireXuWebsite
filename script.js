var wrapper = document.querySelector("body .wraper");
var a = document.querySelectorAll(".menu a");
var section = document.querySelectorAll(".section");
var header = document.getElementById("header");
var menu = document.querySelector("header .menu");
var openBar = document.querySelector(".show-bar");
var menuShadow = document.querySelector(".menu-shadow");
var getToKnowBtn = document.getElementById("get-to-know-btn"); 
var modal = document.getElementById("detail-modal");
var videoModal = document.getElementById("video-modal");
var videoPlayer = document.getElementById("video-player");

section[0].classList.add("active-sec");

wrapper.onscroll = function () {
    if (wrapper.scrollTop > 100) {
        header.classList.add("active1");
    } else {
        header.classList.remove("active1");
    }

    section.forEach(function (sec) {
        var id = sec.getAttribute("id");
        if (wrapper.scrollTop >= sec.offsetTop - sec.clientHeight / 3) {
            a.forEach(function (a1) {
                a1.classList.remove("active");
                document
                    .querySelector(`#header .menu a[href*=${id}]`)
                    .classList.add("active");
            });
            sec.classList.add("active-sec");
        } else {
            sec.classList.remove("active-sec");
        }
    });
};

getToKnowBtn.addEventListener("click", showVideoModal);

function openMenu() {
    menu.classList.add("menu-active");
    openBar.classList.add("hide-bar");
    menuShadow.classList.add("shadow-active");
}

function closeMenu() {
    menu.classList.remove("menu-active");
    openBar.classList.remove("hide-bar");
    menuShadow.classList.remove("shadow-active");
}

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

function showModal(memberId) {
  var textBoxes = document.querySelectorAll('.member-text-box');
  textBoxes.forEach(function(box) {
      box.style.display = 'none';
  });
  
  var selectedTextBox = document.getElementById('text-' + memberId);
  selectedTextBox.style.display = 'block';
}
function showDetail(member) {
    if (memberData[member]) {
        document.getElementById("member-name").textContent = memberData[member].name;
        document.getElementById("member-photo").src = memberData[member].photo;
        document.getElementById("member-bio").textContent = memberData[member].bio;
        document.getElementById("member-additional").textContent = memberData[member].additional;

        modal.classList.add("show");
    } else {
        console.error("Member data not found for: " + member);
    }
}

function closeModal() {
    modal.classList.remove("show");
}

document.querySelectorAll(".member").forEach(function(memberElement) {
    memberElement.addEventListener("click", function() {
        var member = memberElement.getAttribute("data-member");
        showDetail(member);
    });
});

function showVideoModal() {
    videoModal.style.display = "flex";
}

function closeVideoModal() {
    videoModal.style.display = "none";
    videoPlayer.pause(); 
}
document.querySelector(".close-video-btn").addEventListener("click", closeVideoModal);

