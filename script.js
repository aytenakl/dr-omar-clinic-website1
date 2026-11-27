
var FB = "https://www.facebook.com/profile.php?id=61570796702910";

document.querySelectorAll('a[href="FB"]').forEach(function (a) {
  a.href = FB;
});

var T = {
  ar: {
    brand: "د. عمر أبو المكارم",
    n1: "الخدمات", n2: "المؤهلات", n3: "العيادات", n4: "احجز",
    fb: "فيسبوك", fb2: "تابعنا على فيسبوك",
    role: "استشاري أمراض الباطنة والقلب والسكر وحساسية الصدر",
    name: "د. عمر محمد أبو المكارم",
    lead: "كلية الطب جامعة عين شمس. تشخيص دقيق وشرح واضح، في ثلاث عيادات بالإسكندرية ورشيد.",
    wa: "احجز عبر واتساب", pick: "اختر العيادة",
    s1: "عيادات", s2: "خدمات أساسية",
    s3b: "Ain Shams", s3: "جامعة عين شمس",
    c1: "رعاية السكر", c2: "الصدرية", c3: "القلب والباطنة",
    h_s: "رعاية طبية شاملة",
    p_s: "كل ما تحتاجه في مكان واحد بدقة واهتمام.",
    h_a: "المؤهلات والخبرات",
    h_c: "عيادات الدكتور",
    p_c: "اختر أقرب عيادة لك وتواصل مباشرة.",
    h_b: "احجز موعدك الآن",
    p_b: "تواصل معنا على واتساب للاستفسار وتحديد الموعد المناسب لك.",
    b1: "رشيد والإسكندرية", b2: "ميامي",
    copy: "© 2026 د. عمر أبو المكارم — جميع الحقوق محفوظة.",
    wab: "واتساب", call: "اتصال",
    find: "عرض الموقع والاتجاهات",
    open: "افتح الخريطة",
    alex: "الإسكندرية", rashid: "رشيد"
  },
  en: {
    brand: "Dr. Omar Abu Al-Makarem",
    n1: "Services", n2: "Credentials", n3: "Clinics", n4: "Book",
    fb: "Facebook", fb2: "Follow us on Facebook",
    role: "Consultant in Internal Medicine, Cardiology, Diabetes & Chest Allergy",
    name: "Dr. Omar Mohamed Abu Al-Makarem",
    lead: "Ain Shams University Faculty of Medicine. Precise diagnosis and clear guidance across three clinics in Alexandria and Rashid.",
    wa: "Book on WhatsApp", pick: "Choose a clinic",
    s1: "Clinics", s2: "Core services",
    s3b: "Ain Shams", s3: "University",
    c1: "Diabetes care", c2: "Chest", c3: "Heart & internal",
    h_s: "Complete medical care",
    p_s: "Everything you need in one place, with precision and care.",
    h_a: "Qualifications & experience",
    h_c: "The doctor's clinics",
    p_c: "Choose the clinic nearest to you and get in touch directly.",
    h_b: "Book your appointment",
    p_b: "Message us on WhatsApp to ask questions or set a suitable time.",
    b1: "Rashid & Alexandria", b2: "Miami",
    copy: "© 2026 Dr. Omar Abu Al-Makarem. All rights reserved.",
    wab: "WhatsApp", call: "Call",
    find: "Location & directions",
    open: "Open map",
    alex: "Alexandria", rashid: "Rashid"
  }
};

var S = [
  ["كشف شامل واستشارات طبية", "تقييم دقيق وإرشاد طبي واضح.",
   "Full examination & consultation", "Accurate assessment and clear medical guidance."],
  ["الكشف بالأشعة التلفزيونية", "فحص بالموجات فوق الصوتية لحظيًا.",
   "Ultrasound examination", "Real-time ultrasound scanning during the visit."],
  ["رسم قلب (ECG/EKG)", "رسم دقيق لنبض القلب ووظيفته.",
   "ECG / EKG", "Accurate recording of heart rhythm and function."],
  ["متابعة السكر وحساسية الصدر", "متابعة دقيقة ومستمرة لكل حالة.",
   "Diabetes & chest allergy follow-up", "Careful, continuous follow-up for every case."]
];

