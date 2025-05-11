// Первый попап
const openBtn1 = document.getElementById('openPopup');
const popup1 = document.getElementById('popup');
const closeBtn1 = popup1.querySelector('.closech');

openBtn1.addEventListener('click', (e) => {
  e.preventDefault();
  popup1.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn1.addEventListener('click', () => {
  popup1.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup1) {
    popup1.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

// Второй попап
const openBtn2 = document.getElementById('openPopup2');
const popup2 = document.getElementById('popup2');
const closeBtn2 = popup2.querySelector('.closech');

openBtn2.addEventListener('click', (e) => {
  e.preventDefault();
  popup2.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn2.addEventListener('click', () => {
  popup2.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup2) {
    popup2.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

// Третий попап
const openBtn3 = document.getElementById('openPopup3');
const popup3 = document.getElementById('popup3');
const closeBtn3 = popup3.querySelector('.closech');

openBtn3.addEventListener('click', (e) => {
  e.preventDefault();
  popup3.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn3.addEventListener('click', () => {
  popup3.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup3) {
    popup3.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

// ЯЗЫКОВОЙ БЛЯТЬ ПОПАП
// Ждем, пока DOM будет загружен
document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll('.openPopup4');  // Все кнопки для открытия попапа
  const popups = document.querySelectorAll('.popup4');        // Все попапы
  const closeBtn = document.querySelector('.closech2');       // Кнопка закрытия попапа
  
  // Функция для показа попапа
  function showPopup(popup) {
    popup.classList.add('show');
    document.body.classList.add('no-scroll');
  }
  
  // Функция для скрытия попапа
  function hidePopup(popup) {
    popup.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }

  // Проверяем, был ли попап уже показан
  if (!localStorage.getItem('popupShown')) {
    // Если не был показан, открываем попап
    showPopup(popups[0]);

    // Сохраняем информацию о том, что попап был показан
    localStorage.setItem('popupShown', 'true');
  }

  // Для каждой кнопки открытия попапа
  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Показываем попап при нажатии на кнопку
      showPopup(popups[0]);
    });
  });

  // Закрытие попапа при клике на крестик
  closeBtn.addEventListener('click', () => {
    hidePopup(popups[0]);
  });

  // Закрытие попапа при клике вне попапа
  window.addEventListener('click', (e) => {
    if (e.target === popups[0]) {
      hidePopup(popups[0]);
    }
  });
});


// ПЕРЕВОД САЙТА СКА БЛДЬ ПЗДЦ


document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang_button");
  const allLangs = ["en", "ru", "cz", "ua", "es", "ro", "fr", "it"];
  const popup = document.querySelector(".popup4");
  let currentLang = localStorage.getItem("language") || checkBrowserLang() || "en";

  const translations = {
    "home__button1": {
      en: "Home",
      ru: "Главная",
      cz: "Domů",
      ua: "Головна",
      es: "Inicio",
      ro: "Acasă",
      fr: "Accueil",
      it: "Home",
    },
    "about__button1": {
      en: "About",
      ru: "О нас",
      cz: "O nás",
      ua: "Про нас",
      es: "Sobre nosotros",
      ro: "Despre noi",
      fr: "À propos",
      it: "Chi siamo",
    },
    "blog__button1": {
      en: "Blog",
      ru: "Блог",
      cz: "Blog",
      ua: "Блог",
      es: "Blog",
      ro: "Blog",
      fr: "Blog",
      it: "Blog",
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
    "contact-us-blog2": {
      en: "Contact Us",
ru: "Связаться с нами",
cz: "Kontaktujte nás",
ua: "Зв'яжіться з нами",
es: "Contáctanos",
ro: "Contactează-ne",
fr: "Contactez-nous",
it: "Contattaci"
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
    },
    "title-first-page": {
      en: "Not just a typography",
      ru: "Не просто типография",
      cz: "Nejen typografie",
      ua: "Це не просто типографія",
      es: "No solo una imprenta",
      ro: "Nu doar o tipografie",
      fr: "Pas seulement une imprimerie",
      it: "Non solo una tipografia",
    },
    "first-span": {
en: "Get the brand to next level with us",
ru: "Выведите бренд на новый уровень с нами",
cz: "Dostaňte značku na další úroveň s námi",
ua: "Підніміть бренд на новий рівень разом з нами",
es: "Lleva la marca al siguiente nivel con nosotros",
ro: "Du brandul la următorul nivel cu noi",
fr: "Faites passer la marque au niveau supérieur avec nous",
it: "Porta il brand al livello successivo con noi"
    },
    "second-span": {
en: "We don't print money, but will make you earn more.",
ru: "Мы не печатаем деньги, но поможем вам зарабатывать больше.",
cz: "Nevytváříme peníze, ale pomůžeme vám vydělat více.",
ua: "Ми не друкуємо гроші, але допоможемо вам заробляти більше.",
es: "No imprimimos dinero, pero te haremos ganar más.",
ro: "Nu tipărim bani, dar te vom ajuta să câștigi mai mult.",
fr: "Nous n'imprimons pas de l'argent, mais nous vous ferons gagner plus.",
it: "Non stampiamo soldi, ma ti faremo guadagnare di più."
    },
    "prev-1": {
       en: "PREVIEW",
    ru: "ПРЕДСМОТР",
    cz: "NÁHLED",
    ua: "ПЕРЕДПЕРЕГЛЯД",
    es: "VISTA PREVIA",
    ro: "Previzualizare",
    fr: "APERÇU",
    it: "ANTEPRIMA",
    },
    "from": {
    en: "From",
    ru: "Из",
    cz: "Z",
    ua: "З",
    es: "Desde",
    ro: "De la",
    fr: "De",
    it: "Da",
  },
    "stickers": {
    en: "Stickers",
    ru: "Наклейки",
    cz: "Nálepky",
    ua: "Наклейки",
    es: "Pegatinas",
    ro: "Autocolante",
    fr: "Autocollants",
    it: "Adesivi",
  },
   "Boxes": {
    en: "Boxes",
    ru: "Коробки",
    cz: "Krabice",
    ua: "Коробки",
    es: "Cajas",
    ro: "Cutii",
    fr: "Boîtes",
    it: "Scatole",
  },
  "Paper": {
    en: "Paper",
    ru: "Бумага",
    cz: "Papír",
    ua: "Папір",
    es: "Papel",
    ro: "Hârtie",
    fr: "Papier",
    it: "Carta",
  },
  "Cards": {
    en: "Cards",
    ru: "Карты",
    cz: "Karty",
    ua: "Картки",
    es: "Tarjetas",
    ro: "Carduri",
    fr: "Cartes",
    it: "Carte",
  },
  "Merch1": {
    en: "Merch",
    ru: "Мерч",
    cz: "Merch",
    ua: "Мерч",
    es: "Merch",
    ro: "Merch",
    fr: "Merch",
    it: "Merch",
  },
  "Gifts1": {
    en: "Gifts",
    ru: "Подарки",
    cz: "Dárky",
    ua: "Подарунки",
    es: "Regalos",
    ro: "Cadouri",
    fr: "Cadeaux",
    it: "Regali",
  },
  "Banner": {
    en: "Banner",
    ru: "Баннер",
    cz: "Banner",
    ua: "Банер",
    es: "Banner",
    ro: "Banner",
    fr: "Bannière",
    it: "Banner",
  },
  "Cup": {
    en: "Cup",
    ru: "Стакан",
    cz: "Hrnček",
    ua: "Стакан",
    es: "Taza",
    ro: "Cana",
    fr: "Tasse",
    it: "Tazza",
  },
  "about-page-title": {
      en: "About us",
      ru: "О нас",
      cz: "O nás",
      ua: "Про нас",
      es: "Sobre nosotros",
      ro: "Despre noi",
      fr: "À propos",
      it: "Chi siamo",
    },
    "about-short": {
      en: "We are a group of enthusiastic designers, technologists and creatives who have worked in the typography industry and decided to create something that is completely understandable and simplifies the process.",
    ru: "Мы группа энтузиастов-дизайнеров, технологов и креативщиков, которые работали в индустрии типографики и решили создать что-то, что будет полностью понятным и упростит процесс.",
    cz: "Jsme skupina nadšených designérů, technologů a kreativců, kteří pracovali v typografickém průmyslu a rozhodli se vytvořit něco, co je úplně pochopitelné a zjednodušuje proces.",
    ua: "Ми група ентузіастів-дизайнерів, технологів і креативників, які працювали в індустрії типографії і вирішили створити щось, що буде повністю зрозумілим і спростить процес.",
    es: "Somos un grupo de diseñadores, tecnólogos y creativos entusiastas que han trabajado en la industria de la tipografía y decidieron crear algo que sea completamente comprensible y simplifique el proceso.",
    ro: "Suntem un grup de designeri, tehnologii și creativi entuziaști care au lucrat în industria tipografiei și au decis să creeze ceva complet înțeles și să simplifice procesul.",
    fr: "Nous sommes un groupe de designers, technologues et créatifs enthousiastes ayant travaillé dans l'industrie de la typographie et avons décidé de créer quelque chose de complètement compréhensible et de simplifier le processus.",
    it: "Siamo un gruppo di designer, tecnologi e creativi entusiasti che hanno lavorato nell'industria della tipografia e hanno deciso di creare qualcosa di completamente comprensibile e che semplifica il processo."
  },
  "read-more": {
en: "Read More",
    ru: "Читать дальше",
    cz: "Číst více",
    ua: "Читати далі",
    es: "Leer más",
    ro: "Citește mai mult",
    fr: "Lire la suite",
    it: "Leggi di più"
  },
"campaign-help": {
en: "Need help with your campaign?",
    ru: "Нужна помощь с вашей кампанией?",
    cz: "Potřebujete pomoc s vaší kampaní?",
    ua: "Потрібна допомога з вашою кампанією?",
    es: "¿Necesitas ayuda con tu campaña?",
    ro: "Ai nevoie de ajutor cu campania ta?",
    fr: "Besoin d'aide pour votre campagne ?",
    it: "Hai bisogno di aiuto con la tua campagna?"
},
"Learn-more": {
    en: "Learn more",
    ru: "Узнать больше",
    cz: "Zjistit více",
    ua: "Дізнатись більше",
    es: "Aprender más",
    ro: "Află mai multe",
    fr: "En savoir plus",
    it: "Scopri di più"
  },
    "designers": {
    en: "Designer partnership",
    ru: "Партнёрство с дизайнером",
    cz: "Partnerství s designérem",
    ua: "Партнерство з дизайнером",
    es: "Asociación de diseñadores",
    ro: "Parteneriat cu designerul",
    fr: "Partenariat avec le designer",
    it: "Partnership con il designer"
  },
  "free_sample_program": {
    en: "Free sample program",
    ru: "Программа бесплатных образцов",
    cz: "Program zdarma vzorků",
    ua: "Програма безкоштовних зразків",
    es: "Programa de muestras gratis",
    ro: "Program de mostre gratuite",
    fr: "Programme d'échantillons gratuits",
    it: "Programma di campioni gratuiti"
  },
   "info": {
    en: "Info",
    ru: "Информация",
    cz: "Informace",
    ua: "Інформація",
    es: "Información",
    ro: "Informații",
    fr: "Info",
    it: "Info"
  },
  "latest_from_blog": {
    en: "Latest From Blog",
    ru: "Новости блога",
    cz: "Nejnovější z blogu",
    ua: "Останнє з блогу",
    es: "Últimos del Blog",
    ro: "Ultimele de pe Blog",
    fr: "Derniers du Blog",
    it: "Ultimi dal Blog"
  },
   "first-text-name": {
    en: "We're getting started!",
    ru: "Мы начинаем!",
    cz: "Začínáme!",
    ua: "Ми починаємо!",
    es: "¡Estamos empezando!",
    ro: "Începem!",
    fr: "Nous commençons !",
    it: "Stiamo iniziando!"
  },
    "first-text-des": {
    en: "Introducing you the <br> - Bleu de Print -",
    ru: "Представляем вам <br> - Bleu de Print -",
    cz: "Představujeme vám <br> - Bleu de Print -",
    ua: "Представляємо вам <br> - Bleu de Print -",
    es: "Te presentamos <br> - Bleu de Print -",
    ro: "Îți prezentăm <br> - Bleu de Print -",
    fr: "Nous vous présentons <br> - Bleu de Print -",
    it: "Vi presentiamo<br> - Bleu de Print -"
  },
   "how_it_works": {
    en: "How it works?",
    ru: "Как это работает?",
    cz: "Jak to funguje?",
    ua: "Як це працює?",
    es: "¿Cómo funciona?",
    ro: "Cum funcționează?",
    fr: "Comment ça marche ?",
    it: "Come funziona?"
  },
  "we_will_consult_you": {
    en: "We'll consult you",
    ru: "Мы вас проконсультируем",
    cz: "Poradíme vám",
    ua: "Ми вас проконсультуємо",
    es: "Te asesoraremos",
    ro: "Te vom consulta",
    fr: "Nous vous conseillerons",
    it: "Ti consiglieremo"
  },
   "leave_contact_info": {
    en: "Leave your contact info below:",
    ru: "Оставьте свои контактные данные ниже:",
    cz: "Zanechte své kontaktní údaje níže:",
    ua: "Залиште свої контактні дані нижче:",
    es: "Deja tu información de contacto abajo:",
    ro: "Lasă-ți informațiile de contact mai jos:",
    fr: "Laissez vos coordonnées ci-dessous :",
    it: "Lascia i tuoi contatti qui sotto:"
  },
  "send_button1": {
    en: "Send",
    ru: "Отправить",
    cz: "Odeslat",
    ua: "Надіслати",
    es: "Enviar",
    ro: "Trimite",
    fr: "Envoyer",
    it: "Invia"
  },
"youre_designer_question": {
    en: "You're designer?",
    ru: "Ты дизайнер?",
    cz: "Jsi designér?",
    ua: "Ти дизайнер?",
    es: "¿Eres diseñador?",
    ro: "Ești designer?",
    fr: "Tu es designer ?",
    it: "Sei un designer?"
  },
   "earn_design_partnership": {
    en: "Earn on making design and producing it for client with us. We're sharing up to 30% of profit with our partnership design studios around Europe.",
    ru: "Зарабатывай, создавая дизайн и производя его для клиента вместе с нами. Мы делимся до 30% прибыли с нашими партнёрскими дизайн-студиями по всей Европе.",
    cz: "Vydělávej navrhováním a výrobou pro klienty s námi. Sdílíme až 30 % zisku s našimi partnerskými designovými studii po celé Evropě.",
    ua: "Заробляй, створюючи дизайн і виробляючи його для клієнта разом з нами. Ми ділимося до 30% прибутку з нашими партнерськими дизайн-студіями по всій Європі.",
    es: "Gana diseñando y produciendo para clientes con nosotros. Compartimos hasta el 30% de las ganancias con nuestros estudios de diseño asociados en toda Europa.",
    ro: "Câștigă realizând design și producând pentru clienți împreună cu noi. Împărțim până la 30% din profit cu studiourile noastre partenere din toată Europa.",
    fr: "Gagnez en concevant et en produisant pour des clients avec nous. Nous partageons jusqu'à 30 % des bénéfices avec nos studios de design partenaires en Europe.",
    it: "Guadagna creando design e producendo per i clienti con noi. Condividiamo fino al 30% dei profitti con i nostri studi di design partner in tutta Europa."
  },
  "contact_via": {
  en: "Contact us via:<br><strong>bleucoop@icloud.com",
  ru: "Свяжитесь с нами через:<br><strong>bleucoop@icloud.com",
  cz: "Kontaktujte nás přes:<br><strong>bleucoop@icloud.com",
  ua: "Зв’яжіться з нами через:<br><strong>bleucoop@icloud.com",
  es: "Contáctanos vía:<br><strong>bleucoop@icloud.com",
  ro: "Contactează-ne prin:<br><strong>bleucoop@icloud.com",
  fr: "Contactez-nous via :<br><strong>bleucoop@icloud.com",
  it: "Contattaci tramite:<br><strong>bleucoop@icloud.com"
},
"how_to_receive_sample": {
  en: "How to receive your free sample?",
  ru: "Как получить бесплатный образец?",
  cz: "Jak získat vzorek zdarma?",
  ua: "Як отримати безкоштовний зразок?",
  es: "¿Cómo recibir tu muestra gratuita?",
  ro: "Cum să primești mostra gratuită?",
  fr: "Comment recevoir votre échantillon gratuit ?",
  it: "Come ricevere il tuo campione gratuito?"
},
"sample_description": {
  en: `After getting to know your company, we can offer to get acquainted with the quality and compliance with the expected product of your first samples, depending on the complexity of production.
  <br><br>
  You can receive it by courier service at your expense or get acquainted with the provided photo and video material.`,
  
  ru: `После знакомства с вашей компанией мы можем предложить ознакомиться с качеством и соответствием ожидаемому продукту на основе первых образцов, в зависимости от сложности производства.
  <br><br>
  Вы можете получить образцы курьерской доставкой за ваш счет или ознакомиться с предоставленными фото и видеоматериалами.`,
  
  cz: `Po seznámení s vaší společností vám můžeme nabídnout možnost seznámit se s kvalitou a shodou s očekávaným produktem na základě prvních vzorků, v závislosti na složitosti výroby.
  <br><br>
  Můžete je obdržet kurýrní službou na vlastní náklady nebo se seznámit s poskytnutým foto a video materiálem.`,
  
  ua: `Після знайомства з вашою компанією ми можемо запропонувати ознайомитися з якістю та відповідністю очікуваному продукту за першими зразками, залежно від складності виробництва.
  <br><br>
  Ви можете отримати їх кур'єрською доставкою за власний рахунок або ознайомитися з наданими фото та відеоматеріалами.`,
  
  es: `Después de conocer tu empresa, podemos ofrecerte la posibilidad de evaluar la calidad y la conformidad con el producto esperado a través de las primeras muestras, dependiendo de la complejidad de la producción.
  <br><br>
  Puedes recibirlas mediante un servicio de mensajería a tu cargo o revisar el material fotográfico y de video proporcionado.`,
  
  ro: `După ce cunoaștem compania dumneavoastră, vă putem oferi posibilitatea de a evalua calitatea și conformitatea cu produsul așteptat prin primele mostre, în funcție de complexitatea producției.
  <br><br>
  Le puteți primi prin curier, pe cheltuiala dumneavoastră, sau să vă familiarizați cu materialul foto și video furnizat.`,
  
  fr: `Après avoir fait connaissance avec votre entreprise, nous pouvons proposer de vous familiariser avec la qualité et la conformité au produit attendu à travers les premiers échantillons, selon la complexité de la production.
  <br><br>
  Vous pouvez les recevoir par service de messagerie à vos frais ou consulter les photos et vidéos fournies.`,
  
  it: `Dopo aver conosciuto la tua azienda, possiamo offrirti la possibilità di valutare la qualità e la conformità al prodotto atteso attraverso i primi campioni, a seconda della complessità della produzione.
  <br><br>
  Puoi riceverli tramite corriere a tue spese oppure visionare il materiale fotografico e video fornito.`
},
"contact_manager": {
  en: `Contact our manager: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  ru: `Свяжитесь с нашим менеджером: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  cz: `Kontaktujte našeho manažera: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  ua: `Зв’яжіться з нашим менеджером: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  es: `Contacta con nuestro gerente: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  ro: `Contactați managerul nostru: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  fr: `Contactez notre responsable : <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`,
  it: `Contatta il nostro manager: <br> <strong>bleudeprint@icloud.com</strong> <br> <strong>+44 7777 111888</strong>`
},
"tell_us_about_needs": {
  en: "Tell us about your needs",
  ru: "Расскажите нам о ваших потребностях",
  cz: "Povězte nám o svých potřebách",
  ua: "Розкажіть нам про ваші потреби",
  es: "Cuéntanos sobre tus necesidades",
  ro: "Spuneți-ne despre nevoile dumneavoastră",
  fr: "Parlez-nous de vos besoins",
  it: "Raccontaci delle tue esigenze"
},
"we_can_help": {
  en: "We can help not only with producing an integral part of your brand, <br>but also engage our specialists to help with the work with recognizability and creating exclusive presentation",
  ru: "Мы можем помочь не только с производством неотъемлемой части вашего бренда, <br>но также привлечь наших специалистов для работы над узнаваемостью и созданием эксклюзивной презентации",
  cz: "Můžeme vám pomoci nejen s výrobou nedílné součásti vaší značky, <br>ale také zapojit naše specialisty, kteří vám pomohou s prací na rozpoznatelnosti a tvorbě exkluzivní prezentace",
  ua: "Ми можемо допомогти не тільки з виробництвом невід'ємної частини вашого бренду, <br>але й залучити наших спеціалістів для роботи над впізнаваністю та створенням ексклюзивної презентації",
  es: "Podemos ayudar no solo con la producción de una parte integral de tu marca, <br>sino también involucrar a nuestros especialistas para ayudar con el trabajo de reconocimiento y la creación de una presentación exclusiva",
  ro: "Putem ajuta nu doar cu producerea unei părți integrale a brandului tău, <br>ci și să implicăm specialiștii noștri pentru a ajuta la lucrul cu recunoașterea și crearea unei prezentări exclusive",
  fr: "Nous pouvons vous aider non seulement à produire une partie intégrante de votre marque, <br>mais aussi à engager nos spécialistes pour travailler sur la reconnaissance et créer une présentation exclusive",
  it: "Possiamo aiutarti non solo con la produzione di una parte integrante del tuo brand, <br>ma anche coinvolgere i nostri specialisti per aiutarti nel lavoro di riconoscibilità e nella creazione di una presentazione esclusiva"
},
"free_sample_program1": {
  en: "Free sample program",
  ru: "Программа бесплатных образцов",
  cz: "Program zdarma vzorky",
  ua: "Програма безкоштовних зразків",
  es: "Programa de muestras gratuitas",
  ro: "Program de mostre gratuite",
  fr: "Programme d'échantillons gratuits",
  it: "Programma di campioni gratuiti"
},
"free_sample_info": {
  en: "According to the difficulty of your request, we can help with receiving your first sample presentation for free, so it will be possible to achieve perfection at the mass production stage.",
  ru: "В зависимости от сложности вашего запроса, мы можем помочь вам получить первый образец бесплатно, чтобы на стадии массового производства можно было достичь совершенства.",
  cz: "V závislosti na složitosti vaší žádosti vám můžeme pomoci získat první vzorek zdarma, aby bylo možné dosáhnout dokonalosti ve fázi hromadné výroby.",
  ua: "Залежно від складності вашого запиту, ми можемо допомогти отримати перший зразок безкоштовно, щоб на етапі масового виробництва можна було досягти досконалості.",
  es: "Según la dificultad de su solicitud, podemos ayudarle a recibir su primera muestra de presentación de forma gratuita, para que sea posible lograr la perfección en la etapa de producción en masa.",
  ro: "În funcție de dificultatea cererii dumneavoastră, vă putem ajuta să primiți prima prezentare de probă gratuită, astfel încât să fie posibil să atingeți perfecțiunea în etapa de producție în masă.",
  fr: "En fonction de la difficulté de votre demande, nous pouvons vous aider à recevoir gratuitement votre première présentation d'échantillon, afin qu'il soit possible d'atteindre la perfection lors de la phase de production en série.",
  it: "A seconda della difficoltà della tua richiesta, possiamo aiutarti a ricevere gratuitamente la tua prima presentazione del campione, in modo che sia possibile raggiungere la perfezione nella fase di produzione di massa."
},
"result11": {
  en: "Result",
ru: "Результат",
cz: "Výsledek",
ua: "Результат",
es: "Resultado",
ro: "Rezultatul",
fr: "Résultat",
it: "Risultato"
},
"last-text": {
  en: "We are here to not only change your routine of working on your brand, we also extend the creative entrepreneurs community and show that we're not just a typography, but a part of each partner's business.",
ru: "Мы здесь не только для того, чтобы изменить ваш рабочий процесс по работе с брендом, но и для того, чтобы расширить сообщество творческих предпринимателей и показать, что мы не просто типография, а часть бизнеса каждого партнера.",
cz: "Jsme zde nejen proto, abychom změnili vaši rutinu při práci na vašem brandu, ale také rozšiřujeme komunitu kreativních podnikatelů a ukazujeme, že nejsme jen typografie, ale součástí podnikání každého partnera.",
ua: "Ми тут не тільки для того, щоб змінити вашу рутину роботи над вашим брендом, а й для того, щоб розширити спільноту творчих підприємців і показати, що ми не просто типографія, а частина бізнесу кожного партнера.",
es: "Estamos aquí no solo para cambiar tu rutina al trabajar en tu marca, sino también para ampliar la comunidad de emprendedores creativos y demostrar que no somos solo una tipografía, sino parte del negocio de cada socio.",
ro: "Suntem aici nu doar pentru a schimba rutina de lucru la brandul tău, ci și pentru a extinde comunitatea antreprenorilor creativi și pentru a arăta că nu suntem doar o tipografie, ci o parte din afacerea fiecărui partener.",
fr: "Nous sommes ici non seulement pour changer votre routine de travail sur votre marque, mais aussi pour étendre la communauté des entrepreneurs créatifs et montrer que nous ne sommes pas seulement une typographie, mais une partie du business de chaque partenaire.",
it: "Siamo qui non solo per cambiare la tua routine di lavoro sul tuo brand, ma anche per estendere la comunità degli imprenditori creativi e dimostrare che non siamo solo una tipografia, ma una parte del business di ogni partner."
},


    // Добавь сюда другие ключи с переводами
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

  changeLang(); // Запустить при загрузке
});
