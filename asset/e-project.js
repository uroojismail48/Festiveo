const regions = document.querySelectorAll('.region');
const regionSidebar = document.getElementById('regionSidebar');
const closeRegionSidebarBtn = document.getElementById('closeSidebar');
const regionName = document.getElementById('regionName');
const festivalList = document.getElementById('festivalList');

const regionFestivals = {
  Asia: [ "Kalash Festivals (Pakistan)",  "Basant (Pakistan)", "Lantern Festival (China)", "Holi (India)","dragon boat (china)","cherry blossom (japan)"  ],
  Europe: ["Oktoberfest (Germany)", "La Tomatina (Spain)", "Edinburgh Fringe (UK)", "Venice Carnival (Italy)"],
  Africa: ["Timkat (Ethiopia)", "Cape Town Carnival (South Africa)", "Lake of Stars (Malawi)", "FESPACO (Burkina Faso)"],
  Americas: ["Rio Carnival (Brazil)", "Día de los Muertos (Mexico)", "Coachella (USA)", "Carnaval de Barranquilla (Colombia)"],
  Oceania: ["Sydney Festival (Australia)", "Pasifika (New Zealand)", "Vivid Sydney (Australia)", "Woodford Folk Festival (Australia)"]
};

regions.forEach(region => {
  region.addEventListener('click', () => {
    const name = region.dataset.region;
    regionName.textContent = `${name} Festivals`;
    festivalList.innerHTML = "";
    regionFestivals[name].forEach(festival => {
      const li = document.createElement('li');
      li.textContent = festival;
      festivalList.appendChild(li);
    });
    regionSidebar.classList.add('active');
  });
});

closeRegionSidebarBtn.addEventListener('click', () => {
  regionSidebar.classList.remove('active');
});

// Optional: close when clicking outside the sidebar
regionSidebar.addEventListener("click", (e) => {
  if (e.target === regionSidebar) {
    regionSidebar.classList.remove("active");
  }
});


// === RESERVE SIDEBAR ===
const reserveSidebar = document.getElementById("reserveSidebar");
const reserveButtons = document.querySelectorAll(".reserve-card-btn");
const closeReserveBtn = document.getElementById("closeReserve"); 

reserveButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    reserveSidebar.classList.add("active");
  });
});

if (closeReserveBtn) {
  closeReserveBtn.addEventListener("click", () => {
    reserveSidebar.classList.remove("active");
  });
}

// Optional: close when clicking outside reserve sidebar
reserveSidebar.addEventListener("click", (e) => {
  if (e.target === reserveSidebar) {
    reserveSidebar.classList.remove("active");
  }
});
(function () {
  const counters = document.querySelectorAll('.stat-value');

  // If there are no counters, nothing to do
  if (!counters || counters.length === 0) return;

 
  const card =
    document.getElementById('mapCard') ||
    document.querySelector('.countermap') ||
    document.querySelector('.map-container');

  // If IntersectionObserver not supported, just set final values immediately
  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => c.textContent = c.getAttribute('data-target'));
    return;
  }

  const options = { root: null, threshold: 0.25 };
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        startAllCounters();
        observer.disconnect();
      }
    });
  }, options);

  if (card) {
    observer.observe(card);
  } else {
    // If no container to observe, start immediately
    startAllCounters();
  }

  function startAllCounters() {
    counters.forEach(counter => animateCount(counter));
  }

  function animateCount(el) {
    const duration = 1200 + Math.random() * 800;
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const start = 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(start + eased * (target - start));
      el.textContent = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(tick);
  }
})();


// membership-form
function membership(){
  var MN =document.getElementById("Membership-name").value.trim();
   var ME=document.getElementById("Membership-email").value.trim();
    var MP=document.getElementById("Membership-phone").value.trim();
     var MCC =document.getElementById("Membership-c/c").value.trim();
     
            if ( MN === "" || ME === "" || MP ==="" || MCC==="") {
                alert("Please fill in all fields.");
                return;
}
}
// membership-form
// feedback-form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var ratingSelected = document.querySelector('input[name="star"]:checked');

  // Validation
  if (name === "" || email === "" || message === "" || !ratingSelected) {
    alert(" Please fill in all fields and select a rating before submitting.");
    return;
  }


  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert(" Please enter a valid email address.");
    return;
  }

  // If everything is fine
  alert(" Thank you, " + name + "! Your feedback has been submitted successfully.");
  document.getElementById("feedbackForm").reset(); 
});
// feedback-form
// contactus

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("contact-name").value.trim();
  var email = document.getElementById("contact-email").value.trim();
  var message = document.getElementById("contact-message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert(" Please fill in all fields before submitting.");
    return;
  }

  
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert(" Please enter a valid email address.");
    return;
  }

  alert(" Thank you, " + name + "! Your message has been submitted successfully.");
  document.getElementById("contactForm").reset(); 
});