var Q = [
  ["استشاري أمراض الباطنة والقلب والسكر وحساسية الصدر",
   "Consultant in Internal Medicine, Cardiology, Diabetes & Chest Allergy"],
  ["كلية الطب جامعة عين شمس", "Faculty of Medicine, Ain Shams University"],
  ["ماجستير الباطنة العامة، جامعة عين شمس",
   "MSc General Internal Medicine, Ain Shams University"],
  ["دراسات عليا أمراض القلب، جامعة عين شمس",
   "Postgraduate studies in Cardiology, Ain Shams University"],
  ["استشاري ومدير مركز السكر بالتأمين الصحي بالبحيرة سابقًا",
   "Former consultant and director, Diabetes Center, Health Insurance, Beheira"],
  ["استشاري أمراض الصدر والعناية المركزة بالتأمين الصحي سابقًا",
   "Former consultant in Chest Diseases & Intensive Care, Health Insurance"]
];

var D = [
  ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
];

var C = [
  {
    g: "alex",
    n: ["عيادة السيوف", "Sayouf Clinic"],
    a: [
      "السيوف، أمام كارفور، عمارة جاردينيا (4)، أعلى توشيبا العربي.",
      "Sayouf, opposite Carrefour, Gardenia Building (4), above Toshiba Al Arabi."
    ],
    d: [0, 2, 4],
    h: ["من 6 إلى 9 مساءً", "6–9 PM"],
    t: ["01225627258", "01018302035"],
    w: "201096082520",
    m: "https://maps.app.goo.gl/rpAWN7wrLasPViqx5",
    q: "السيوف أمام كارفور عمارة جاردينيا 4 الإسكندرية مصر"
  },
  {
    g: "alex",
    n: ["عيادة ميامي", "Miami Clinic"],
    a: [
      "194 شارع خالد بن الوليد، ميامي، أمام صيدلية الميريلاند. متواجد في عيادات علم الطب.",
      "194 Khaled Ibn Al-Walid St., Miami, opposite Maryland Pharmacy. Located in Elm El-Tib Clinics."
    ],
    d: [0, 2, 4],
    h: ["من 10 إلى 12 مساءً", "10 PM–12 AM"],
    t: ["01153870764", "01018302035"],
    w: "201011871948",
    m: "https://maps.app.goo.gl/JzuxRqfyjCuCtsPb6",
    q: "194 شارع خالد بن الوليد ميامي الإسكندرية أمام صيدلية الميريلاند مصر"
  },
  {
    g: "rashid",
    n: ["عيادة رشيد", "Rashid Clinic"],
    a: ["شارع الساعة، رشيد.", "Al-Sa'a Street, Rashid (Rosetta)."],
    d: [6, 1, 3],
    h: ["من 2 إلى 10 مساءً", "2–10 PM"],
    t: ["01014171920", "0452927077"],
    w: "201096082520",
    m: "https://maps.app.goo.gl/PqCGzCUAUFEEJvT39",
    q: "شارع الساعة رشيد البحيرة مصر"
  }
];

var WA = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/></svg>';
var L = "ar";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (ch) {
    return {
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      '"': "&quot;", "'": "&#39;"
    }[ch];
  });
}

