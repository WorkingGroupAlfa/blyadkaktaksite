  // Находим все кнопки с классом "openPopup5"
  const openBtns = document.querySelectorAll('.openPopup5');
  // Находим все попапы с классом "popup5"
  const popups = document.querySelectorAll('.popup5');
  
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
  const popup = document.querySelector(".popup5"); // 👈 меняем только это
  let currentLang = localStorage.getItem("language") || checkBrowserLang() || "en";

  const translations = {
    "home__button2": {
      en: "Home",
      ru: "Главная",
      cz: "Domů",
      ua: "Головна",
      es: "Inicio",
      ro: "Acasă",
      fr: "Accueil",
      it: "Home",
    },
    "about__button2": {
      en: "About",
      ru: "О нас",
      cz: "O nás",
      ua: "Про нас",
      es: "Sobre nosotros",
      ro: "Despre noi",
      fr: "À propos",
      it: "Chi siamo",
    },
    "blog__button2": {
      en: "Blog",
      ru: "Блог",
      cz: "Blog",
      ua: "Блог",
      es: "Blog",
      ro: "Blog",
      fr: "Blog",
      it: "Blog",
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
    "about-text-main": {
      en: `We are a passionate team of designers, technologists, and creatives with deep roots in the typography industry. After
            years of working across various facets of the field, we came together with one goal: to make typography simpler,
            smarter, and more accessible — without compromising on quality or creativity.
            <br><br>
            As a typographic company with manufacturing centers in both Europe and China, we combine global reach with local
            precision. Our infrastructure allows us to offer high-quality production at competitive prices, giving our clients the
            best of both worlds — premium results without the premium cost.
            <br><br>
            Creative & Collaborative: We don’t just deliver typography — we collaborate to create it. From concept to completion, we
            work closely with our clients to bring bold ideas to life.
            <br><br>
            Reliable Production: With state-of-the-art facilities and expert teams, we ensure every detail is executed with
            precision.
            <br><br>
            Simplified Process: We make the complex world of typography easy to navigate, so you can focus on your vision while we
            handle the rest.
            <br><br>
            Whether you’re looking for custom type design, large-scale production, or something completely unique, we’re here to
            help. We’re creative, friendly, and ready to collaborate.
            <br><br>
            Let’s make something great — together.`,
      ru: `Мы — команда увлечённых дизайнеров, технологов и креативных людей с глубокими корнями в индустрии типографики. После
            многих лет работы в различных аспектах этой области мы объединились с одной целью: сделать типографику проще,
            умнее и доступнее — без компромиссов в качестве или креативности.
            <br><br>
            Как типографская компания с производственными центрами в Европе и Китае, мы объединяем глобальный охват с местной
            точностью. Наша инфраструктура позволяет нам предлагать продукцию высокого качества по конкурентоспособным ценам,
            давая нашим клиентам лучшее из обоих миров — премиальные результаты без премиальной стоимости.
            <br><br>
            Креативность и сотрудничество: мы не просто предоставляем типографику — мы сотрудничаем, чтобы создать её. От концепции
            до завершения, мы работаем в тесном контакте с нашими клиентами, чтобы воплотить смелые идеи в жизнь.
            <br><br>
            Надежное производство: с современными производственными мощностями и опытными командами мы обеспечиваем точность в каждом элементе.
            <br><br>
            Упрощённый процесс: мы делаем сложный мир типографики простым для навигации, чтобы вы могли сосредоточиться на своей
            идее, а мы займёмся остальным.
            <br><br>
            Независимо от того, ищете ли вы индивидуальный дизайн, крупномасштабное производство или что-то совершенно
            уникальное, мы готовы помочь.
            <br><br>
            Давайте сделаем что-то великое — вместе.`,
      cz: `Jsme vášnivý tým designérů, technologů a kreativních lidí s hlubokými kořeny v oblasti typografie. Po letech
            práce v různých oblastech jsme se spojili s jedním cílem: udělat typografii jednodušší, chytřejší a přístupnější —
            aniž bychom obětovali kvalitu nebo kreativitu.
            <br><br>
            Jako typografická společnost s výrobními centry v Evropě a Číně kombinujeme globální dosah s místní precizností.
            Naše infrastruktura nám umožňuje nabízet vysoce kvalitní výrobu za konkurenceschopné ceny, což našim klientům dává
            nejlepší z obou světů — špičkové výsledky bez prémiové ceny.
            <br><br>
            Kreativní a spolupracující: Nejenom dodáváme typografii — spolupracujeme na její tvorbě. Od konceptu až po
            realizaci pracujeme těsně s našimi klienty na tom, abychom přivedli odvážné nápady k životu.
            <br><br>
            Spolehlivá výroba: S moderními zařízeními a odbornými týmy zajišťujeme, že každý detail je proveden s precizností.
            <br><br>
            Zjednodušený proces: Děláme složitý svět typografie snadno navigovatelný, abyste se mohli soustředit na svou vizi,
            zatímco se postaráme o zbytek.
            <br><br>
            Ať už hledáte zakázkový návrh písma, výrobu ve velkém měřítku nebo něco zcela unikátního, jsme tady, abychom vám
            pomohli.
            <br><br>
            Vytvořme něco skvělého — společně.`,
      ua: `Ми — команда пристрасних дизайнерів, технологів та креативних людей з глибокими коренями в індустрії типографії. Після
          багатьох років роботи в різних аспектах цієї галузі ми об'єдналися з єдиною метою: зробити типографіку простішою,
          розумнішою та доступнішою — без компромісів у якості чи креативності.
          <br><br>
          Як типографська компанія з виробничими центрами в Європі та Китаї, ми поєднуємо глобальний охват з місцевою
          точністю. Наша інфраструктура дозволяє нам пропонувати продукцію високої якості за конкурентними цінами,
          надаючи нашим клієнтам найкраще з обох світів — преміальні результати без преміальних витрат.
          <br><br>
          Креативність і співпраця: ми не просто надаємо типографіку — ми співпрацюємо, щоб створити її. Від концепції
          до завершення ми працюємо в тісному контакті з нашими клієнтами, щоб втілити сміливі ідеї в життя.
          <br><br>
          Надійне виробництво: із сучасними виробничими потужностями та досвідченими командами ми забезпечуємо точність
          в кожній деталі.
          <br><br>
          Спрощений процес: ми робимо складний світ типографії легким для навігації, щоб ви могли зосередитись на своїй
          візії, а ми займемося рештою.
          <br><br>
          Чи шукаєте ви індивідуальний дизайн, масштабне виробництво або щось абсолютно унікальне, ми готові вам
          допомогти.
          <br><br>
          Давайте створимо щось велике — разом.`,
      es: `Somos un equipo apasionado de diseñadores, tecnólogos y creativos con raíces profundas en la industria de la tipografía. Después
          de años de trabajo en varios aspectos del campo, nos unimos con un solo objetivo: hacer la tipografía más sencilla,
          más inteligente y más accesible, sin comprometer la calidad ni la creatividad.
          <br><br>
          Como empresa tipográfica con centros de fabricación tanto en Europa como en China, combinamos el alcance global con
          la precisión local. Nuestra infraestructura nos permite ofrecer una producción de alta calidad a precios competitivos,
          brindando a nuestros clientes lo mejor de ambos mundos: resultados premium sin el costo premium.
          <br><br>
          Creatividad y colaboración: no solo entregamos tipografía, colaboramos para crearla. Desde el concepto hasta la
          finalización, trabajamos de cerca con nuestros clientes para hacer realidad ideas audaces.
          <br><br>
          Producción confiable: con instalaciones de vanguardia y equipos expertos, nos aseguramos de que cada detalle se ejecute
          con precisión.
          <br><br>
          Proceso simplificado: hacemos que el complejo mundo de la tipografía sea fácil de navegar, para que puedas concentrarte
          en tu visión mientras nosotros nos encargamos del resto.
          <br><br>
          Ya sea que estés buscando un diseño de tipografía personalizado, producción a gran escala o algo completamente único,
          estamos aquí para ayudarte.
          <br><br>
          Hagamos algo genial, juntos.`,
      ro: `Suntem o echipă pasionată de designeri, tehnologii și creativi cu rădăcini adânci în industria tipografiei. După
          mulți ani de lucru în diverse domenii, ne-am unit cu un singur scop: să facem tipografia mai simplă,
          mai inteligentă și mai accesibilă, fără a compromite calitatea sau creativitatea.
          <br><br>
          Ca firmă tipografică cu centre de producție atât în Europa, cât și în China, combinăm acoperirea globală cu
          precizia locală. Infrastructura noastră ne permite să oferim producție de înaltă calitate la prețuri competitive,
          oferind clienților noștri cele mai bune rezultate din ambele lumi: rezultate premium fără costuri premium.
          <br><br>
          Creativitate și colaborare: nu doar livrăm tipografie, colaborăm pentru a o crea. De la concept la finalizare,
          lucrăm îndeaproape cu clienții noștri pentru a da viață ideilor îndrăznețe.
          <br><br>
          Producție de încredere: cu facilități de ultimă generație și echipe de experți, ne asigurăm că fiecare detaliu
          este realizat cu precizie.
          <br><br>
          Proces simplificat: facem lumea complexă a tipografiei ușor de navigat, astfel încât să te poți concentra
          pe viziunea ta, în timp ce noi ne ocupăm de restul.
          <br><br>
          Indiferent dacă cauți design personalizat de tipografie, producție la scară mare sau ceva complet unic,
          suntem aici pentru a te ajuta.
          <br><br>
          Hai să facem ceva grozav, împreună.`,
      fr: `Nous sommes une équipe passionnée de designers, technologues et créatifs, avec des racines profondes dans l'industrie
          de la typographie. Après des années de travail dans divers domaines, nous nous sommes réunis avec un seul objectif :
          rendre la typographie plus simple, plus intelligente et plus accessible, sans compromettre la qualité ni la créativité.
          <br><br>
          En tant qu'entreprise typographique avec des centres de fabrication en Europe et en Chine, nous combinons une portée
          mondiale avec une précision locale. Notre infrastructure nous permet d'offrir une production de haute qualité à des prix
          compétitifs, offrant à nos clients le meilleur des deux mondes : des résultats premium sans le coût premium.
          <br><br>
          Créativité et collaboration : nous ne livrons pas simplement de la typographie, nous collaborons pour la créer. Du concept
          à la réalisation, nous travaillons en étroite collaboration avec nos clients pour donner vie à des idées audacieuses.
          <br><br>
          Production fiable : avec des installations de pointe et des équipes d'experts, nous nous assurons que chaque détail soit
          exécuté avec précision.
          <br><br>
          Processus simplifié : nous rendons le monde complexe de la typographie facile à naviguer, afin que vous puissiez vous
          concentrer sur votre vision pendant que nous nous occupons du reste.
          <br><br>
          Que vous recherchiez un design typographique personnalisé, une production à grande échelle ou quelque chose de totalement
          unique, nous sommes là pour vous aider.
          <br><br>
          Créons quelque chose de génial, ensemble.`,
      it: `Siamo un team appassionato di designer, tecnologhi e creativi con radici profonde nell'industria della tipografia. Dopo
          anni di lavoro in vari settori, ci siamo uniti con un unico obiettivo: rendere la tipografia più semplice,
          più intelligente e più accessibile, senza compromettere la qualità o la creatività.
          <br><br>
          Come azienda tipografica con centri di produzione sia in Europa che in Cina, combiniamo una portata globale con
          precisione locale. La nostra infrastruttura ci consente di offrire produzione di alta qualità a prezzi competitivi,
          dando ai nostri clienti il meglio di entrambi i mondi: risultati premium senza il costo premium.
          <br><br>
          Creatività e collaborazione: non consegniamo semplicemente tipografia, collaboriamo per crearla. Dal concetto alla
          realizzazione, lavoriamo a stretto contatto con i nostri clienti per dare vita a idee audaci.
          <br><br>
          Produzione affidabile: con strutture all'avanguardia e team di esperti, ci assicuriamo che ogni dettaglio venga eseguito
          con precisione.
          <br><br>
          Processo semplificato: rendiamo il complesso mondo della tipografia facile da navigare, così puoi concentrarti
          sulla tua visione mentre noi ci occupiamo del resto.
          <br><br>
          Che tu stia cercando un design tipografico personalizzato, una produzione su larga scala o qualcosa di completamente unico,
          siamo qui per aiutarti.
          <br><br>
          Creiamo qualcosa di grandioso, insieme.`
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