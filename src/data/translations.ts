import { IMAGES, PORTRAITS } from '@/data/content';

export type LanguageCode = 'uz' | 'ru' | 'en';

export const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: 'uz', label: "O'zbek" },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
];

export interface TranslationType {
  navLinks: { id: string; label: string }[];
  ctaNav: string;
  schoolInfo: {
    name: string;
    shortName: string;
    address: string;
    phone: string;
    phone2: string;
    email: string;
    telegram: string;
    instagram: string;
    youtube: string;
    hours: string;
    director: string;
    directorTitle: string;
  };
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollDown: string;
  };
  story: {
    label: string;
    heading: string;
    description: string;
    concepts: { word: string; desc: string; image: string }[];
  };
  about: {
    label: string;
    heading: string;
    desc1: string;
    desc2: string;
    estLabel: string;
    directorLabel: string;
    values: { iconName: 'Target' | 'Heart' | 'Eye' | 'Sparkles'; title: string; desc: string }[];
    statsLabel: string;
    statsHeading: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  dayTimeline: {
    label: string;
    heading: string;
    description: string;
    schedule: { time: string; title: string; desc: string; image: string; icon: string }[];
  };
  students: {
    label: string;
    heading: string;
    description: string;
    categories: { title: string; desc: string; image: string; icon: string }[];
    starsLabel: string;
    starsHeading: string;
    starsSub: string;
    stars: { name: string; grade: string; achievement: string; competition: string; result: string; image: string }[];
  };
  teachers: {
    label: string;
    heading: string;
    description: string;
    teachersList: { name: string; subject: string; position: string; quote: string; image: string }[];
  };
  todayAndHistory: {
    todayLabel: string;
    todayHeading: string;
    todayEvents: { time: string; title: string; desc: string; tag: string; image: string }[];
    historyLabel: string;
    historyHeading: string;
    historyTimeline: { year: string; title: string; desc: string; image: string }[];
  };
  gallery: {
    label: string;
    heading: string;
    description: string;
    allCategory: string;
    categories: string[];
    images: { src: string; category: string; title: string; span: string }[];
  };
  schoolMap: {
    label: string;
    heading: string;
    description: string;
    locations: { id: string; name: string; desc: string; image: string; icon: string; x: number; y: number }[];
  };
  parents: {
    label: string;
    heading: string;
    description: string;
    infoList: { title: string; icon: string; content: string }[];
  };
  graduates: {
    label: string;
    heading: string;
    list: { name: string; year: string; profession: string; university: string; story: string; image: string }[];
  };
  futureCareers: {
    label: string;
    heading: string;
    subjectsLabel: string;
    skillsLabel: string;
    careers: { name: string; icon: string; desc: string; subjects: string; skills: string; message: string }[];
  };
  studentVoices: {
    label: string;
    heading: string;
    voices: { name: string; quote: string; image: string; topic: string }[];
  };
  videoIntro: {
    label: string;
    heading: string;
    description: string;
    buttonText: string;
  };
  faq: {
    label: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  news: {
    label: string;
    heading: string;
    readMore: string;
    items: { date: string; category: string; title: string; excerpt: string; image: string }[];
  };
  contact: {
    label: string;
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successMsg: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    hoursTitle: string;
  };
  finalCta: {
    heading: string;
    description: string;
    buttonText: string;
  };
  footer: {
    tagline: string;
    rights: string;
    exploreTitle: string;
    contactsTitle: string;
  };
}

export const translations: Record<LanguageCode, TranslationType> = {
  uz: {
    navLinks: [
      { id: 'home', label: 'Bosh sahifa' },
      { id: 'about', label: 'Maktab haqida' },
      { id: 'students', label: "O'quvchilar" },
      { id: 'teachers', label: 'Ustozlar' },
      { id: 'achievements', label: 'Yutuqlar' },
      { id: 'news', label: 'Yangiliklar' },
      { id: 'gallery', label: 'Galereya' },
      { id: 'contact', label: 'Aloqa' },
    ],
    ctaNav: 'Maktab bilan tanishing',
    schoolInfo: {
      name: "13-sonli umumiy o'rta ta'lim maktabi",
      shortName: '13-MAKTAB',
      address: "Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi 108-uy",
      phone: '+998 71 234 56 78',
      phone2: '+998 71 234 56 79',
      email: 'info@13maktab.uz',
      telegram: 't.me/maktab13',
      instagram: 'instagram.com/maktab13',
      youtube: 'youtube.com/@maktab13',
      hours: 'Dushanba–Shanba, 08:00–17:00',
      director: 'Karimov Anvar Sadriddinovich',
      directorTitle: 'Maktab direktori',
    },
    hero: {
      badge: "13-SONLI UMUMIY O'RTA TA'LIM MAKTABI",
      headingLine1: 'Kelajakni kutmaymiz.',
      headingLine2: 'Uni shu yerda quramiz.',
      description: "27 yildan beri bilim berib, inson tarbiyalab, kelajakni qurib kelayotgan maktab. Bu faqat bino emas — bu xotiralar, yutuqlar va orzular boshlanadigan joy.",
      ctaPrimary: 'Maktabni tanish',
      ctaSecondary: 'Bizning hikoyamiz',
      scrollDown: 'Pastga',
    },
    story: {
      label: 'Hikoya',
      heading: 'Maktab — bu faqat devorlar emas.',
      description: "Bu o'quvchilar, ustozlar, bilim, do'stlik, yutuqlar va kelajak. Har bir tushuncha ortida butun bir dunyo yashirin.",
      concepts: [
        { word: "O'quvchi", desc: "Har bir o'quvchi — bu o'ziga ishongan, savol berishdan qo'rqmaydigan, kelajagini quradigan yosh inson.", image: IMAGES.classroom2 },
        { word: 'Ustoz', desc: "Ustoz — bilim manbai emas, balki yo'l ko'rsatuvchi yulduzdir. U o'rgatmaydi, balki ilhomlantiradi.", image: IMAGES.classroom3 },
        { word: 'Bilim', desc: "Bu yerda bilim test uchun emas, hayot uchun o'rganiladi. Har bir dars — kelajakka qo'yilgan qadam.", image: IMAGES.library1 },
        { word: "Do'stlik", desc: "Maktabdagi do'stlik butun umr davom etadi. Bu yerda topilgan odamlar hayoting bo'ladi.", image: IMAGES.studentsGroup },
        { word: 'Yutuq', desc: "G'alaba — natija emas, jarayondir. Har bir mukofot ortida kunlab mehnat turadi.", image: IMAGES.event2 },
        { word: 'Kelajak', desc: "Biz kelajakni kutmaymiz. Uni shu yerda, shu sinflarda, shu o'quvchilar bilan quramiz.", image: IMAGES.classroom1 },
      ],
    },
    about: {
      label: 'Maktab haqida',
      heading: "Bilim, inson va kelajak uyg'unligi.",
      desc1: "1998-yilda tashkil topganidan beri 13-maktab bilim berishni emas, inson tarbiyalashni o'z oldiga maqsad qilib qo'ygan. Bu yerda o'quvchilar nafaqat darsliklarni o'rganadilar, balki o'zlarini, atrofni va kelajakni kashf etadilar.",
      desc2: "Bizning missiyamiz — har bir o'quvchining ichida yashirin iste'dodni uyg'otish va uni hayotga tayyor, o'ziga ishongan inson qilib tarbiyalash.",
      estLabel: 'Maktab tashkil topgan yil',
      directorLabel: 'Maktab direktori',
      values: [
        { iconName: 'Target', title: 'Maqsad', desc: "Har bir o'quvchining potensialini to'liq ochish." },
        { iconName: 'Heart', title: "G'amxo'rlik", desc: "Har bir o'quvchiga individual yondashuv." },
        { iconName: 'Eye', title: 'Ochiqlik', desc: 'Ota-onalar va jamoatchilik bilan shaffof munosabat.' },
        { iconName: 'Sparkles', title: 'Tafakkur', desc: 'Bilim nafaqat faktlar, balki tafakkur madaniyati.' },
      ],
      statsLabel: 'Raqamlarda maktab',
      statsHeading: '27 yillik tarix birgalikda qurilgan.',
      stats: [
        { value: 1000, suffix: '+', label: "O'quvchi" },
        { value: 80, suffix: '+', label: 'Ustoz' },
        { value: 32, suffix: '', label: 'Sinf' },
        { value: 27, suffix: '', label: 'Yillik tarix' },
        { value: 150, suffix: '+', label: 'Yutuqlar' },
      ],
    },
    dayTimeline: {
      label: 'Bir kunimiz',
      heading: "13-maktabdagi bir kun",
      description: "Tongdan kechgacha — har bir soat o'z hikoyasiga ega. Maktab kunini vaqt bo'yicha kuzating.",
      schedule: [
        { time: '07:30', title: 'Maktabga kelish', desc: "O'quvchilar maktabga keladi, sinflar tayyorlanadi, tonggi mashq va tushunchalar almashiniladi.", image: IMAGES.schoolBuilding, icon: 'Sunrise' },
        { time: '08:00', title: 'Darslar boshlanadi', desc: 'Birinchi qator darslari boshlanadi. Matematika, ona tili, adabiyot va tabiiy fanlar.', image: IMAGES.classroom1, icon: 'BookOpen' },
        { time: '10:30', title: 'Tanaffus', desc: "Katta tanaffus. O'quvchilar hordiq chiqaradi, ovqatlanadi va do'stlari bilan muloqot qiladi.", image: IMAGES.classroom4, icon: 'Coffee' },
        { time: '11:00', title: "Amaliy mashg'ulotlar", desc: 'Laboratoriya ishlari, IT darsi, tajribalar va guruh loyihalari olib boriladi.', image: IMAGES.lab1, icon: 'FlaskConical' },
        { time: '13:00', title: 'Tushlik', desc: "Maktab oshxonasida issiq ovqat. Sog'lom va to'yimli menyu.", image: IMAGES.classroom6, icon: 'Utensils' },
        { time: '14:00', title: "To'garaklar", desc: "Robototexnika, san'at, sport, kitobxonlik va ilmiy to'garaklar faoliyat yuritadi.", image: IMAGES.art1, icon: 'Palette' },
        { time: '16:00', title: 'Sport va ijod', desc: "Sport zali mashg'ulotlari, ijodiy ustaxonalar va tashqi tadbirlar.", image: IMAGES.sport1, icon: 'Trophy' },
      ],
    },
    students: {
      label: "O'quvchilar",
      heading: "Bizning o'quvchilarimiz",
      description: "Maktabning haqiqiy kuchi — uning o'quvchilarida. Har bir o'quvchi o'z sohasida o'z salohiyatini namoyon qilmoqda. Bu yerda turli yo'nalishlarda o'zini sinab ko'rish imkoniyati bor.",
      categories: [
        { title: 'Fan olimpiadalari', desc: "Matematika, fizika, kimyo, biologiya va informatika bo'yicha respublika va xalqaro olimpiadalarda doimiy ishtirok etamiz.", image: IMAGES.testTaking, icon: 'Medal' },
        { title: 'IT & Texnologiya', desc: "Robototexnika, dasturlash, sun'iy intellekt asoslari va veb-dizayn bo'yicha to'garaklar.", image: IMAGES.classroom5, icon: 'Laptop' },
        { title: 'Sport', desc: 'Futbol, basketbol, voleybol, shaxmat va yengil atletika bo\'yicha maktab terma jamoalari.', image: IMAGES.sport2, icon: 'Dumbbell' },
        { title: "San'at va Madaniyat", desc: "Rasm, musiqa, teatr va raqs. Har bir o'quvchining iste'dodi e'tiborga loyiqdir.", image: IMAGES.art2, icon: 'Palette' },
        { title: 'Kitobxonlik', desc: 'Har hafta kitobxonlik uchrashuvlari. Kutubxonamiz 10 000 dan ortiq kitobga ega.', image: IMAGES.library2, icon: 'BookMarked' },
        { title: 'Ilmiy loyihalar', desc: "O'quvchilar real muammolarni hal qiluvchi ilmiy loyihalar ustida ishlamoqda.", image: IMAGES.lab2, icon: 'Microscope' },
      ],
      starsLabel: 'Yutuqlar',
      starsHeading: 'Bizning yulduzlarimiz',
      starsSub: 'Ular maktabning maqtovidir. Har bir yutuq ortida kunlab mehnat, sabr va orzu turadi.',
      stars: [
        { name: 'Sardor Rahimov', grade: '11-A sinf', achievement: "Matematika olimpiadasi — 1-o'rin", competition: 'Respublika fan olimpiadasi', result: 'Oltin medal', image: PORTRAITS.student1 },
        { name: 'Malika Yusupova', grade: '10-B sinf', achievement: "Informatika bo'yicha 2-o'rin", competition: 'Xalqaro olimpiada', result: 'Kumush medal', image: PORTRAITS.student4 },
        { name: 'Jasur Tursunov', grade: '11-B sinf', achievement: "Robototexnika — 1-o'rin", competition: 'Mintaqaviy IT tanlov', result: 'Gran-pri', image: PORTRAITS.student2 },
        { name: 'Nigora Karimova', grade: '9-A sinf', achievement: "Ingliz tili — 1-o'rin", competition: 'Shahar til olimpiadasi', result: 'Sertifikat', image: PORTRAITS.student5 },
        { name: 'Aziz Mahmudov', grade: '10-A sinf', achievement: "Shaxmat — 1-o'rin", competition: 'Shahar chempionati', result: 'Chempion', image: PORTRAITS.student3 },
        { name: 'Dilnoza Ahmedova', grade: '11-A sinf', achievement: "Biologiya — 2-o'rin", competition: 'Respublika fan olimpiadasi', result: 'Kumush medal', image: PORTRAITS.student6 },
      ],
    },
    teachers: {
      label: 'Pedagoglar',
      heading: 'Bilim beradigan va ilhomlantiradigan ustozlar',
      description: "Tajribali, mehribon va zamonaviy metodikaga ega ustozlarimiz har bir o'quvchiga individual e'tibor qaratadi.",
      teachersList: [
        { name: 'Karimov Anvar Sadriddinovich', subject: 'Maktab direktori', position: "Matematika o'qituvchisi", quote: "Men uchun yaxshi o'quvchi — savol berishdan qo'rqmaydigan o'quvchidir.", image: PORTRAITS.teacher1 },
        { name: 'Yusupova Gulnora Rashidovna', subject: 'Ona tili va adabiyot', position: 'Ustoz-metodist', quote: "Til — millatning ruhi. Har bir o'quvchini o'z tilini sevgan qilib tarbiyalayman.", image: PORTRAITS.teacher2 },
        { name: 'Rahimov Bakhtiyor Toshtemirovich', subject: 'Fizika', position: 'Fan olimpiadasi tayyorgarligi rahbari', quote: "Fizika — bu hayotning qoidalari. O'rganganingdan hayratlanmasang, hali o'rganmading.", image: PORTRAITS.teacher3 },
        { name: 'Saidova Munira Xolmatovna', subject: 'Ingliz tili', position: 'CEFR tayyorgarlik rahbari', quote: "Til — bu dunyoga ochilgan eshik. Biz dunyoga tayyor o'quvchilarni chiqaramiz.", image: PORTRAITS.teacher4 },
        { name: 'Tursinova Dilfuza Ergashevna', subject: 'Kimyo', position: 'Ilmiy loyihalar rahbari', quote: "Kimyoni sinfdan emas, laboratoriyadan o'rganish kerak. Tajriba — bilimning boshlanishi.", image: PORTRAITS.teacher5 },
        { name: 'Ergashev Shuhrat Nematovich', subject: 'Jismoniy tarbiya', position: 'Sport jamoasi murabbiyi', quote: "Tanaga g'amxo'rlik — intellektga g'amxo'rlikdir. Faol o'quvchi — muvaffaqiyatli o'quvchidir.", image: PORTRAITS.teacher6 },
      ],
    },
    todayAndHistory: {
      todayLabel: 'Bugun maktabda',
      todayHeading: 'Bugungi voqealar va tadbirlar',
      todayEvents: [
        { time: '10:00', title: 'Sport musobaqasi', desc: "9–10 sinflar o'rtasida basketbol bo'yicha musobaqa.", tag: 'Sport', image: IMAGES.sport3 },
        { time: '12:00', title: 'Kitobxonlik uchrashuvi', desc: "O'zbek adabiyoti haftaligi doirasida yozuvchi bilan uchrashuv.", tag: 'Madaniyat', image: IMAGES.library3 },
        { time: '15:00', title: "Ijodiy to'garak", desc: "San'at ustaxonasi: akvarel texnikasi bo'yicha ochiq dars.", tag: "San'at", image: IMAGES.art1 },
      ],
      historyLabel: 'Tariximiz',
      historyHeading: "1998-yildan bugungacha bo'lgan yo'limiz",
      historyTimeline: [
        { year: '1998', title: 'Maktab tashkil topdi', desc: "Yunusobod tumanida 13-sonli maktab ochildi. Birinchi 320 o'quvchi qadam tashladi.", image: IMAGES.schoolBuilding2 },
        { year: '2005', title: "Yangi ta'lim dasturlari", desc: "Chuqurlashtirilgan matematika va fizika sinflari ochildi. IT to'garagi ishga tushdi.", image: IMAGES.classroom1 },
        { year: '2015', title: 'Yangi yutuqlar davri', desc: "Olimpiada g'oliblari, xalqaro tanlovlarda ishtirok, yangi laboratoriya.", image: IMAGES.lab3 },
        { year: '2025', title: 'Yangi avlod', desc: "Sun'iy intellekt, robototexnika va startap madaniyati maktab hayotiga kirdi.", image: IMAGES.classroom5 },
        { year: '2026', title: 'Kelajak sari', desc: "Yangi ta'lim standartlari, xalqaro hamkorlik va raqamli maktab konsepsiyasi.", image: IMAGES.studentsGroup },
      ],
    },
    gallery: {
      label: 'Galereya',
      heading: '13-maktab xotiralari',
      description: "Har bir rasm — butun bir hikoya. Maktab hayotining eng yorqin lahzalari.",
      allCategory: 'Barchasi',
      categories: ['Barchasi', 'Darslar', 'Sport', 'Tadbirlar', 'Bayramlar', "O'quvchilar", 'Ustozlar'],
      images: [
        { src: IMAGES.classroom1, category: 'Darslar', title: 'Matematika darsi', span: 'tall' },
        { src: IMAGES.sport1, category: 'Sport', title: 'Futbol musobaqasi', span: 'wide' },
        { src: IMAGES.event1, category: 'Bayramlar', title: 'Maktab bayrami', span: 'normal' },
        { src: IMAGES.classroom2, category: 'Darslar', title: 'Interaktiv dars', span: 'normal' },
        { src: IMAGES.lab1, category: 'Darslar', title: 'Laboratoriya ishi', span: 'tall' },
        { src: IMAGES.sport2, category: 'Sport', title: 'Sport zali', span: 'normal' },
        { src: IMAGES.event2, category: 'Tadbirlar', title: 'Mukofotlash marosimi', span: 'wide' },
        { src: IMAGES.art1, category: 'Tadbirlar', title: 'Ijodiy ustaxona', span: 'normal' },
        { src: IMAGES.library1, category: 'Darslar', title: 'Kutubxona', span: 'tall' },
        { src: IMAGES.event3, category: 'Bayramlar', title: 'Bitiruvchilar kuni', span: 'normal' },
        { src: IMAGES.classroom3, category: 'Ustozlar', title: 'Ustoz darsi', span: 'wide' },
        { src: IMAGES.sport3, category: 'Sport', title: 'Basketbol', span: 'normal' },
        { src: IMAGES.event4, category: 'Bayramlar', title: 'Mustaqillik bayrami', span: 'tall' },
        { src: IMAGES.classroom4, category: "O'quvchilar", title: 'Tanaffus', span: 'normal' },
        { src: IMAGES.lab4, category: 'Darslar', title: 'Kimyo tajribasi', span: 'normal' },
        { src: IMAGES.art2, category: 'Tadbirlar', title: "Rasm ko'rgazmasi", span: 'wide' },
        { src: IMAGES.library2, category: "O'quvchilar", title: 'Kitobxonlik', span: 'tall' },
        { src: IMAGES.classroom5, category: "O'quvchilar", title: 'IT darsi', span: 'normal' },
      ],
    },
    schoolMap: {
      label: 'Interaktiv xarita',
      heading: "Maktab bo'ylab sayohat",
      description: "Har bir xona va maydon bilan tanishing.",
      locations: [
        { id: 'classrooms', name: 'Sinfxonalar', desc: "32 ta zamonaviy sinfxona. Har birida proektor, interaktiv doska va qulay o'quv muhiti.", image: IMAGES.classroom1, icon: 'DoorOpen', x: 20, y: 30 },
        { id: 'library', name: 'Kutubxona', desc: "10 000 dan ortiq kitob. O'qish zallari, raqamli resurslar va kitobxonlik uchrashuvlari.", image: IMAGES.library1, icon: 'BookMarked', x: 55, y: 20 },
        { id: 'it', name: 'IT xona', desc: "30 ta kompyuter, robototexnika to'garagi va dasturlash o'quv maydoni.", image: IMAGES.classroom5, icon: 'Laptop', x: 80, y: 35 },
        { id: 'sport', name: 'Sport zali', desc: "To'liq jihozlangan sport zali. Futbol, basketbol va yengil atletika uchun maydonlar.", image: IMAGES.sport1, icon: 'Dumbbell', x: 30, y: 65 },
        { id: 'lab', name: 'Laboratoriya', desc: 'Kimyo, fizika va biologiya laboratoriyalari. Zamonaviy jihozlar va xavfsizlik tizimi.', image: IMAGES.lab1, icon: 'FlaskConical', x: 60, y: 55 },
        { id: 'art', name: 'Ijod xonasi', desc: "Rasm, musiqa va teatr uchun ijodiy ustaxona. O'quvchilar iste'dodlarini namoyon qiladi.", image: IMAGES.art1, icon: 'Palette', x: 80, y: 70 },
        { id: 'canteen', name: 'Oshxona', desc: "Sog'lom va to'yimli menyu. Kunlik 1000+ o'quvchi uchun issiq ovqat.", image: IMAGES.classroom6, icon: 'Utensils', x: 45, y: 80 },
      ],
    },
    parents: {
      label: 'Ota-onalarga',
      heading: 'Birgalikda farzandlarimiz kelajagini quramiz.',
      description: "Muhim ma'lumotlar, qoidalar va ota-onalar uchun zaruriy resurslar.",
      infoList: [
        { title: 'Maktab tartibi', icon: 'ClipboardList', content: "O'quvchilar 07:30 dan qabul qilinadi. Darslar 08:00 da boshlanadi. Kechikishlar yozma ravishda qayd etiladi. O'quvchilar maktab formasida kelishi shart." },
        { title: 'Dars vaqtlari', icon: 'Clock', content: '1-dars: 08:00–08:45\n2-dars: 08:55–09:40\n3-dars: 09:50–10:35\n4-dars: 10:55–11:40\n5-dars: 11:50–12:35\n6-dars: 12:45–13:30' },
        { title: "To'garaklar", icon: 'Users', content: "Robototexnika, dasturlash, san'at, sport, shaxmat, kitobxonlik, teatr, ingliz tili, matematika olimpiadasi. To'garaklar bepul. Yozilish ota-onalar arizasi orqali." },
        { title: 'Muhim telefon raqamlari', icon: 'Phone', content: "Direktor: +998 71 234 56 78\nO'quv ishlari: +998 71 234 56 79\nVasiylik qo'mitasi: +998 71 234 56 80\nFavqulodda: +998 71 234 56 81" },
        { title: 'Maktab qoidalari', icon: 'ScrollText', content: "Forma majburiy. Telefon dars vaqtida o'chirilgan bo'ladi. O'quvchilar maktab ichida hurmat va xushmuomalilikni saqlashi shart. Bezorilik qat'iyan man etiladi." },
        { title: 'Kerakli hujjatlar', icon: 'FileText', content: "Tug'ilganlik haqida guvohnoma nusxasi, ota-onaning pasport nusxasi, tibbiy ma'lumotnoma, 2x3 rasm 3 dona, ariza blanki." },
        { title: "Qabul bo'yicha ma'lumot", icon: 'UserPlus', content: "1-sinf qabul 1-sentyabrdan. Hujjatlar iyun–avgust oralig'ida qabul qilinadi. Qabul yoshi 6 yoki 7. Sinf soni cheklangan." },
      ],
    },
    graduates: {
      label: 'Bitiruvchilarimiz',
      heading: 'Ularning muvaffaqiyati — bizning g\'ururimiz.',
      list: [
        { name: 'Dr. Aziz Karimov', year: '2005-yil bitiruvchisi', profession: 'Kardiolog jarroh', university: 'Toshkent Tibbiyot Akademiyasi', story: "13-maktabdagi biologiya o'qituvchim meni tibbiyotga bo'lgan qiziqishimni uyg'otdi. Bugun yurak jarrohiman.", image: PORTRAITS.student7 },
        { name: 'Sardor Nazarov', year: '2008-yil bitiruvchisi', profession: "Dasturiy ta'minot muhandisi", university: "O'zMU, Stanford (magistr)", story: "Maktabning IT to'garagi mening kasbimni belgiladi. Bugun Google'da ishlayman.", image: PORTRAITS.student3 },
        { name: 'Malika Rashidova', year: '2010-yil bitiruvchisi', profession: 'Arxitektor', university: 'Toshkent Arxitektura instituti', story: "Maktabdagi san'at darslari mening ijodiy yo'nalishimni ochib berdi. Bugun o'z loyihalarim ustida ishlayman.", image: PORTRAITS.student8 },
        { name: 'Bektemir Yusupov', year: '2012-yil bitiruvchisi', profession: 'Tadbirkor, startup asoschisi', university: 'WIUT', story: "Maktab menga maslahat berishdan qo'rqmaslikni o'rgatdi. Bugun o'z kompaniyamga ega bo'lganman.", image: PORTRAITS.student9 },
      ],
    },
    futureCareers: {
      label: 'Kelajak kasblari',
      heading: 'Qaysi kasbni tanlaysiz?',
      subjectsLabel: 'Kerakli fanlar:',
      skillsLabel: "Ko'nikmalar:",
      careers: [
        { name: 'Dasturchi', icon: 'Code', desc: 'Dasturlar yaratuvchi. Kelajakning eng talabgir kasbi.', subjects: 'Matematika, informatika, ingliz tili', skills: "Mantiq, algoritmik fikrlash, jamoa bo'lib ishlash", message: 'Bugun sinfda yozgan koding, ertaga millionlab odamlarga xizmat qilishi mumkin.' },
        { name: 'Shifokor', icon: 'Stethoscope', desc: 'Inson hayotini saqlovchi. Eng oliyjanob kasblardan biri.', subjects: 'Biologiya, kimyo, fizika', skills: "Diqqat, sabr, qaror qabul qilish, mas'uliyat", message: 'Birinchi yordam ko\'nikmalari bugun sinfda boshlanadi.' },
        { name: 'Muhandis', icon: 'Cog', desc: 'Dunyoni quruvchi va loyihalovchi.', subjects: 'Matematika, fizika, chizmachilik', skills: 'Analitik fikr, ijod, texnologiya', message: "Har bir ko'prik, har bir bino muhandis qalbidan boshlanadi." },
        { name: 'Olim', icon: 'Microscope', desc: 'Bilim chegarasini kengaytiruvchi tadqiqotchi.', subjects: 'Matematika, fizika, kimyo, biologiya', skills: 'Tadqiqot, sabr, savol berish, analitika', message: 'Kashfiyotlar savoldan boshlanadi. Sen ham savol ber.' },
        { name: 'Dizayner', icon: 'Palette', desc: "Go'zallik va funksiyani birlashtiruvchi ijodkor.", subjects: "San'at, chizmachilik, informatika", skills: 'Estetika, ijod, foydalanuvchi fikri', message: "Dizayn — bu narsani sevdirish san'ati." },
        { name: "O'qituvchi", icon: 'GraduationCap', desc: 'Kelajak avlodini tarbiyalovchi.', subjects: 'Ona tili, adabiyot, pedagogika', skills: 'Sabr, muloqot, ilhomlantirish', message: "Eng buyuk ustoz — o'z o'quvchisini o'zidan o'tib ketishiga imkon beruvchidir." },
        { name: 'Sportchi', icon: 'Trophy', desc: 'Tanani va irodani mukammallashtiruvchi.', subjects: 'Jismoniy tarbiya, biologiya, psixologiya', skills: 'Intizom, iroda, maqsadga qaratilganlik', message: "Chempionlar mashg'ulotda emas, qalbda tug'iladi." },
        { name: 'Tadbirkor', icon: 'Briefcase', desc: "G'oyalarni biznesga aylantiruvchi.", subjects: 'Matematika, iqtisodiyot, ingliz tili', skills: "Liderlik, mas'uliyat, qaror qabul qilish", message: "Eng katta biznes — boshqalarning muammosini hal qilishdir." },
      ],
    },
    studentVoices: {
      label: "O'quvchilar fikri",
      heading: "O'quvchilarimiz maktab haqida",
      voices: [
        { name: 'Sardor, 11-A', quote: 'Menga maktabimizda eng yoqadigan narsa — ustozlarimizning bizga ishonishi. Hech qachon "sizda chiqmaydi" demaydilar.', image: PORTRAITS.student1, topic: 'Maktab haqida' },
        { name: 'Malika, 10-B', quote: "Eng sevimli fanim — fizika. Laboratoriyada tajribalar qilish, o'z qo'lim bilan tekshirish — boshqa narsa.", image: PORTRAITS.student4, topic: 'Sevimli fan' },
        { name: 'Jasur, 9-A', quote: "Maktabdagi eng yaxshi xotiram — robototexnika to'garagidagi birinchi musobaqamiz. Jamoa bo'lib tunab ishlagan edik.", image: PORTRAITS.student2, topic: 'Xotira' },
        { name: 'Nigora, 11-B', quote: "Bu yerda men o'zimni erkin his qilaman. Savol berishdan uyalmayman. Bu mening uchun katta narsa.", image: PORTRAITS.student5, topic: 'Maktab haqida' },
        { name: 'Aziz, 10-A', quote: 'Sport zali mening ikkinchi uyim. Murabbiyimiz nafaqat sportni, balki intizomni ham o\'rgatadi.', image: PORTRAITS.student3, topic: 'Sport' },
        { name: 'Dilnoza, 11-A', quote: 'Kutubxona — mening sevimli joyim. Dam olish kunlarida ham kelaman. Kitoblar menga dunyoni ochib berdi.', image: PORTRAITS.student6, topic: 'Kitobxonlik' },
      ],
    },
    videoIntro: {
      label: 'Maktab hayoti',
      heading: '13-maktab bo\'ylab video sayohat',
      description: "Bizning zamonaviy sinflarimiz, tajribali o'qituvchilarimiz va faol o'quvchilarimiz bilan tanishing.",
      buttonText: 'Videoni tomosha qilish',
    },
    faq: {
      label: "Ko'p beriladigan savollar",
      heading: 'Barcha savollaringizga javoblar',
      items: [
        { q: 'Maktab qayerda joylashgan?', a: "Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi 108-uy. Metro \"Yunusobod\" bekatidan 5 daqiqalik piyoda masofa." },
        { q: 'Darslar nechada boshlanadi?', a: "Darslar soat 08:00 da boshlanadi. O'quvchilarni qabul qilish 07:30 dan boshlanadi. Maktabga 10 daqiqa oldin kelish tavsiya etiladi." },
        { q: 'Qabul uchun qanday hujjatlar kerak?', a: "Tug'ilganlik haqida guvohnoma nusxasi, ota-onaning pasport nusxasi, tibbiy ma'lumotnoma, 2x3 hajmdagi 3 dona fotosurat va ariza blanki." },
        { q: "Maktabda qanday to'garaklar mavjud?", a: "Robototexnika, dasturlash, san'at, sport, shaxmat, kitobxonlik, teatr, ingliz tili va matematika olimpiadasi to'garaklari. Barcha to'garaklar bepul." },
        { q: 'Maktabda qanday fanlar chuqurlashtiriladi?', a: 'Matematika, fizika, informatika va ingliz tili chuqurlashtirilgan o\'qitiladi. 10–11 sinflarda ixtisoslashgan yo\'nalishlar mavjud.' },
        { q: 'Ota-onalar qayerdan ma\'lumot olishlari mumkin?', a: "Maktab Telegram kanali, veb-sayt, o'quvchining kundalik daftari va choraklik ota-onalar yig'ilishlari orqali. Shuningdek, direktor qabul kunlari: har seshanba 15:00–17:00." },
      ],
    },
    news: {
      label: 'Yangiliklar',
      heading: "Maktabimizning eng so'nggi yangiliklari",
      readMore: 'Batafsil',
      items: [
        { date: '02.08.2026', category: 'Yutuq', title: "Olimpiada g'oliblari qaytdi", excerpt: "Matematika va informatika bo'yicha respublika olimpiadasi g'oliblari maktabga qaytdi.", image: IMAGES.event2 },
        { date: '28.07.2026', category: 'Tadbir', title: 'Yozgi ijod maktabi yakunlandi', excerpt: "3 haftalik yozgi ijod maktabi doirasida o'quvchilar 15 ta loyiha taqdim etdi.", image: IMAGES.art1 },
        { date: '20.07.2026', category: 'Sport', title: "Shahar chempionatida 2-o'rin", excerpt: 'Maktab basketbol jamoasi shahar chempionatida kumush medalni qo\'lga kiritdi.', image: IMAGES.sport3 },
        { date: '15.07.2026', category: 'Yangilik', title: 'Yangi robototexnika laboratoriyasi', excerpt: 'Maktabda zamonaviy robototexnika laboratoriyasi ochildi. 30 dan ortiq robot komplekti.', image: IMAGES.classroom5 },
      ],
    },
    contact: {
      label: 'Aloqa',
      heading: 'Biz bilan bog\'laning',
      nameLabel: 'Ismingiz',
      namePlaceholder: 'Ismingizni kiriting',
      phoneLabel: 'Telefon raqamingiz',
      phonePlaceholder: '+998 90 123 45 67',
      messageLabel: 'Xabaringiz',
      messagePlaceholder: 'Savol yoki taklifingizni yozing...',
      submitBtn: 'Xabar yuborish',
      successMsg: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
      addressTitle: 'Manzil',
      phoneTitle: 'Telefon',
      emailTitle: 'Elektron pochta',
      hoursTitle: 'Ish vaqti',
    },
    finalCta: {
      heading: "Farzandingiz kelajagini 13-maktab bilan quring",
      description: "Sifatli ta'lim, kuchli ustozlar va zamonaviy sharoitlar bilan farzandingizga eng yaxshi kelajakni taqdim eting.",
      buttonText: 'Qabulga yozilish',
    },
    footer: {
      tagline: 'Kelajakni shu yerda, har bir o\'quvchi bilan birga quramiz.',
      rights: 'Barcha huquqlar saqlangan.',
      exploreTitle: 'Bo\'limlar',
      contactsTitle: 'Bog\'lanish',
    },
  },
  ru: {
    navLinks: [
      { id: 'home', label: 'Главная' },
      { id: 'about', label: 'О школе' },
      { id: 'students', label: 'Ученики' },
      { id: 'teachers', label: 'Учителя' },
      { id: 'achievements', label: 'Достижения' },
      { id: 'news', label: 'Новости' },
      { id: 'gallery', label: 'Галерея' },
      { id: 'contact', label: 'Контакты' },
    ],
    ctaNav: 'Познакомьтесь со школой',
    schoolInfo: {
      name: 'Общеобразовательная школа №13',
      shortName: 'ШКОЛА №13',
      address: 'г. Ташкент, Юнусабадский район, ул. Амира Темура, 108',
      phone: '+998 71 234 56 78',
      phone2: '+998 71 234 56 79',
      email: 'info@13maktab.uz',
      telegram: 't.me/maktab13',
      instagram: 'instagram.com/maktab13',
      youtube: 'youtube.com/@maktab13',
      hours: 'Понедельник–Суббота, 08:00–17:00',
      director: 'Каримов Анвар Садриддинович',
      directorTitle: 'Директор школы',
    },
    hero: {
      badge: 'ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №13',
      headingLine1: 'Мы не ждем будущее.',
      headingLine2: 'Мы создаем его здесь.',
      description: 'Уже 27 лет школа №13 дает глубокие знания, воспитывает сильные личности и строит успешное будущее. Это место, где начинаются мечты и победы.',
      ctaPrimary: 'Узнать больше',
      ctaSecondary: 'Наша история',
      scrollDown: 'Вниз',
    },
    story: {
      label: 'Философия',
      heading: 'Школа — это не просто стены.',
      description: 'Это ученики, педагоги, знания, крепкая дружба, победы и стремительное будущее. За каждым понятием стоит целый мир.',
      concepts: [
        { word: 'Ученик', desc: 'Каждый ученик — это уверенный в себе, пытливый человек, активно строящий свое будущее.', image: IMAGES.classroom2 },
        { word: 'Учитель', desc: 'Учитель — не просто источник информации, а путеводная звезда, вдохновляющая на открытия.', image: IMAGES.classroom3 },
        { word: 'Знания', desc: 'Здесь знания получают не ради тестов, а для успешной жизни. Каждый урок — шаг к мечте.', image: IMAGES.library1 },
        { word: 'Дружба', desc: 'Школьная дружба связывает на всю жизнь. Найденные здесь люди остаются рядом навсегда.', image: IMAGES.studentsGroup },
        { word: 'Успех', desc: 'Победа — это не финиш, а непрерывный процесс. За каждой наградой стоят дни усердного труда.', image: IMAGES.event2 },
        { word: 'Будущее', desc: 'Мы не ждем завтрашний день. Мы создаем будущее сегодня в этих классах.', image: IMAGES.classroom1 },
      ],
    },
    about: {
      label: 'О школе',
      heading: 'Гармония знаний, личности и будущего.',
      desc1: 'С момента основания в 1998 году школа №13 ставит своей главной целью не только передачу знаний, но и всестороннее воспитание человека. Здесь ученики открывают себя и окружающий мир.',
      desc2: 'Наша миссия — раскрыть скрытый потенциал каждого ребенка, вырастив из него уверенного в себе лидера, готового к вызовам современного мира.',
      estLabel: 'Год основания школы',
      directorLabel: 'Директор школы',
      values: [
        { iconName: 'Target', title: 'Цель', desc: 'Раскрытие потенциала каждого ученика.' },
        { iconName: 'Heart', title: 'Забота', desc: 'Индивидуальный подход к каждому ребенку.' },
        { iconName: 'Eye', title: 'Открытость', desc: 'Прозрачные отношения с родителями и обществом.' },
        { iconName: 'Sparkles', title: 'Мышление', desc: 'Формирование высокой культуры критического мышления.' },
      ],
      statsLabel: 'Школа в цифрах',
      statsHeading: '27 лет совместной истории и достижений.',
      stats: [
        { value: 1000, suffix: '+', label: 'Учащихся' },
        { value: 80, suffix: '+', label: 'Учителей' },
        { value: 32, suffix: '', label: 'Класса' },
        { value: 27, suffix: '', label: 'Лет истории' },
        { value: 150, suffix: '+', label: 'Наград' },
      ],
    },
    dayTimeline: {
      label: 'Один день',
      heading: 'Один день в школе №13',
      description: 'С утра до вечера — каждый час наполнен смыслом и событиями. Проследите за нашим школьным днем.',
      schedule: [
        { time: '07:30', title: 'Приход в школу', desc: 'Ученики собираются в школе, подготавливаются классы, проходят утренние обсуждения.', image: IMAGES.schoolBuilding, icon: 'Sunrise' },
        { time: '08:00', title: 'Начало уроков', desc: 'Старт первой смены уроков: математика, родной язык, литература и естественные науки.', image: IMAGES.classroom1, icon: 'BookOpen' },
        { time: '10:30', title: 'Перемена', desc: 'Большая перемена. Время отдыха, общения со сверстниками и полезного перекуса.', image: IMAGES.classroom4, icon: 'Coffee' },
        { time: '11:00', title: 'Практика и опыты', desc: 'Лабораторные работы, IT-занятия, научные эксперименты и командные проекты.', image: IMAGES.lab1, icon: 'FlaskConical' },
        { time: '13:00', title: 'Обед', desc: 'Горячее комплексное питание в школьной столовой. Здоровое и сбалансированное меню.', image: IMAGES.classroom6, icon: 'Utensils' },
        { time: '14:00', title: 'Кружки и секции', desc: 'Робототехника, искусство, спортивные секции, шахматы и научные общества.', image: IMAGES.art1, icon: 'Palette' },
        { time: '16:00', title: 'Спорт и творчество', desc: 'Тренировки в спортивном зале, творческие мастерские и внеклассные мероприятия.', image: IMAGES.sport1, icon: 'Trophy' },
      ],
    },
    students: {
      label: 'Ученики',
      heading: 'Наши учащиеся',
      description: 'Настоящая сила нашей школы — в ее учениках. Каждый из них раскрывает свои таланты в учебе, науке, спорте и искусстве.',
      categories: [
        { title: 'Предметные олимпиады', desc: 'Регулярное участие и победы в республиканских и международных олимпиадах по математике, физике, химии и IT.', image: IMAGES.testTaking, icon: 'Medal' },
        { title: 'IT и Технологии', desc: 'Кружки по робототехнике, программированию, веб-дизайну и основам искусственного интеллекта.', image: IMAGES.classroom5, icon: 'Laptop' },
        { title: 'Спорт', desc: 'Школьные сборные команды по футболу, баскетболу, волейболу, шахматам и легкой атлетике.', image: IMAGES.sport2, icon: 'Dumbbell' },
        { title: 'Искусство и Культура', desc: 'Живопись, музыка, театральная студия и хореография. Талант каждого ребенка ценен.', image: IMAGES.art2, icon: 'Palette' },
        { title: 'Чтение и Литература', desc: 'Еженедельные встречи читательского клуба. В нашей библиотеке более 10 000 книг.', image: IMAGES.library2, icon: 'BookMarked' },
        { title: 'Научные проекты', desc: 'Учащиеся создают реальные исследовательские проекты под руководством менторов.', image: IMAGES.lab2, icon: 'Microscope' },
      ],
      starsLabel: 'Достижения',
      starsHeading: 'Наши звездные ученики',
      starsSub: 'Они — гордость школы. За каждой победой стоят усердие, дисциплина и смелая мечта.',
      stars: [
        { name: 'Сардор Рахимов', grade: '11-А класс', achievement: 'Олимпиада по математике — 1-е место', competition: 'Республиканская олимпиада', result: 'Золотая медаль', image: PORTRAITS.student1 },
        { name: 'Малика Юсупова', grade: '10-Б класс', achievement: 'Информатика — 2-е место', competition: 'Международная олимпиада', result: 'Серебряная медаль', image: PORTRAITS.student4 },
        { name: 'Жасур Турсунов', grade: '11-Б класс', achievement: 'Робототехника — 1-е место', competition: 'Региональный IT-конкурс', result: 'Гран-при', image: PORTRAITS.student2 },
        { name: 'Нигора Каримова', grade: '9-А класс', achievement: 'Английский язык — 1-е место', competition: 'Городская языковая олимпиада', result: 'Сертификат', image: PORTRAITS.student5 },
        { name: 'Азиз Махмудов', grade: '10-А класс', achievement: 'Шахматы — 1-е место', competition: 'Городской чемпионат', result: 'Чемпион', image: PORTRAITS.student3 },
        { name: 'Дильноза Ахмедова', grade: '11-А класс', achievement: 'Биология — 2-е место', competition: 'Республиканская олимпиада', result: 'Серебряная медаль', image: PORTRAITS.student6 },
      ],
    },
    teachers: {
      label: 'Педагоги',
      heading: 'Учителя, которые вдохновляют и дают знания',
      description: 'Опытные, заботливые педагоги, применяющие современные методики, обеспечивают индивидуальное внимание каждому ребенку.',
      teachersList: [
        { name: 'Каримов Анвар Садриддинович', subject: 'Директор школы', position: 'Учитель математики', quote: 'Хороший ученик для меня — тот, кто не боится задавать смелые вопросы.', image: PORTRAITS.teacher1 },
        { name: 'Юсупова Гульнора Рашидовна', subject: 'Родной язык и литература', position: 'Учитель-методист', quote: 'Язык — дух нации. Я воспитываю в каждом ученике любовь к родному слову.', image: PORTRAITS.teacher2 },
        { name: 'Рахимов Бахтиёр Тоштемирович', subject: 'Физика', position: 'Руководитель олимпиадной подготовки', quote: 'Физика — это законы жизни. Если ты не восхищен ею, значит, еще не понял.', image: PORTRAITS.teacher3 },
        { name: 'Саидова Мунира Холматовна', subject: 'Английский язык', position: 'Руководитель подготовки к CEFR', quote: 'Язык — дверь в большой мир. Мы выпускаем учеников, готовых к глобальным победам.', image: PORTRAITS.teacher4 },
        { name: 'Турсинова Дильфуза Эргашевна', subject: 'Химия', position: 'Руководитель научных проектов', quote: 'Химию нужно изучать в лаборатории. Эксперимент — начало истинного знания.', image: PORTRAITS.teacher5 },
        { name: 'Эргашев Шухрат Нематович', subject: 'Физическая культура', position: 'Тренер спортивной сборной', quote: 'Забота о теле — это забота об интеллекте. Активный ученик — успешный ученик.', image: PORTRAITS.teacher6 },
      ],
    },
    todayAndHistory: {
      todayLabel: 'Сегодня в школе',
      todayHeading: 'События и мероприятия сегодняшнего дня',
      todayEvents: [
        { time: '10:00', title: 'Спортивное соревнование', desc: 'Турнир по баскетболу среди 9–10 классов.', tag: 'Спорт', image: IMAGES.sport3 },
        { time: '12:00', title: 'Литературный вечер', desc: 'Встреча с известным писателем в рамках недели узбекской литературы.', tag: 'Культура', image: IMAGES.library3 },
        { time: '15:00', title: 'Творческая мастерская', desc: 'Открытый мастер-класс по технике акварельной живописи.', tag: 'Искусство', image: IMAGES.art1 },
      ],
      historyLabel: 'Наша история',
      historyHeading: 'Наш путь с 1998 года по сегодняшний день',
      historyTimeline: [
        { year: '1998', title: 'Основание школы', desc: 'В Юнусабадском районе открылась школа №13. Первые 320 учеников переступили порог.', image: IMAGES.schoolBuilding2 },
        { year: '2005', title: 'Новые образовательные стандарты', desc: 'Открыты специализированные физико-математические классы и IT-кружок.', image: IMAGES.classroom1 },
        { year: '2015', title: 'Эра высоких достижений', desc: 'Победы на международных олимпиадах, запуск современных лабораторий.', image: IMAGES.lab3 },
        { year: '2025', title: 'Новое поколение', desc: 'Внедрение искусственного интеллекта, робототехники и стартап-культуры.', image: IMAGES.classroom5 },
        { year: '2026', title: 'Шаг в будущее', desc: 'Международное сотрудничество, концепция цифровой экосистемы школы.', image: IMAGES.studentsGroup },
      ],
    },
    gallery: {
      label: 'Галерея',
      heading: 'Воспоминания школы №13',
      description: 'Каждый кадр — отдельная история. Самые яркие мгновения школьной жизни.',
      allCategory: 'Все',
      categories: ['Все', 'Уроки', 'Спорт', 'Мероприятия', 'Праздники', 'Ученики', 'Учителя'],
      images: [
        { src: IMAGES.classroom1, category: 'Уроки', title: 'Урок математики', span: 'tall' },
        { src: IMAGES.sport1, category: 'Спорт', title: 'Футбольный матч', span: 'wide' },
        { src: IMAGES.event1, category: 'Праздники', title: 'Школьный праздник', span: 'normal' },
        { src: IMAGES.classroom2, category: 'Уроки', title: 'Интерактивное занятие', span: 'normal' },
        { src: IMAGES.lab1, category: 'Уроки', title: 'Лабораторная работа', span: 'tall' },
        { src: IMAGES.sport2, category: 'Спорт', title: 'Спортивный зал', span: 'normal' },
        { src: IMAGES.event2, category: 'Мероприятия', title: 'Церемония награждения', span: 'wide' },
        { src: IMAGES.art1, category: 'Мероприятия', title: 'Творческая мастерская', span: 'normal' },
        { src: IMAGES.library1, category: 'Уроки', title: 'Школьная библиотека', span: 'tall' },
        { src: IMAGES.event3, category: 'Праздники', title: 'День выпускников', span: 'normal' },
        { src: IMAGES.classroom3, category: 'Учителя', title: 'Урок с преподавателем', span: 'wide' },
        { src: IMAGES.sport3, category: 'Спорт', title: 'Баскетбол', span: 'normal' },
        { src: IMAGES.event4, category: 'Праздники', title: 'День независимости', span: 'tall' },
        { src: IMAGES.classroom4, category: 'Ученики', title: 'Школьная перемена', span: 'normal' },
        { src: IMAGES.lab4, category: 'Уроки', title: 'Химический опыт', span: 'normal' },
        { src: IMAGES.art2, category: 'Мероприятия', title: 'Выставка рисунков', span: 'wide' },
        { src: IMAGES.library2, category: 'Ученики', title: 'Время чтения', span: 'tall' },
        { src: IMAGES.classroom5, category: 'Ученики', title: 'Урок программирования', span: 'normal' },
      ],
    },
    schoolMap: {
      label: 'Интерактивная карта',
      heading: 'Экскурсия по школе',
      description: 'Познакомьтесь с нашими классами и инфраструктурой.',
      locations: [
        { id: 'classrooms', name: 'Учебные классы', desc: '32 современных класса с проекторами, интерактивными досками и эргономичной мебелью.', image: IMAGES.classroom1, icon: 'DoorOpen', x: 20, y: 30 },
        { id: 'library', name: 'Библиотека', desc: 'Более 10 000 книг, читальные залы, электронный каталог и зона чтения.', image: IMAGES.library1, icon: 'BookMarked', x: 55, y: 20 },
        { id: 'it', name: 'IT-лаборатория', desc: '30 мощных компьютеров, наборы робототехники и зона разработки программ.', image: IMAGES.classroom5, icon: 'Laptop', x: 80, y: 35 },
        { id: 'sport', name: 'Спортзал', desc: 'Оснащенный спортивный комплекс для мини-футбола, баскетбола и гимнастики.', image: IMAGES.sport1, icon: 'Dumbbell', x: 30, y: 65 },
        { id: 'lab', name: 'Лаборатории', desc: 'Лаборатории физики, химии и биологии с современным оборудованием безопасности.', image: IMAGES.lab1, icon: 'FlaskConical', x: 60, y: 55 },
        { id: 'art', name: 'Арт-студия', desc: 'Мастерская для рисования, музыки и театрального искусства.', image: IMAGES.art1, icon: 'Palette', x: 80, y: 70 },
        { id: 'canteen', name: 'Столовая', desc: 'Полноценное горячее питание для более чем 1000 учеников ежедневно.', image: IMAGES.classroom6, icon: 'Utensils', x: 45, y: 80 },
      ],
    },
    parents: {
      label: 'Родителям',
      heading: 'Вместе создаем будущее наших детей.',
      description: 'Полезная информация, распорядок дня, правила и важная информация для родителей.',
      infoList: [
        { title: 'Школьный порядок', icon: 'ClipboardList', content: 'Школа открыта с 07:30. Уроки начинаются в 08:00. Опоздания фиксируются. Наличие школьной формы обязательно.' },
        { title: 'Расписание уроков', icon: 'Clock', content: '1-й урок: 08:00–08:45\n2-й урок: 08:55–09:40\n3-й урок: 09:50–10:35\n4-й урок: 10:55–11:40\n5-й урок: 11:50–12:35\n6-й урок: 12:45–13:30' },
        { title: 'Кружки и секции', icon: 'Users', content: 'Робототехника, IT, живопись, спорт, шахматы, театр, английский язык, математика. Все кружки бесплатные.' },
        { title: 'Важные телефоны', icon: 'Phone', content: 'Директор: +998 71 234 56 78\nУчебная часть: +998 71 234 56 79\nПопечительский совет: +998 71 234 56 80\nДежурный: +998 71 234 56 81' },
        { title: 'Школьные правила', icon: 'ScrollText', content: 'Форма обязательна. Телефоны отключаются на время уроков. Взаимное уважение и вежливость — главный приоритет.' },
        { title: 'Необходимые документы', icon: 'FileText', content: 'Копия свидетельства о рождении, копии паспортов родителей, медицинская справка, 3 фото 2х3, заявление.' },
        { title: 'Информация о приеме', icon: 'UserPlus', content: 'Прием в 1-й класс начинается с 1 июня. Принимаются дети 6–7 лет. Количество мест ограничено.' },
      ],
    },
    graduates: {
      label: 'Наши выпускники',
      heading: 'Их успех — наша главная гордость.',
      list: [
        { name: 'Др. Азиз Каримов', year: 'Выпускник 2005 года', profession: 'Врач-кардиохирург', university: 'Ташкентская Медицинская Академия', story: 'Учитель биологии в школе №13 привил мне любовь к медицине. Сегодня я спасаю человеческие сердца.', image: PORTRAITS.student7 },
        { name: 'Сардор Назаров', year: 'Выпускник 2008 года', profession: 'Инженер программного обеспечения', university: 'НУУз, Стенфорд (магистратура)', story: 'Школьный IT-кружок предопределил мою профессию. Сейчас я работаю ведущим инженером в Google.', image: PORTRAITS.student3 },
        { name: 'Малика Рашидова', year: 'Выпускница 2010 года', profession: 'Архитектор', university: 'Ташкентский Архитектурный институт', story: 'Уроки искусства в школе помогли найти творческий путь. Сегодня я проектирую современные здания.', image: PORTRAITS.student8 },
        { name: 'Бектемир Юсупов', year: 'Выпускник 2012 года', profession: 'Предприниматель, основатель стартапа', university: 'WIUT', story: 'Школа научила меня не бояться браться за сложные задачи. Сегодня у меня собственная успешная компания.', image: PORTRAITS.student9 },
      ],
    },
    futureCareers: {
      label: 'Профессии будущего',
      heading: 'Какую профессию выберешь ты?',
      subjectsLabel: 'Ключевые предметы:',
      skillsLabel: 'Навыки:',
      careers: [
        { name: 'Программист', icon: 'Code', desc: 'Создатель цифровых решений и приложений.', subjects: 'Математика, информатика, английский', skills: 'Логика, алгоритмы, командная работа', message: 'Код, написанный тобой сегодня, завтра может помочь миллионам людей.' },
        { name: 'Врач', icon: 'Stethoscope', desc: 'Защитник жизни и здоровья людей.', subjects: 'Биология, химия, физика', skills: 'Внимательность, ответственность, эмпатия', message: 'Навыки заботы о других начинаются с первого школьного урока.' },
        { name: 'Инженер', icon: 'Cog', desc: 'Создатель сложных конструкций и механизмов.', subjects: 'Математика, физика, черчение', skills: 'Аналитический склад ума, черчение', message: 'Каждый мост и небоскреб рождается в мечтах инженера.' },
        { name: 'Ученый', icon: 'Microscope', desc: 'Исследователь, раздвигающий границы знаний.', subjects: 'Математика, физика, химия, биология', skills: 'Критическое мышление, анализ, любознательность', message: 'Великие открытия начинаются с простого вопроса.' },
        { name: 'Дизайнер', icon: 'Palette', desc: 'Создатель эстетики и удобных интерфейсов.', subjects: 'Искусство, черчение, IT', skills: 'Чувство стиля, креативность, UI/UX', message: 'Дизайн — это искусство делать мир удобным и красивым.' },
        { name: 'Учитель', icon: 'GraduationCap', desc: 'Наставник будущих поколений.', subjects: 'Родной язык, литература, педагогика', skills: 'Терпение, коммуникабельность, вдохновение', message: 'Великий учитель помогает ученику превзойти своего наставника.' },
        { name: 'Спортсмен', icon: 'Trophy', desc: 'Мастер силы воли и физического совершенства.', subjects: 'Физкультура, биология, психология', skills: 'Дисциплина, дух победы, целеустремленность', message: 'Чемпионы рождаются не в зале, а в глубине сердца.' },
        { name: 'Предприниматель', icon: 'Briefcase', desc: 'Лидер, превращающий идеи в бизнес.', subjects: 'Математика, экономика, английский', skills: 'Лидерство, управление рисками, стратегический ум', message: 'Успешный бизнес — это решение реальных проблем людей.' },
      ],
    },
    studentVoices: {
      label: 'Голоса учеников',
      heading: 'Что говорят наши ученики',
      voices: [
        { name: 'Сардор, 11-А', quote: 'Больше всего в нашей школе мне нравится доверие учителей. Они всегда верят в нас и поддерживают.', image: PORTRAITS.student1, topic: 'О школе' },
        { name: 'Малика, 10-Б', quote: 'Мой любимый предмет — физика. Проводить опыты в настоящей лаборатории своими руками — это невероятно!', image: PORTRAITS.student4, topic: 'Любимый предмет' },
        { name: 'Жасур, 9-А', quote: 'Самое яркое воспоминание — первый турнир по робототехнике, когда мы всей командой готовили робота.', image: PORTRAITS.student2, topic: 'Воспоминания' },
        { name: 'Нигора, 11-B', quote: 'Здесь я чувствую себя свободно. Не боюсь задавать вопросы и высказывать свое мнение.', image: PORTRAITS.student5, topic: 'О школе' },
        { name: 'Азиз, 10-А', quote: 'Спортзал — мой второй дом. Наш тренер учит не только спорту, но и настоящей дисциплине.', image: PORTRAITS.student3, topic: 'Спорт' },
        { name: 'Дильноза, 11-А', quote: 'Библиотека — мое любимое место. Книги открыли для меня весь мир.', image: PORTRAITS.student6, topic: 'Чтение' },
      ],
    },
    videoIntro: {
      label: 'Школьная жизнь',
      heading: 'Видеотур по школе №13',
      description: 'Посмотрите на наши современные учебные классы, преподавателей и увлекательную жизнь учеников.',
      buttonText: 'Смотреть видео',
    },
    faq: {
      label: 'Вопросы и ответы',
      heading: 'Ответы на часто задаваемые вопросы',
      items: [
        { q: 'Где находится школа?', a: 'г. Ташкент, Юнусабадский район, ул. Амира Темура, 108. 5 минут пешком от станции метро "Юнусабад".' },
        { q: 'Во сколько начинаются занятия?', a: 'Уроки начинаются в 08:00. Прием учеников начинается в 07:30. Рекомендуется приходить за 10 минут.' },
        { q: 'Какие документы нужны для поступления?', a: 'Копия свидетельства о рождении, копии паспортов родителей, медицинская справка, 3 фотографии 2х3 и заявление.' },
        { q: 'Какие кружки есть в школе?', a: 'Робототехника, программирование, изобразительное искусство, спорт, шахматы, театр, английский язык. Все занятия бесплатные.' },
        { q: 'Какие предметы изучаются углубленно?', a: 'Углубленно изучаются математика, физика, информатика и английский язык. В 10–11 классах действуют профильные направления.' },
        { q: 'Как родители могут получать информацию?', a: 'Через Telegram-канал школы, электронный дневник и родительские собрания. Дни приема директора: каждый вторник 15:00–17:00.' },
      ],
    },
    news: {
      label: 'Новости',
      heading: 'Последние новости нашей школы',
      readMore: 'Подробнее',
      items: [
        { date: '02.08.2026', category: 'Достижение', title: 'Возвращение победителей олимпиады', excerpt: 'Победители республиканской олимпиады по математике и IT вернулись с медалями.', image: IMAGES.event2 },
        { date: '28.07.2026', category: 'Мероприятие', title: 'Итоги летней творческой школы', excerpt: 'В рамках 3-недельной летней школы ученики презентовали 15 инновационных проектов.', image: IMAGES.art1 },
        { date: '20.07.2026', category: 'Спорт', title: '2-е место на городском чемпионате', excerpt: 'Баскетбольная команда школы завоевала серебряные медали городского первенства.', image: IMAGES.sport3 },
        { date: '15.07.2026', category: 'Новость', title: 'Новая лаборатория робототехники', excerpt: 'В школе открылась лаборатория робототехники с более чем 30 современными конструкторами.', image: IMAGES.classroom5 },
      ],
    },
    contact: {
      label: 'Контакты',
      heading: 'Свяжитесь с нами',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Введите ваше имя',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: '+998 90 123 45 67',
      messageLabel: 'Ваше сообщение',
      messagePlaceholder: 'Напишите ваш вопрос или предложение...',
      submitBtn: 'Отправить сообщение',
      successMsg: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.',
      addressTitle: 'Адрес',
      phoneTitle: 'Телефон',
      emailTitle: 'Электронная почта',
      hoursTitle: 'Режим работы',
    },
    finalCta: {
      heading: 'Постройте будущее вашего ребенка вместе со школой №13',
      description: 'Качественное образование, сильный преподавательский состав и современные условия для всестороннего развития.',
      buttonText: 'Записаться на прием',
    },
    footer: {
      tagline: 'Мы создаем будущее здесь, вместе с каждым учеником.',
      rights: 'Все права защищены.',
      exploreTitle: 'Разделы',
      contactsTitle: 'Контакты',
    },
  },
  en: {
    navLinks: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'students', label: 'Students' },
      { id: 'teachers', label: 'Faculty' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'news', label: 'News' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'contact', label: 'Contact' },
    ],
    ctaNav: 'Discover Our School',
    schoolInfo: {
      name: 'Secondary School No. 13',
      shortName: 'SCHOOL NO. 13',
      address: '108 Amir Temur Street, Yunusabad District, Tashkent',
      phone: '+998 71 234 56 78',
      phone2: '+998 71 234 56 79',
      email: 'info@13maktab.uz',
      telegram: 't.me/maktab13',
      instagram: 'instagram.com/maktab13',
      youtube: 'youtube.com/@maktab13',
      hours: 'Monday–Saturday, 08:00–17:00',
      director: 'Anvar Sadriddinovich Karimov',
      directorTitle: 'School Principal',
    },
    hero: {
      badge: 'SECONDARY SCHOOL NO. 13',
      headingLine1: "We don't wait for the future.",
      headingLine2: 'We build it right here.',
      description: 'Providing high-quality education, nurturing character, and building futures for over 27 years. More than a school — a place where lifelong memories and dreams begin.',
      ctaPrimary: 'Explore School',
      ctaSecondary: 'Our Story',
      scrollDown: 'Scroll down',
    },
    story: {
      label: 'Our Philosophy',
      heading: 'A school is more than just walls.',
      description: 'It is a vibrant community of students, teachers, knowledge, enduring friendship, and bright futures. Behind every concept lies a whole world.',
      concepts: [
        { word: 'Student', desc: 'Every student is a confident, curious individual shaping their own tomorrow.', image: IMAGES.classroom2 },
        { word: 'Teacher', desc: 'A teacher is not merely a source of knowledge, but a guiding light who inspires discovery.', image: IMAGES.classroom3 },
        { word: 'Knowledge', desc: 'Here, knowledge is gained for life, not just exams. Every lesson is a step forward.', image: IMAGES.library1 },
        { word: 'Friendship', desc: 'Friendships formed here last a lifetime. The people you meet become part of your journey.', image: IMAGES.studentsGroup },
        { word: 'Achievement', desc: 'Success is not a destination, but a continuous journey powered by dedication and effort.', image: IMAGES.event2 },
        { word: 'Future', desc: "We don't wait for tomorrow. We shape the future today in these very classrooms.", image: IMAGES.classroom1 },
      ],
    },
    about: {
      label: 'About School',
      heading: 'Harmony of Knowledge, Humanity, and Future.',
      desc1: 'Since its foundation in 1998, School No. 13 has aimed not just to instruct, but to educate and shape well-rounded individuals. Students discover themselves, their world, and their possibilities.',
      desc2: 'Our mission is to unlock the hidden potential within every child, raising them into confident leaders ready for the global stage.',
      estLabel: 'Year Established',
      directorLabel: 'School Principal',
      values: [
        { iconName: 'Target', title: 'Goal', desc: "Unlocking every student's full potential." },
        { iconName: 'Heart', title: 'Care', desc: 'Individualized care and attention for every student.' },
        { iconName: 'Eye', title: 'Openness', desc: 'Transparent communication with parents and community.' },
        { iconName: 'Sparkles', title: 'Mindset', desc: 'Fostering deep critical thinking and intellectual curiosity.' },
      ],
      statsLabel: 'School by the Numbers',
      statsHeading: '27 years of shared history and excellence.',
      stats: [
        { value: 1000, suffix: '+', label: 'Students' },
        { value: 80, suffix: '+', label: 'Teachers' },
        { value: 32, suffix: '', label: 'Classrooms' },
        { value: 27, suffix: '', label: 'Years of History' },
        { value: 150, suffix: '+', label: 'Awards' },
      ],
    },
    dayTimeline: {
      label: 'A Day at School',
      heading: 'A Day in School No. 13',
      description: 'From morning to evening — every hour holds its own story. Follow our daily school timeline.',
      schedule: [
        { time: '07:30', title: 'Morning Arrival', desc: 'Students arrive, classrooms are prepared, and morning briefings begin.', image: IMAGES.schoolBuilding, icon: 'Sunrise' },
        { time: '08:00', title: 'Classes Begin', desc: 'First period lessons start: Mathematics, Literature, Natural Sciences, and Languages.', image: IMAGES.classroom1, icon: 'BookOpen' },
        { time: '10:30', title: 'Recess Break', desc: 'Main recess break. Students relax, socialize, and enjoy healthy snacks.', image: IMAGES.classroom4, icon: 'Coffee' },
        { time: '11:00', title: 'Hands-on Labs', desc: 'Laboratory work, IT coding sessions, experiments, and group projects.', image: IMAGES.lab1, icon: 'FlaskConical' },
        { time: '13:00', title: 'Lunch Time', desc: 'Nutritious hot meals served daily at our modern school cafeteria.', image: IMAGES.classroom6, icon: 'Utensils' },
        { time: '14:00', title: 'Extracurricular Clubs', desc: 'Robotics, fine arts, sports, chess, reading, and science clubs.', image: IMAGES.art1, icon: 'Palette' },
        { time: '16:00', title: 'Sports & Arts', desc: 'Gymnasium training, creative art workshops, and team practices.', image: IMAGES.sport1, icon: 'Trophy' },
      ],
    },
    students: {
      label: 'Student Life',
      heading: 'Our Students',
      description: "The true strength of our school lies in its students. Every student is empowered to excel across academics, science, sports, and creative arts.",
      categories: [
        { title: 'Academic Olympiads', desc: 'Regular participation and victories in national and international Olympiads in Math, Physics, Chemistry, and IT.', image: IMAGES.testTaking, icon: 'Medal' },
        { title: 'IT & Technology', desc: 'Robotics, software development, artificial intelligence fundamentals, and web design clubs.', image: IMAGES.classroom5, icon: 'Laptop' },
        { title: 'Sports', desc: 'School varsity teams in football, basketball, volleyball, chess, and athletics.', image: IMAGES.sport2, icon: 'Dumbbell' },
        { title: 'Arts & Culture', desc: 'Painting, music, theatre, and dance studios. Every student talent is nurtured.', image: IMAGES.art2, icon: 'Palette' },
        { title: 'Book Club', desc: 'Weekly literature discussions. Our library houses over 10,000 physical & digital books.', image: IMAGES.library2, icon: 'BookMarked' },
        { title: 'Science Projects', desc: 'Students work on real-world scientific research projects with expert guidance.', image: IMAGES.lab2, icon: 'Microscope' },
      ],
      starsLabel: 'School Pride',
      starsHeading: 'Our Star Students',
      starsSub: 'They represent the excellence of our school. Behind every award lies relentless effort, discipline, and ambition.',
      stars: [
        { name: 'Sardor Rahimov', grade: 'Grade 11-A', achievement: 'Math Olympiad — 1st Place', competition: 'National Science Olympiad', result: 'Gold Medal', image: PORTRAITS.student1 },
        { name: 'Malika Yusupova', grade: 'Grade 10-B', achievement: 'Computer Science — 2nd Place', competition: 'International Olympiad', result: 'Silver Medal', image: PORTRAITS.student4 },
        { name: 'Jasur Tursunov', grade: 'Grade 11-B', achievement: 'Robotics — 1st Place', competition: 'Regional IT Challenge', result: 'Grand Prix', image: PORTRAITS.student2 },
        { name: 'Nigora Karimova', grade: 'Grade 9-A', achievement: 'English Language — 1st Place', competition: 'City Language Olympiad', result: 'Certificate', image: PORTRAITS.student5 },
        { name: 'Aziz Mahmudov', grade: 'Grade 10-A', achievement: 'Chess Championship — 1st Place', competition: 'City Championship', result: 'Champion', image: PORTRAITS.student3 },
        { name: 'Dilnoza Ahmedova', grade: 'Grade 11-A', achievement: 'Biology Olympiad — 2nd Place', competition: 'National Science Olympiad', result: 'Silver Medal', image: PORTRAITS.student6 },
      ],
    },
    teachers: {
      label: 'Faculty',
      heading: 'Teachers Who Inspire and Educate',
      description: 'Our experienced, dedicated faculty utilizes modern pedagogical methods to ensure every student receives personalized attention.',
      teachersList: [
        { name: 'Anvar Sadriddinovich Karimov', subject: 'School Principal', position: 'Mathematics Teacher', quote: 'A great student to me is one who is never afraid to ask thoughtful questions.', image: PORTRAITS.teacher1 },
        { name: 'Gulnora Rashidovna Yusupova', subject: 'Native Language & Literature', position: 'Master Educator', quote: 'Language is the soul of a nation. I nurture a deep love for literature in every student.', image: PORTRAITS.teacher2 },
        { name: 'Bakhtiyor Toshtemirovich Rahimov', subject: 'Physics', position: 'Head of Olympiad Training', quote: 'Physics is the rulebook of life. If it does not amaze you, you have not truly learned it yet.', image: PORTRAITS.teacher3 },
        { name: 'Munira Kholmatovna Saidova', subject: 'English Language', position: 'Head of CEFR Preparation', quote: 'Language is a door to the world. We raise global citizens ready for world stage opportunities.', image: PORTRAITS.teacher4 },
        { name: 'Dilfuza Ergashevna Tursinova', subject: 'Chemistry', position: 'Head of Science Research', quote: 'Chemistry must be learned in the lab. Experimentation is the foundation of true knowledge.', image: PORTRAITS.teacher5 },
        { name: 'Shuhrat Nematovich Ergashev', subject: 'Physical Education', position: 'Varsity Athletics Coach', quote: 'Caring for the body is caring for the mind. An active student is a successful student.', image: PORTRAITS.teacher6 },
      ],
    },
    todayAndHistory: {
      todayLabel: 'Today at School',
      todayHeading: 'Today\'s Events and Activities',
      todayEvents: [
        { time: '10:00', title: 'Basketball Tournament', desc: 'Inter-class championship between 9th and 10th grades.', tag: 'Sports', image: IMAGES.sport3 },
        { time: '12:00', title: 'Author Meetup', desc: 'Special meeting with a featured author during Literature Week.', tag: 'Culture', image: IMAGES.library3 },
        { time: '15:00', title: 'Art Workshop', desc: 'Open masterclass on watercolor painting techniques.', tag: 'Arts', image: IMAGES.art1 },
      ],
      historyLabel: 'Our History',
      historyHeading: 'Our Journey Since 1998',
      historyTimeline: [
        { year: '1998', title: 'School Establishment', desc: 'School No. 13 opened in Yunusabad district, welcoming its first 320 students.', image: IMAGES.schoolBuilding2 },
        { year: '2005', title: 'Advanced STEM Curricula', desc: 'Specialized Math & Physics classes were introduced alongside the first IT club.', image: IMAGES.classroom1 },
        { year: '2015', title: 'Era of Excellence', desc: 'International Olympiad achievements and state-of-the-art laboratory upgrades.', image: IMAGES.lab3 },
        { year: '2025', title: 'Next Generation', desc: 'Integration of Artificial Intelligence, robotics, and startup culture into daily campus life.', image: IMAGES.classroom5 },
        { year: '2026', title: 'Toward the Future', desc: 'International academic partnerships and digital smart school concept.', image: IMAGES.studentsGroup },
      ],
    },
    gallery: {
      label: 'Gallery',
      heading: 'Memories of School No. 13',
      description: 'Every photograph tells a story. The brightest moments of our school life.',
      allCategory: 'All',
      categories: ['All', 'Lessons', 'Sports', 'Events', 'Holidays', 'Students', 'Faculty'],
      images: [
        { src: IMAGES.classroom1, category: 'Lessons', title: 'Math Lesson', span: 'tall' },
        { src: IMAGES.sport1, category: 'Sports', title: 'Football Match', span: 'wide' },
        { src: IMAGES.event1, category: 'Holidays', title: 'School Festival', span: 'normal' },
        { src: IMAGES.classroom2, category: 'Lessons', title: 'Interactive Class', span: 'normal' },
        { src: IMAGES.lab1, category: 'Lessons', title: 'Science Lab Experiment', span: 'tall' },
        { src: IMAGES.sport2, category: 'Sports', title: 'Gymnasium', span: 'normal' },
        { src: IMAGES.event2, category: 'Events', title: 'Awards Ceremony', span: 'wide' },
        { src: IMAGES.art1, category: 'Events', title: 'Creative Workshop', span: 'normal' },
        { src: IMAGES.library1, category: 'Lessons', title: 'Library Study', span: 'tall' },
        { src: IMAGES.event3, category: 'Holidays', title: 'Alumni Day', span: 'normal' },
        { src: IMAGES.classroom3, category: 'Faculty', title: 'Teacher Lecture', span: 'wide' },
        { src: IMAGES.sport3, category: 'Sports', title: 'Basketball Game', span: 'normal' },
        { src: IMAGES.event4, category: 'Holidays', title: 'Independence Day', span: 'tall' },
        { src: IMAGES.classroom4, category: 'Students', title: 'Recess Fun', span: 'normal' },
        { src: IMAGES.lab4, category: 'Lessons', title: 'Chemistry Lab', span: 'normal' },
        { src: IMAGES.art2, category: 'Events', title: 'Art Exhibition', span: 'wide' },
        { src: IMAGES.library2, category: 'Students', title: 'Reading Time', span: 'tall' },
        { src: IMAGES.classroom5, category: 'Students', title: 'Computer Science Class', span: 'normal' },
      ],
    },
    schoolMap: {
      label: 'Interactive Map',
      heading: 'Virtual Tour of School',
      description: 'Explore our classrooms, laboratories, and facilities.',
      locations: [
        { id: 'classrooms', name: 'Classrooms', desc: '32 modern classrooms equipped with interactive smartboards and ergonomic seating.', image: IMAGES.classroom1, icon: 'DoorOpen', x: 20, y: 30 },
        { id: 'library', name: 'Library', desc: 'Over 10,000 books, quiet study zones, and digital learning databases.', image: IMAGES.library1, icon: 'BookMarked', x: 55, y: 20 },
        { id: 'it', name: 'IT Lab', desc: '30 high-spec PCs, robotics suites, and coding workspaces.', image: IMAGES.classroom5, icon: 'Laptop', x: 80, y: 35 },
        { id: 'sport', name: 'Sports Complex', desc: 'Fully equipped indoor gym for basketball, volleyball, and gymnastics.', image: IMAGES.sport1, icon: 'Dumbbell', x: 30, y: 65 },
        { id: 'lab', name: 'Science Labs', desc: 'Dedicated Physics, Chemistry, and Biology laboratories with safety equipment.', image: IMAGES.lab1, icon: 'FlaskConical', x: 60, y: 55 },
        { id: 'art', name: 'Art Studio', desc: 'Creative workshop space for painting, music, and dramatic arts.', image: IMAGES.art1, icon: 'Palette', x: 80, y: 70 },
        { id: 'canteen', name: 'Cafeteria', desc: 'Healthy and nutritious meal service catering to 1000+ students daily.', image: IMAGES.classroom6, icon: 'Utensils', x: 45, y: 80 },
      ],
    },
    parents: {
      label: 'For Parents',
      heading: 'Building Our Children\'s Future Together.',
      description: 'Essential information, daily bell schedules, school rules, and admissions guidelines.',
      infoList: [
        { title: 'School Routine', icon: 'ClipboardList', content: 'Campus opens at 07:30. Classes begin at 08:00 sharp. Tardiness is logged. Official school uniform is mandatory.' },
        { title: 'Bell Schedule', icon: 'Clock', content: 'Period 1: 08:00–08:45\nPeriod 2: 08:55–09:40\nPeriod 3: 09:50–10:35\nPeriod 4: 10:55–11:40\nPeriod 5: 11:50–12:35\nPeriod 6: 12:45–13:30' },
        { title: 'Extracurriculars', icon: 'Users', content: 'Robotics, Coding, Art, Sports, Chess, Book Club, Theatre, English, Math Olympiad. All clubs are free.' },
        { title: 'Key Contacts', icon: 'Phone', content: 'Principal: +998 71 234 56 78\nAcademic Office: +998 71 234 56 79\nParents Committee: +998 71 234 56 80\nEmergency: +998 71 234 56 81' },
        { title: 'School Rules', icon: 'ScrollText', content: 'Uniform mandatory. Mobile phones must be silenced during lessons. Mutual respect and courtesy are required.' },
        { title: 'Required Documents', icon: 'FileText', content: 'Copy of birth certificate, parent passport copies, medical record form, 3 photos (2x3), completed application.' },
        { title: 'Admissions Info', icon: 'UserPlus', content: '1st Grade admissions open June 1st. Ages 6 and 7 accepted. Class sizes are strictly limited.' },
      ],
    },
    graduates: {
      label: 'Our Alumni',
      heading: 'Their Success is Our Pride.',
      list: [
        { name: 'Dr. Aziz Karimov', year: 'Class of 2005', profession: 'Cardiothoracic Surgeon', university: 'Tashkent Medical Academy', story: 'My biology teacher at School 13 ignited my passion for medicine. Today I perform open heart surgeries.', image: PORTRAITS.student7 },
        { name: 'Sardor Nazarov', year: 'Class of 2008', profession: 'Software Engineer', university: 'NUUz, Stanford University (M.S.)', story: 'The school IT club defined my career path. Today I work as a senior software engineer at Google.', image: PORTRAITS.student3 },
        { name: 'Malika Rashidova', year: 'Class of 2010', profession: 'Architect', university: 'Tashkent Institute of Architecture', story: 'School art classes helped me discover my creative expression. Now I design landmark buildings.', image: PORTRAITS.student8 },
        { name: 'Bektemir Yusupov', year: 'Class of 2012', profession: 'Entrepreneur & Founder', university: 'WIUT', story: 'School taught me to tackle ambitious goals without fear. Today I run my own growing enterprise.', image: PORTRAITS.student9 },
      ],
    },
    futureCareers: {
      label: 'Careers of the Future',
      heading: 'Which Path Will You Choose?',
      subjectsLabel: 'Key Subjects:',
      skillsLabel: 'Essential Skills:',
      careers: [
        { name: 'Software Engineer', icon: 'Code', desc: 'Creator of software solutions and algorithms.', subjects: 'Mathematics, IT, English', skills: 'Logic, problem solving, teamwork', message: 'The code you write in class today can serve millions tomorrow.' },
        { name: 'Doctor', icon: 'Stethoscope', desc: 'Guardian of human health and life.', subjects: 'Biology, Chemistry, Physics', skills: 'Focus, empathy, critical judgment', message: 'Care and empathy skills begin in your classroom today.' },
        { name: 'Engineer', icon: 'Cog', desc: 'Designer and builder of modern infrastructure.', subjects: 'Mathematics, Physics, Technical Drawing', skills: 'Analytical mindset, creativity', message: 'Every bridge and skyscraper begins in an engineer\'s imagination.' },
        { name: 'Scientist', icon: 'Microscope', desc: 'Researcher expanding the frontiers of human knowledge.', subjects: 'Mathematics, Physics, Chemistry, Biology', skills: 'Research, patience, analytical inquiry', message: 'Discoveries start with simple questions. Ask yours.' },
        { name: 'Designer', icon: 'Palette', desc: 'Creator combining aesthetics and functionality.', subjects: 'Arts, Drawing, Information Technology', skills: 'Aesthetics, creativity, UI/UX thinking', message: 'Design is the art of making the world intuitive and beautiful.' },
        { name: 'Teacher', icon: 'GraduationCap', desc: 'Educator and mentor of future generations.', subjects: 'Literature, Languages, Pedagogy', skills: 'Patience, communication, inspiration', message: 'The greatest teacher enables students to surpass their mentors.' },
        { name: 'Athlete', icon: 'Trophy', desc: 'Master of physical performance and willpower.', subjects: 'Physical Education, Biology, Psychology', skills: 'Discipline, grit, goal-orientation', message: 'Champions are built in the heart long before the podium.' },
        { name: 'Entrepreneur', icon: 'Briefcase', desc: 'Visionary turning innovative ideas into enterprises.', subjects: 'Mathematics, Economics, English', skills: 'Leadership, risk management, execution', message: 'The greatest business is solving real problems for others.' },
      ],
    },
    studentVoices: {
      label: 'Student Voices',
      heading: 'What Our Students Say',
      voices: [
        { name: 'Sardor, Grade 11-A', quote: 'What I love most is how much our teachers believe in us. They never say "you can\'t do it".', image: PORTRAITS.student1, topic: 'About School' },
        { name: 'Malika, Grade 10-B', quote: 'My favorite subject is Physics. Conducting experiments with my own hands in our lab is amazing.', image: PORTRAITS.student4, topic: 'Favorite Subject' },
        { name: 'Jasur, Grade 9-A', quote: 'My best memory is our first robotics competition where we worked together as a team overnight.', image: PORTRAITS.student2, topic: 'Memories' },
        { name: 'Nigora, Grade 11-B', quote: 'I feel free to express my opinions and ask questions here without hesitation.', image: PORTRAITS.student5, topic: 'About School' },
        { name: 'Aziz, Grade 10-A', quote: 'The gym is like my second home. Our coach teaches us discipline along with sportsmanship.', image: PORTRAITS.student3, topic: 'Sports' },
        { name: 'Dilnoza, Grade 11-A', quote: 'The library is my favorite spot on campus. Books opened up a whole new world to me.', image: PORTRAITS.student6, topic: 'Reading' },
      ],
    },
    videoIntro: {
      label: 'School Life',
      heading: 'Video Tour of School No. 13',
      description: 'Take a virtual tour through our classrooms, facilities, and dynamic student activities.',
      buttonText: 'Watch Video',
    },
    faq: {
      label: 'Frequently Asked Questions',
      heading: 'Answers to Your Questions',
      items: [
        { q: 'Where is the school located?', a: '108 Amir Temur Street, Yunusabad district, Tashkent. A 5-minute walk from "Yunusabad" metro station.' },
        { q: 'What time do classes start?', a: 'Classes begin at 08:00 AM. Student arrival starts at 07:30 AM. Arriving 10 minutes early is recommended.' },
        { q: 'What documents are required for admission?', a: 'Birth certificate copy, parents\' passport copies, medical health form, 3 photos (2x3), and completed application form.' },
        { q: 'What extracurricular activities are offered?', a: 'Robotics, programming, fine arts, varsity sports, chess, reading club, drama, English language, and Math Olympiad prep. All clubs are free.' },
        { q: 'Which subjects are taught at an advanced level?', a: 'Mathematics, Physics, Computer Science, and English are taught with advanced curricula. Specialized tracks are available in Grades 10–11.' },
        { q: 'How can parents stay informed?', a: 'Through the school Telegram channel, website, student digital gradebook, and quarterly parent meetings. Principal office hours: Tuesdays 15:00–17:00.' },
      ],
    },
    news: {
      label: 'News & Updates',
      heading: 'Latest School Announcements',
      readMore: 'Read More',
      items: [
        { date: '02.08.2026', category: 'Achievement', title: 'Olympiad Winners Return Home', excerpt: 'Our Math and IT Olympiad champions returned with gold and silver national medals.', image: IMAGES.event2 },
        { date: '28.07.2026', category: 'Event', title: 'Summer Creative School Concludes', excerpt: 'Students presented 15 innovative capstone projects during the 3-week summer intensive.', image: IMAGES.art1 },
        { date: '20.07.2026', category: 'Sports', title: '2nd Place in City Championship', excerpt: 'Our school basketball team won silver medals at the Tashkent City Championship.', image: IMAGES.sport3 },
        { date: '15.07.2026', category: 'News', title: 'New Robotics Lab Launch', excerpt: 'A state-of-the-art robotics laboratory opened with over 30 advanced STEM construction kits.', image: IMAGES.classroom5 },
      ],
    },
    contact: {
      label: 'Contact Us',
      heading: 'Get in Touch',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+998 90 123 45 67',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Write your question or request...',
      submitBtn: 'Send Message',
      successMsg: 'Your message has been sent successfully! We will contact you shortly.',
      addressTitle: 'Address',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      hoursTitle: 'Working Hours',
    },
    finalCta: {
      heading: 'Build Your Child\'s Future with School No. 13',
      description: 'Provide your child with superior education, expert faculty, and modern facilities designed for excellence.',
      buttonText: 'Enroll Now',
    },
    footer: {
      tagline: 'Building the future right here, together with every student.',
      rights: 'All rights reserved.',
      exploreTitle: 'Explore',
      contactsTitle: 'Contacts',
    },
  },
};
