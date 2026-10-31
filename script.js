// Translation dictionary. Keep reviewer changes grouped here.
const translations = {
  EN: {
    badge: 'Translation pending review',
    glossary: { evidence: 'evidence-based medicine' },
    nav: { about: 'About', services: 'Services', team: 'Team', organisations: 'For Organisations', contact: 'Contact' },
    actions: { appointment: 'Request an appointment <span aria-hidden="true">↗</span>', discover: 'Discover MercyMed <span aria-hidden="true">↓</span>', consultation: 'Request a consultation ↗', talk: 'Talk to our team <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Private medical centre · Bishkek', title: 'Evidence-based care for <span>the whole family.</span>', intro: 'Modern medical knowledge, international experience and a human approach — all in one place.', cardTitle: 'Care that listens.', cardText: 'From first question to next step.' },
    values: { evidenceText: 'Clear recommendations grounded in modern medical knowledge.', family: 'One family, one place', familyText: 'Adult and pediatric care with specialists who coordinate.', outreach: 'Care beyond the clinic', outreachText: 'Charitable mobile clinics are at the heart of MercyMed.' },
    about: { eyebrow: '01 / About MercyMed', title: 'Medicine with a <span>long view.</span>', text1: 'MercyMed is a private outpatient medical centre in Bishkek, providing high-quality care based on modern medical knowledge and international experience.', text2: 'Our story began with mobile clinics serving communities in different regions for over 10 years. The Bishkek clinic opened in October 2023.', work: 'How we work', workText: 'We focus on the right questions, fewer unnecessary tests and a clear next step.' },
    services: { eyebrow: '02 / What we do', title: 'Care built around <span>your needs.</span>', intro: 'From daily consultations to preventive check-ups, our team helps you understand what comes next.', daily: 'Daily consultations', dailyText: 'Consultations and reports in Kyrgyz, Russian, English, Chinese, German and French. Adult and pediatric care in one centre.', preventive: 'Preventive check-ups', preventiveText: 'Growth and development, vision screening, EKG, anemia and diabetes screening, and laboratory tests.', additional: 'Additional services', additionalText: 'Ultrasound, EKG, vision testing, audiometry and birth preparation courses by a certified doula.', pending: 'Laboratory and certificate wording awaiting client confirmation.' },
    language: { title: 'Care in your language', text: 'We offer consultations and reports in six languages. Website translations are available in English, Russian and Kyrgyz.' },
    team: { eyebrow: '03 / The people behind the care', title: 'Meet the <span>MercyMed team.</span>', intro: 'Experienced specialists and a shared belief that good medicine starts with listening.' },
    org: { eyebrow: '04 / For organisations', title: 'Healthier teams make <span>stronger communities.</span>', intro: 'MercyMed works with schools, companies, embassies and medical education partners.', staff: 'Staff check-ups', staffText: 'Yearly medical check-ups designed for your organisation.', students: 'Student deals', studentsText: 'Special deals for students and partner communities.', training: 'Training & education', trainingText: 'Training for doctors and medical students.' },
    appointment: { eyebrow: '05 / Your next step', title: 'Let’s find the <span>right care.</span>', intro: 'Send us a request and our team can help you choose a consultation.', notice: 'Prototype notice', noticeText: 'This form is a preview. Nothing will be sent.' },
    contact: { eyebrow: '06 / Contact', title: 'We’re here to <span>help.</span>', clinic: 'MercyMed medical centre', location: 'Tunguch microdistrict, near Ayu Grand<br /><small>Approximate location · details awaiting client confirmation</small>' }
  },
  RU: {
    badge: 'Перевод ожидает проверки', glossary: { evidence: 'доказательная медицина' },
    nav: { about: 'О нас', services: 'Услуги', team: 'Команда', organisations: 'Для организаций', contact: 'Контакты' },
    actions: { appointment: 'Записаться на приём <span aria-hidden="true">↗</span>', discover: 'Узнать о MercyMed <span aria-hidden="true">↓</span>', consultation: 'Запросить консультацию ↗', talk: 'Связаться с нами <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Частный медицинский центр · Бишкек', title: 'Доказательная медицина для <span>всей семьи.</span>', intro: 'Современные медицинские знания, международный опыт и человеческий подход — в одном месте.', cardTitle: 'Забота, которая слушает.', cardText: 'От первого вопроса до следующего шага.' },
    values: { evidenceText: 'Понятные рекомендации на основе современных медицинских знаний.', family: 'Одна семья — одно место', familyText: 'Помощь взрослым и детям у специалистов, которые работают сообща.', outreach: 'Забота за пределами клиники', outreachText: 'Благотворительные мобильные клиники — важная часть MercyMed.' },
    about: { eyebrow: '01 / О MercyMed', title: 'Медицина с <span>долгосрочным взглядом.</span>', text1: 'MercyMed — частный амбулаторный медицинский центр в Бишкеке, который оказывает качественную помощь на основе современных медицинских знаний и международного опыта.', text2: 'Наша история началась с мобильных клиник, которые более 10 лет помогают людям в разных регионах. Клиника в Бишкеке открылась в октябре 2023 года.', work: 'Как мы работаем', workText: 'Мы задаём правильные вопросы, избегаем ненужных обследований и определяем понятный следующий шаг.' },
    services: { eyebrow: '02 / Что мы делаем', title: 'Забота, созданная вокруг <span>ваших потребностей.</span>', intro: 'От ежедневных консультаций до профилактических осмотров — наша команда поможет понять, что делать дальше.', daily: 'Ежедневные консультации', dailyText: 'Консультации и заключения на кыргызском, русском, английском, китайском, немецком и французском языках. Помощь взрослым и детям в одном центре.', preventive: 'Профилактические осмотры', preventiveText: 'Оценка роста и развития, проверка зрения, ЭКГ, скрининг анемии и диабета, лабораторные анализы.', additional: 'Дополнительные услуги', additionalText: 'УЗИ, ЭКГ, проверка зрения, аудиометрия и курсы подготовки к родам с сертифицированной доулой.', pending: 'Формулировки о лаборатории и справках ожидают подтверждения клиента.' },
    language: { title: 'Забота на вашем языке', text: 'Мы проводим консультации и выдаём заключения на шести языках. Сайт доступен на английском, русском и кыргызском.' },
    team: { eyebrow: '03 / Люди, которые заботятся о вас', title: 'Познакомьтесь с <span>командой MercyMed.</span>', intro: 'Опытные специалисты и общее убеждение: хорошая медицина начинается с умения слушать.' },
    org: { eyebrow: '04 / Для организаций', title: 'Здоровые команды создают <span>сильные сообщества.</span>', intro: 'MercyMed сотрудничает со школами, компаниями, посольствами и образовательными медицинскими партнёрами.', staff: 'Осмотры сотрудников', staffText: 'Ежегодные медицинские осмотры для вашей организации.', students: 'Предложения для студентов', studentsText: 'Специальные условия для студентов и партнёрских сообществ.', training: 'Обучение и образование', trainingText: 'Обучение врачей и студентов-медиков.' },
    appointment: { eyebrow: '05 / Следующий шаг', title: 'Найдём <span>подходящую помощь.</span>', intro: 'Оставьте запрос, и наша команда поможет выбрать консультацию.', notice: 'Прототип', noticeText: 'Эта форма является предварительной. Данные не отправляются.' },
    contact: { eyebrow: '06 / Контакты', title: 'Мы готовы <span>помочь.</span>', clinic: 'Медицинский центр MercyMed', location: 'Микрорайон Тунгуч, рядом с Ayu Grand<br /><small>Примерное расположение · детали ожидают подтверждения клиента</small>' }
  },
  KG: {
    badge: 'Котормо текшерүү алдында турат', glossary: { evidence: 'далилдерге негизделген медицина' },
    nav: { about: 'Биз жөнүндө', services: 'Кызматтар', team: 'Команда', organisations: 'Уюмдар үчүн', contact: 'Байланыш' },
    actions: { appointment: 'Кабыл алууга жазылуу <span aria-hidden="true">↗</span>', discover: 'MercyMed жөнүндө <span aria-hidden="true">↓</span>', consultation: 'Кеңеш алууга суроо жөнөтүү ↗', talk: 'Биздин команда менен байланышуу <span aria-hidden="true">↗</span>' },
    hero: { eyebrow: 'Жеке медициналык борбор · Бишкек', title: 'Бүт үй-бүлө үчүн <span>далилдерге негизделген кам көрүү.</span>', intro: 'Заманбап медициналык билим, эл аралык тажрыйба жана адамга багытталган мамиле — баары бир жерде.', cardTitle: 'Уккан кам көрүү.', cardText: 'Биринчи суроодон кийинки кадамга чейин.' },
    values: { evidenceText: 'Заманбап медициналык билимге таянган түшүнүктүү сунуштар.', family: 'Бир үй-бүлө — бир жер', familyText: 'Чоңдорго жана балдарга биргелешип иштеген адистер жардам берет.', outreach: 'Клиникадан тышкары кам көрүү', outreachText: 'Кайрымдуулук мобилдик клиникалары MercyMedдин жүрөгүндө.' },
    about: { eyebrow: '01 / MercyMed жөнүндө', title: 'Медицинада <span>узак мөөнөттүү көз караш.</span>', text1: 'MercyMed — Бишкектеги заманбап медициналык билимге жана эл аралык тажрыйбага негизделген сапаттуу жардам көрсөткөн жеке амбулатордук борбор.', text2: 'Биздин тарыхыбыз ар кайсы аймактардагы жамааттарга 10 жылдан ашык жардам берген мобилдик клиникалардан башталган. Бишкек клиникасы 2023-жылдын октябрында ачылган.', work: 'Кантип иштейбиз', workText: 'Туура суроолорго көңүл буруп, керексиз текшерүүлөрдү азайтып, кийинки кадамды так түшүндүрөбүз.' },
    services: { eyebrow: '02 / Биз эмне кылабыз', title: 'Сиздин <span>муктаждыктарыңызга ылайык кам көрүү.</span>', intro: 'Күнүмдүк кеңештен профилактикалык текшерүүгө чейин командабыз кийинки кадамды түшүнүүгө жардам берет.', daily: 'Күнүмдүк кеңештер', dailyText: 'Кыргыз, орус, англис, кытай, немис жана француз тилдеринде кеңеш жана корутунду. Чоңдорго жана балдарга бир борбордо жардам.', preventive: 'Профилактикалык текшерүүлөр', preventiveText: 'Өсүү жана өнүгүү, көрүү, ЭКГ, аз кандуулук жана диабет боюнча скрининг, лабораториялык анализдер.', additional: 'Кошумча кызматтар', additionalText: 'УЗИ, ЭКГ, көрүү текшерүүсү, аудиометрия жана сертификатталган дула менен төрөткө даярдык курстары.', pending: 'Лаборатория жана маалымкаттар тууралуу маалымат кардардын тастыктоосун күтүүдө.' },
    language: { title: 'Сиздин тилиңиздеги кам көрүү', text: 'Биз алты тилде кеңеш берип, корутунду чыгарабыз. Сайт англис, орус жана кыргыз тилдеринде жеткиликтүү.' },
    team: { eyebrow: '03 / Кам көргөн адамдар', title: 'MercyMed <span>командасы менен таанышыңыз.</span>', intro: 'Тажрыйбалуу адистер жана жакшы медицина угуу жөндөмүнөн башталат деген жалпы ишеним.' },
    org: { eyebrow: '04 / Уюмдар үчүн', title: 'Дени сак командалар <span>күчтүү коомдорду түзөт.</span>', intro: 'MercyMed мектептер, компаниялар, элчиликтер жана медициналык билим берүү өнөктөштөрү менен иштейт.', staff: 'Кызматкерлерди текшерүү', staffText: 'Уюмуңуз үчүн жылдык медициналык текшерүүлөр.', students: 'Студенттер үчүн сунуштар', studentsText: 'Студенттерге жана өнөктөш жамааттарга атайын шарттар.', training: 'Окутуу жана билим берүү', trainingText: 'Дарыгерлерди жана медицина студенттерин окутуу.' },
    appointment: { eyebrow: '05 / Кийинки кадам', title: '<span>Туура жардамды</span> табалы.', intro: 'Суроо жөнөтүңүз, командабыз кеңешти тандоого жардам берет.', notice: 'Прототип', noticeText: 'Бул форма алдын ала көрүү үчүн. Эч нерсе жөнөтүлбөйт.' },
    contact: { eyebrow: '06 / Байланыш', title: 'Биз <span>жардам берүүгө даярбыз.</span>', clinic: 'MercyMed медициналык борбору', location: 'Тунгуч кичи району, Ayu Grand жанында<br /><small>Болжолдуу жайгашкан жер · маалымат кардардын тастыктоосун күтүүдө</small>' }
  }
};

