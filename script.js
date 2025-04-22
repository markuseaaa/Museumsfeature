const events = [
    {
      year: "1900",
      title: "Aarhus Teater",
      image: "IMG/aarhus-teater.jpg",
      text: "🎭 Aarhus Teater blev åbnet med pomp og pragt! Det er stadig en af byens smukkeste bygninger! Her oplever man alt fra klassiske dramaer til moderne musicals. Bygningen har en rig historie og imponerende interiør.",
      quiz: {
        question: "Hvad kan man opleve i Aarhus Teater?",
        options: ["Fodboldkampe", "Skuespil og forestillinger", "Badeland"],
        correct: 1
      }
    },
    {
      year: "1904",
      title: "Tivoli Friheden",
      image: "IMG/friheden.jpg",
      text: "🎢 Tivoli Friheden er fuld af fart og farver – en magisk park midt i skoven! Med rutsjebaner, teaterforestillinger og store koncerter er parken et samlingspunkt for hele familien året rundt.",
      quiz: {
        question: "Hvilken slags sted er Tivoli Friheden?",
        options: ["Et bibliotek", "En forlystelsespark", "En bondegård"],
        correct: 1
      }
    },
    {
      year: "1912",
      title: "Den Gamle By",
      image: "IMG/den-gamle-by.jpg",
      text: "🏘️ Her kan du opleve, hvordan folk boede og arbejdede i gamle dage! Man kan gå rundt blandt gamle butikker, hestevogne og smage på gammeldags slik.",
      quiz: {
        question: "Hvad er Den Gamle By?",
        options: ["Et moderne butikscenter", "Et museum med gamle huse", "Et stadion"],
        correct: 1
      }
    },
    {
      year: "1928",
      title: "Aarhus Universitet",
      image: "IMG/aarhus-universitet.jpg",
      text: "📚 Et sted fyldt med kloge hoveder og smukke gule bygninger! Universitetet rummer tusindvis af studerende og forskere, og har sat Aarhus på verdenskortet inden for viden og innovation.",
      quiz: {
        question: "Hvad laver man på Aarhus Universitet?",
        options: ["Laver mad", "Studerer og forsker", "Bygger biler"],
        correct: 1
      }
    },
    {
      year: "1941",
      title: "Aarhus Rådhus",
      image: "IMG/raadhus.jpg",
      text: "🏛️ Et flot hus til byens borgmester – lavet af dansk marmor! Det ikoniske urtårn og marmorinteriør gør det til en arkitektonisk perle midt i byen.",
      quiz: {
        question: "Hvem arbejder i Aarhus Rådhus?",
        options: ["Klovne", "Byens ledelse", "Superhelte"],
        correct: 1
      }
    },
    {
      year: "1982",
      title: "Musikhuset",
      image: "IMG/musikhuset.jpg",
      text: "🎶 Musik og dans fra hele verden – under ét tag! Det rummer flere sale og scener, og har både internationale og lokale optrædener året rundt.",
      quiz: {
        question: "Hvad sker der i Musikhuset?",
        options: ["Man spiller musik og ser shows", "Man sover", "Man flyver i fly"],
        correct: 0
      }
    },
    {
      year: "2004",
      title: "ARoS Kunstmuseum",
      image: "IMG/aros.jpg",
      text: "🌈 Se hele byen fra en regnbue! Kunst og farver i verdensklasse! Museet er hjem for både danske og internationale kunstnere og er især kendt for det gigantiske værk 'Boy'.",
      quiz: {
        question: "Hvad er ARoS kendt for?",
        options: ["En regnbue på taget", "Et kæmpe legetøj", "En zoologisk have"],
        correct: 0
      }
    },
    {
      year: "2012",
      title: "Isbjerget",
      image: "IMG/isbjerget.jpg",
      text: "🧊 Hvide spidse bygninger som ligner isbjerge i havet! Det prisvindende boligbyggeri kombinerer udsigt med moderne livsstil og har tiltrukket arkitekturinteresserede fra hele verden.",
      quiz: {
        question: "Hvad ligner bygningerne i Isbjerget?",
        options: ["Tandbørster", "Isbjerge", "Kager"],
        correct: 1
      }
    },
    {
      year: "2014",
      title: "Moesgaard Museum",
      image: "IMG/moesgaard.jpg",
      text: "🦴 Her møder du vikinger og oldtidens mennesker – og taget er en bakke! Museet viser både arkæologiske fund og interaktive udstillinger med lyd, lys og film.",
      quiz: {
        question: "Hvad kan man se på Moesgaard Museum?",
        options: ["Vikinger og oldtid", "Dinosaurer", "Rumraketter"],
        correct: 0
      }
    },
    {
      year: "2015",
      title: "Dokk1",
      image: "IMG/dokk1.jpg",
      text: "📖 Et supersejt bibliotek med robotter og udsigt over vandet! Det er ikke bare et bibliotek, men også et medborgerhus med robotparkering, legeområder og kreative værksteder.",
      quiz: {
        question: "Hvad er Dokk1?",
        options: ["Et tivoli", "Et bibliotek", "Et akvarium"],
        correct: 1
      }
    },
    {
      year: "2017",
      title: "Kulturhovedstad",
      image: "IMG/kulturhovedstad.jpg",
      text: "🎉 Hele Aarhus fejrede kunsten i et helt år – med shows, musik og farver! Der blev arrangeret tusindvis af events – fra operaforestillinger på gaden til kæmpe parader med lys og dans.",
      quiz: {
        question: "Hvad fejrede Aarhus i 2017?",
        options: ["Fødselsdag", "At være kulturhovedstad", "Nytår"],
        correct: 1
      }
    },
    {
      year: "2017",
      title: "Letbanen",
      image: "IMG/letbanen.jpg",
      text: "🚋 Den kører med strøm og forbinder byen med strande og skove! Den nye sporvogn giver nem adgang til både bymidten og naturen omkring Aarhus – helt uden at forurene.",
      quiz: {
        question: "Hvad er Letbanen?",
        options: ["En bus", "En rutsjebane", "En sporvogn"],
        correct: 2
      }
    },
    {
      year: "2017",
      title: "Salling Rooftop",
      image: "IMG/salling-rooftop.jpg",
      text: "☕ Kig ud over byen fra toppen af et stormagasin – med cafe og glasgulv! Tagterrassen byder på events, koncerter og en glasbro, man kan gå ud på og kigge ned over Strøget.",
      quiz: {
        question: "Hvad kan man gøre på Salling Rooftop?",
        options: ["Flyve i luftballon", "Spise is og nyde udsigt", "Fange fisk"],
        correct: 1
      }
    },
    {
      year: "2023",
      title: "The Lighthouse",
      image: "IMG/lighthouse.jpg",
      text: "🌇 Aarhus’ højeste bygning med udsigt over vand og by! Med sine 142 meter rummer bygningen både boliger og udsigtsplatform med panoramaudsigt over bugten.",
      quiz: {
        question: "Hvad er The Lighthouse?",
        options: ["Et fyrtårn med lys", "Et springvand", "Et højt lejlighedstårn"],
        correct: 2
      }
    }
  ];
  
      const timeline = document.getElementById('timeline');
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      const lightboxCaption = document.getElementById('lightboxCaption');
  
      events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event';
        div.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="event-title">${event.title}</div>
          <div class="event-year">${event.year}</div>
        `;
        div.addEventListener('click', () => {
          lightbox.style.display = 'flex';
          lightboxImage.src = event.image;
          lightboxCaption.textContent = event.text;
          playSound();
        });
  
        // QUIZ
        if (event.quiz) {
          const quizDiv = document.createElement('div');
          quizDiv.className = 'quiz-box';
          quizDiv.innerHTML = `
            <button class="quiz-button">🎲 Quiz mig!</button>
            <div class="quiz-question" style="display: none;">
              <p>${event.quiz.question}</p>
              ${event.quiz.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}">${opt}</button>
              `).join('')}
            </div>
          `;
          div.appendChild(quizDiv);
  
          const quizBtn = quizDiv.querySelector('.quiz-button');
          const quizQ = quizDiv.querySelector('.quiz-question');
  
          quizBtn.addEventListener('click', () => {
            quizBtn.style.display = 'none';
            quizQ.style.display = 'block';
          });
  
          const optionButtons = quizQ.querySelectorAll('.quiz-option');
          optionButtons.forEach(btn => {
              quizBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // ⚠️ Stop klik fra at åbne lightbox
    quizBtn.style.display = 'none';
    quizQ.style.display = 'block';
  });
  
  optionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // ⚠️ Stop klik fra at åbne lightbox
      const answer = parseInt(btn.getAttribute('data-index'));
      if (answer === event.quiz.correct) {
          btn.style.background = 'green';
    btn.textContent = "✔️ Rigtigt!";
  
    // 🎊 Konfetti
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  
    // 🔊 Lyd
    const yaySound = new Audio('yay.mp3');
    yaySound.play();
      } else {
        btn.style.background = 'red';
        btn.textContent = "✖️ Prøv igen!";
        btn.classList.add('shake');
        setTimeout(() => {
          btn.classList.remove('shake');
          btn.textContent = event.quiz.options[answer];
          btn.style.background = '';
        }, 1200);
      }
    });
  });
  
          });
        }
  
        timeline.appendChild(div);
      });
  
      lightbox.addEventListener('click', () => {
    closeLightbox();
  });
  
  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImage.src = '';
    lightboxCaption.textContent = '';
  }
      function scrollToTimeline() {
        document.querySelector('.timeline-container').scrollIntoView({ behavior: 'smooth' });
      }
  
      const timelineContainer = document.querySelector('.timeline-container');
      const scrollBar = document.getElementById('scrollBar');
  
      timelineContainer.addEventListener('scroll', () => {
        const scrollLeft = timelineContainer.scrollLeft;
        const maxScroll = timelineContainer.scrollWidth - timelineContainer.clientWidth;
        const scrollPercent = (scrollLeft / maxScroll) * 100;
        scrollBar.style.width = scrollPercent + '%';
      });
  
      function playSound() {
        const sound = new Audio("click-sound.mp3");
        sound.play();
      }
  
  let inactivityTimeout;
  let autoReloadTimeout;
  
  function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    clearTimeout(autoReloadTimeout);
    hidePopup();
  
    inactivityTimeout = setTimeout(() => {
      showPopup();
  
      // Hvis der ikke trykkes inden 8 sekunder → reload
      autoReloadTimeout = setTimeout(() => {
        location.reload();
      }, 8000);
    }, 20000); // 30 sekunder inaktivitet
  }
  
  function showPopup() {
    document.getElementById('inactivity-popup').style.display = 'flex';
  }
  
  function hidePopup() {
    document.getElementById('inactivity-popup').style.display = 'none';
  }
  
  function stayOnPage() {
    resetInactivityTimer();
  }
  
  ['mousemove', 'mousedown', 'touchstart', 'keydown'].forEach(evt =>
    document.addEventListener(evt, resetInactivityTimer)
  );
  
  resetInactivityTimer();
  