function card(c, i) {
  var k = T[L];
  var days = D[i];
  var embedURL = "https://maps.google.com/maps?q=" +
    encodeURIComponent(c.q) + "&output=embed";

  return '<article class="card clinic rv">' +
    '<h3>' + escapeHTML(c.n[i]) + '</h3>' +
    '<div class="map">' +
      '<iframe src="' + embedURL + '"' +
        ' title="' + escapeHTML(k.open + " - " + c.n[i]) + '"' +
        ' loading="lazy" referrerpolicy="no-referrer-when-downgrade"' +
        ' allowfullscreen></iframe>' +
    '</div>' +
    '<div class="addr">' + escapeHTML(c.a[i]) + '</div>' +
    '<div class="sched"><div class="days">' +
      c.d.map(function (x) {
        return "<span>" + escapeHTML(days[x]) + "</span>";
      }).join("") +
    '</div><b>' + escapeHTML(c.h[i]) + '</b></div>' +
    '<div class="tel">' +
      c.t.map(function (number) {
        return '<a href="tel:' + number + '">' +
          escapeHTML(number) + '</a>';
      }).join("") +
    '</div>' +
    '<div class="act">' +
      '<a class="pill wa" href="https://wa.me/' + c.w +
        '" target="_blank" rel="noopener">' + WA +
        escapeHTML(k.wab) + '</a>' +
      '<a class="pill navy" href="tel:' + c.t[0] + '">' +
        escapeHTML(k.call) + '</a>' +
      '<a class="pill full" href="' + c.m +
        '" target="_blank" rel="noopener">' +
        escapeHTML(k.find) + '</a>' +
    '</div></article>';
}

var io;

function reveal() {
  var els = document.querySelectorAll(".rv");

  els.forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 60 + "ms";
  });

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("on"); });
    return;
  }

  if (io) io.disconnect();

  io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(function (el) {
    if (!el.classList.contains("on")) io.observe(el);
  });
}

function render() {
  var i = L === "ar" ? 0 : 1;
  var k = T[L];

  document.documentElement.lang = L;
  document.documentElement.dir = L === "ar" ? "rtl" : "ltr";

  document.getElementById("lang").textContent =
    L === "ar" ? "EN" : "عربي";

  document.querySelectorAll("[data-k]").forEach(function (el) {
    var key = el.getAttribute("data-k");
    if (k[key] !== undefined) el.textContent = k[key];
  });

  document.getElementById("svc").innerHTML = S.map(function (s) {
    return '<article class="card rv"><h3>' +
      escapeHTML(s[i * 2]) + '</h3><p>' +
      escapeHTML(s[i * 2 + 1]) + '</p></article>';
  }).join("");

  document.getElementById("cred").innerHTML = Q.map(function (q) {
    return '<article class="card cred rv"><h3>' +
      escapeHTML(q[i]) + '</h3></article>';
  }).join("");

  var alex = C.filter(function (c) {
    return c.g === "alex";
  }).map(function (c) {
    return card(c, i);
  }).join("");

  var rashid = C.filter(function (c) {
    return c.g === "rashid";
  }).map(function (c) {
    return card(c, i);
  }).join("");

  document.getElementById("cl").innerHTML =
    '<div class="grp"><h3>' + k.alex + '</h3></div>' +
    '<div class="cl">' + alex + '</div>' +
    '<div class="grp"><h3>' + k.rashid + '</h3></div>' +
    '<div class="cl one">' + rashid + '</div>';

  reveal();
}

document.getElementById("lang").addEventListener("click", function () {
  L = L === "ar" ? "en" : "ar";

  try {
    localStorage.setItem("lang", L);
  } catch (e) {}

  render();
});

try {
  var savedLanguage = localStorage.getItem("lang");
  if (savedLanguage === "en" || savedLanguage === "ar") {
    L = savedLanguage;
  }
} catch (e) {}

render();

(function () {
  var nav = document.querySelector("header.nav");

  function updateHeader() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  var arch = document.querySelector(".arch");
  var hero = document.querySelector(".hero");

  if (
    !arch ||
    !hero ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !window.matchMedia("(pointer: fine)").matches
  ) return;

  var tx = 0, ty = 0, x = 0, y = 0;

  hero.addEventListener("mousemove", function (e) {
    var rect = hero.getBoundingClientRect();
    tx = (e.clientX - rect.left) / rect.width - 0.5;
    ty = (e.clientY - rect.top) / rect.height - 0.5;
  });

  hero.addEventListener("mouseleave", function () {
    tx = 0;
    ty = 0;
  });

  function loop() {
    x += (tx - x) * 0.07;
    y += (ty - y) * 0.07;

    arch.style.transform =
      "translate3d(" + x * 8 + "px," + y * 6 + "px,0)";

    requestAnimationFrame(loop);
  }

  loop();
})();