const getValue = (language, key) => key.split('.').reduce((value, part) => value?.[part], translations[language]);
const savedLanguage = localStorage.getItem('mercymed-language');
let currentLanguage = translations[savedLanguage] ? savedLanguage : 'EN';

function updateLanguage(language) {
  currentLanguage = translations[language] ? language : 'EN';
  localStorage.setItem('mercymed-language', currentLanguage);
  document.documentElement.lang = currentLanguage === 'KG' ? 'ky' : currentLanguage.toLowerCase();
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(currentLanguage, element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-translation-badge]').forEach((badge) => {
    badge.textContent = translations[currentLanguage].badge;
  });
  document.querySelectorAll('[data-glossary-key]').forEach((term) => {
    term.textContent = translations[currentLanguage].glossary[term.dataset.glossaryKey];
    term.title = term.textContent;
  });
  document.querySelectorAll('[data-language]').forEach((option) => {
    const active = option.dataset.language === currentLanguage;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('[data-language]').forEach((option) => {
  option.addEventListener('click', () => updateLanguage(option.dataset.language));
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#appointment-form');
const formMessage = document.querySelector('#form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll('[required]')];
  const missingField = requiredFields.find((field) => !field.value.trim());
  if (missingField) {
    const label = form.querySelector(`label[for="${missingField.id}"]`);
    formMessage.textContent = currentLanguage === 'RU' ? `Введите ${label?.textContent.replace(' *', '') || 'это поле'}.` : currentLanguage === 'KG' ? `${label?.textContent.replace(' *', '') || 'бул талааны'} толтуруңуз.` : `Please enter ${label?.textContent.replace(' *', '') || 'this field'}.`;
    formMessage.className = 'form-message error';
    missingField.focus();
    return;
  }
  const data = new FormData(form);
  const doctor = data.get('doctor') || (currentLanguage === 'RU' ? 'Общая консультация' : currentLanguage === 'KG' ? 'Жалпы кеңеш' : 'General consultation');
  formMessage.textContent = currentLanguage === 'RU' ? `Прототип: данные не отправлены. Предварительный запрос для ${data.get('name')} ${data.get('surname')} — ${doctor}.` : currentLanguage === 'KG' ? `Прототип: маалымат жөнөтүлгөн жок. ${data.get('name')} ${data.get('surname')} үчүн алдын ала суроо — ${doctor}.` : `Prototype: nothing was sent. Preview request for ${data.get('name')} ${data.get('surname')} — ${doctor}.`;
  formMessage.className = 'form-message success';
});

updateLanguage(currentLanguage);
