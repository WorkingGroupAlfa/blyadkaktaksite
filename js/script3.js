  // Находим все кнопки с классом "openPopup5"
  const openBtns = document.querySelectorAll('.openPopup6');
  // Находим все попапы с классом "popup5"
  const popups = document.querySelectorAll('.popup6');
  
  // Для каждой кнопки
  openBtns.forEach((btn, index) => {
    // Для соответствующего попапа
    const popup = popups[index];
    const closeBtn = popup.querySelector('.closech2');
    
    // Открытие попапа по нажатию на кнопку
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('show');
      document.body.classList.add('no-scroll');
    });
    
    // Закрытие попапа по нажатию на крестик
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      document.body.classList.remove('no-scroll');
    });
    
    // Закрытие попапа при клике вне попапа
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('show');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang_button");
  const allLangs = ["en", "ru", "cz", "ua", "es", "ro", "fr", "it"];
  const popup = document.querySelector(".popup6"); // 👈 меняем только это
  let currentLang = localStorage.getItem("language") || checkBrowserLang() || "en";

  const translations = {
 "home__button3": {
      en: "Home",
      ru: "Главная",
      cz: "Domů",
      ua: "Головна",
      es: "Inicio",
      ro: "Acasă",
      fr: "Accueil",
      it: "Home",
    },
    "about__button3": {
      en: "About",
      ru: "О нас",
      cz: "O nás",
      ua: "Про нас",
      es: "Sobre nosotros",
      ro: "Despre noi",
      fr: "À propos",
      it: "Chi siamo",
    },
    "blog__button3": {
      en: "Blog",
      ru: "Блог",
      cz: "Blog",
      ua: "Блог",
      es: "Blog",
      ro: "Blog",
      fr: "Blog",
      it: "Blog",
    },
    "lastest-blog": {
en: "Latest From Blog",
ru: "Последние из блога",
cz: "Nejnovější z blogu",
ua: "Останнє з блогу",
es: "Últimos del blog",
ro: "Ultimele de pe blog",
fr: "Dernières du blog",
it: "Ultimi dal blog"
    },
    "first-text-name1": {
    en: "We're getting started!",
    ru: "Мы начинаем!",
    cz: "Začínáme!",
    ua: "Ми починаємо!",
    es: "¡Estamos empezando!",
    ro: "Începem!",
    fr: "Nous commençons !",
    it: "Stiamo iniziando!"
  },
    "first-text-des1": {
    en: "Introducing you the <br> - Bleu de Print -",
    ru: "Представляем вам <br> - Bleu de Print -",
    cz: "Představujeme vám <br> - Bleu de Print -",
    ua: "Представляємо вам <br> - Bleu de Print -",
    es: "Te presentamos <br> - Bleu de Print -",
    ro: "Îți prezentăm <br> - Bleu de Print -",
    fr: "Nous vous présentons <br> - Bleu de Print -",
    it: "Vi presentiamo<br> - Bleu de Print -"
  },
  "about-menu": {
      en: "Menu",
      ru: "Меню",
      cz: "Menu",
      ua: "Меню",
      es: "Menú",
      ro: "Meniu",
      fr: "Menu",
      it: "Menu"
    },
    "home__button22": {
      en: "Home",
      ru: "Главная",
      cz: "Domů",
      ua: "Головна",
      es: "Inicio",
      ro: "Acasă",
      fr: "Accueil",
      it: "Home",
    },
    "about__button22": {
      en: "About",
      ru: "О нас",
      cz: "O nás",
      ua: "Про нас",
      es: "Sobre nosotros",
      ro: "Despre noi",
      fr: "À propos",
      it: "Chi siamo",
    },
    "blog__button22": {
      en: "Blog",
      ru: "Блог",
      cz: "Blog",
      ua: "Блог",
      es: "Blog",
      ro: "Blog",
      fr: "Blog",
      it: "Blog",
    },
    "working-hours-about": {
      en: "Working hours",
ru: "Часы работы",
cz: "Pracovní doba",
ua: "Час роботи",
es: "Horario de trabajo",
ro: "Program de lucru",
fr: "Heures de travail",
it: "Orari di lavoro"
    },
    "contact-us-blog": {
      en: "Contact Us",
ru: "Связаться с нами",
cz: "Kontaktujte nás",
ua: "Зв'яжіться з нами",
es: "Contáctanos",
ro: "Contactează-ne",
fr: "Contactez-nous",
it: "Contattaci"
    },
    "about-location": {
      en: "European Union",
ru: "Европейский Союз",
cz: "Evropská unie",
ua: "Європейський Союз",
es: "Unión Europea",
ro: "Uniunea Europeană",
fr: "Union Européenne",
it: "Unione Europea"
    }
    // ➕ Добавь нужные ключи
  };

 function changeLang() {
    for (const key in translations) {
      const elem = document.querySelector(`[data-lang="${key}"]`);
      if (elem) {
        elem.innerHTML = translations[key][currentLang]; // Используем innerHTML
      }
    }
  }

  function checkBrowserLang() {
    const lang = navigator.language.slice(0, 2).toLowerCase();
    return allLangs.includes(lang) ? lang : null;
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.btn;
      localStorage.setItem("language", currentLang);
      changeLang();
      if (popup) {
        popup.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    });
  });

  changeLang();
});