import { useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  svgOverlay: React.ReactNode;
}

// ─── SVG Overlays ─────────────────────────────────────────────────────────────
const MATH_VLINES = Array.from({ length: 20 }, (_, i) => ({
  key: `mv${i}`,
  x: i * 65,
}));
const MATH_HLINES = Array.from({ length: 14 }, (_, i) => ({
  key: `mh${i}`,
  y: i * 60,
}));

const MathSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    {MATH_VLINES.map(({ key, x }) => (
      <line
        key={key}
        x1={x}
        y1="0"
        x2={x}
        y2="800"
        stroke="white"
        strokeOpacity="0.03"
        strokeWidth="1"
      />
    ))}
    {MATH_HLINES.map(({ key, y }) => (
      <line
        key={key}
        x1="0"
        y1={y}
        x2="1200"
        y2={y}
        stroke="white"
        strokeOpacity="0.03"
        strokeWidth="1"
      />
    ))}
    <text
      x="80"
      y="120"
      fontSize="60"
      fill="white"
      fillOpacity="0.05"
      fontFamily="serif"
    >
      ∑
    </text>
    <text
      x="900"
      y="200"
      fontSize="80"
      fill="white"
      fillOpacity="0.05"
      fontFamily="serif"
    >
      π
    </text>
    <text
      x="200"
      y="400"
      fontSize="70"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      ∫
    </text>
    <text
      x="1050"
      y="500"
      fontSize="60"
      fill="white"
      fillOpacity="0.05"
      fontFamily="serif"
    >
      √
    </text>
    <text
      x="500"
      y="680"
      fontSize="50"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      Δx→0
    </text>
    <text
      x="350"
      y="200"
      fontSize="40"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      f(x) = ax²+bx+c
    </text>
    <text
      x="700"
      y="600"
      fontSize="35"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      ∇·E = ρ/ε₀
    </text>
    <text
      x="100"
      y="600"
      fontSize="45"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      ∞
    </text>
    <text
      x="800"
      y="350"
      fontSize="40"
      fill="white"
      fillOpacity="0.04"
      fontFamily="serif"
    >
      e^(iπ)+1=0
    </text>
    <circle
      cx="1100"
      cy="150"
      r="80"
      fill="none"
      stroke="white"
      strokeOpacity="0.04"
      strokeWidth="2"
    />
    <polygon
      points="150,650 220,520 290,650"
      fill="none"
      stroke="white"
      strokeOpacity="0.05"
      strokeWidth="1.5"
    />
    <rect
      x="950"
      y="600"
      width="100"
      height="100"
      fill="none"
      stroke="white"
      strokeOpacity="0.04"
      strokeWidth="1.5"
      transform="rotate(30 1000 650)"
    />
  </svg>
);

const MarketingSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <rect
      x="80"
      y="500"
      width="40"
      height="120"
      fill="white"
      fillOpacity="0.04"
    />
    <rect
      x="130"
      y="420"
      width="40"
      height="200"
      fill="white"
      fillOpacity="0.05"
    />
    <rect
      x="180"
      y="460"
      width="40"
      height="160"
      fill="white"
      fillOpacity="0.04"
    />
    <rect
      x="230"
      y="380"
      width="40"
      height="240"
      fill="white"
      fillOpacity="0.04"
    />
    <rect
      x="280"
      y="340"
      width="40"
      height="280"
      fill="white"
      fillOpacity="0.05"
    />
    <polyline
      points="100,500 150,420 200,460 250,380 300,340 350,300 400,260 450,220"
      fill="none"
      stroke="white"
      strokeOpacity="0.07"
      strokeWidth="2"
    />
    <circle cx="700" cy="200" r="12" fill="white" fillOpacity="0.06" />
    <circle cx="780" cy="140" r="9" fill="white" fillOpacity="0.05" />
    <circle cx="860" cy="220" r="11" fill="white" fillOpacity="0.05" />
    <circle cx="760" cy="280" r="8" fill="white" fillOpacity="0.04" />
    <circle cx="840" cy="320" r="10" fill="white" fillOpacity="0.05" />
    <line
      x1="700"
      y1="200"
      x2="780"
      y2="140"
      stroke="white"
      strokeOpacity="0.04"
      strokeWidth="1.5"
    />
    <line
      x1="780"
      y1="140"
      x2="860"
      y2="220"
      stroke="white"
      strokeOpacity="0.04"
      strokeWidth="1.5"
    />
    <line
      x1="860"
      y1="220"
      x2="840"
      y2="320"
      stroke="white"
      strokeOpacity="0.04"
      strokeWidth="1.5"
    />
    <line
      x1="700"
      y1="200"
      x2="760"
      y2="280"
      stroke="white"
      strokeOpacity="0.03"
      strokeWidth="1.5"
    />
    <text
      x="950"
      y="180"
      fontSize="70"
      fill="white"
      fillOpacity="0.05"
      fontFamily="sans-serif"
    >
      @
    </text>
    <text
      x="1050"
      y="400"
      fontSize="60"
      fill="white"
      fillOpacity="0.04"
      fontFamily="sans-serif"
    >
      #
    </text>
    <text
      x="100"
      y="200"
      fontSize="50"
      fill="white"
      fillOpacity="0.04"
      fontFamily="sans-serif"
    >
      SEO
    </text>
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="white" fillOpacity="0.1" />
      </marker>
    </defs>
    <path
      d="M 500 600 L 600 500 L 700 550 L 800 400"
      fill="none"
      stroke="white"
      strokeOpacity="0.05"
      strokeWidth="2"
      markerEnd="url(#arrow)"
    />
    <text
      x="400"
      y="680"
      fontSize="35"
      fill="white"
      fillOpacity="0.04"
      fontFamily="sans-serif"
    >
      Content · Growth · Engage
    </text>
  </svg>
);

// ─── Slides data ──────────────────────────────────────────────────────────────
const slides: Slide[] = [
  {
    title: "Aspiring Mathematician",
    subtitle: "B.Sc. Mathematics · Final Year",
    description:
      "I am an aspiring mathematician pursuing a B.Sc. in Mathematics with a strong passion for problem-solving and logical thinking. I enjoy exploring complex concepts and applying them practically. I am dedicated to continuous learning and self-improvement. Alongside my studies, I am also developing skills in digital marketing.",
    svgOverlay: <MathSVG />,
  },
  {
    title: "Digital Marketing Enthusiast",
    subtitle: "SEO · Social Media · Content Creation",
    description:
      "I am a digital marketing enthusiast with a strong interest in online branding and growth strategies. I am learning key skills like SEO, social media marketing, and content creation. I am continuously improving my skills to stay updated in this fast-growing field. My goal is to build a successful career in digital marketing.",
    svgOverlay: <MarketingSVG />,
  },
];

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Components ───────────────────────────────────────────────────────────────
function Header({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800"
      style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.95)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <img
          src="/assets/uploads/whatsapp_image_2026-03-17_at_10.43.36_pm-removebg-preview-019d2501-2c8c-72de-a55d-6e964ec2bfce-1.png"
          alt="Ranjit Mohite Logo"
          className="h-12 object-contain"
          data-ocid="header.logo"
        />

        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="header.nav"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className={`nav-link text-sm font-medium tracking-widest transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-white active"
                  : "text-gray-400 hover:text-white"
              }`}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.hamburger.toggle"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden bg-black border-t border-gray-800 px-4 pb-4"
          data-ocid="nav.mobile.panel"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm font-medium tracking-widest text-gray-300 hover:text-white border-b border-gray-800 last:border-0"
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = slides[current];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {slide.svgOverlay}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateX(-30px)" : "translateX(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <p className="text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
          {slide.subtitle}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
          {slide.title}
        </h1>
        <div className="w-16 h-1 bg-white mb-8" />
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          {slide.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => scrollTo("#about")}
            className="px-8 py-3 bg-white text-black font-semibold text-sm tracking-wider hover:bg-gray-200 transition-colors"
            data-ocid="hero.about.button"
          >
            More About Me
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 border border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
            data-ocid="hero.contact.button"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={slides[i].title}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            data-ocid={`hero.dot.${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4">
              Welcome
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="inline-block border-b-2 border-white pb-1">
                Ranjit Mohite
              </span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              I am currently in the final year of B.Sc. Mathematics and also
              learning Digital Marketing. I am passionate about learning new
              skills and improving my knowledge in digital marketing. I enjoy
              exploring new ideas and growing both personally and
              professionally.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("#about")}
                className="px-8 py-3 bg-white text-black font-semibold text-sm tracking-wider hover:bg-gray-200 transition-colors"
                data-ocid="intro.about.button"
              >
                More About Me
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="px-8 py-3 border border-gray-600 text-white font-semibold text-sm tracking-wider hover:border-white transition-colors"
                data-ocid="intro.contact.button"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #333 0%, #111 100%)",
                }}
              />
              <img
                src="/assets/uploads/whatsapp_image_2026-03-17_at_10.47.38_pm-removebg-preview-019d2501-2f62-7110-bb66-7ce0f1d402dd-2.png"
                alt="Ranjit Mohite"
                className="relative rounded-2xl w-full max-w-sm object-cover"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BULLET_POINTS = [
  "Pursuing B.Sc. in Mathematics (Final Year)",
  "Learning Digital Marketing alongside academics",
  "Strong interest in problem-solving and logical thinking",
  "Developing skills in SEO, social media marketing, and content creation",
  "Passionate about blending analytical skills with creativity",
  "Dedicated to continuous learning and self-improvement",
  "Goal: Build a career combining mathematics and digital marketing",
];

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-3">
            Who Am I
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-4 mb-12">
          {BULLET_POINTS.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-6 mb-12">
          <div
            className="p-6 border border-gray-700 rounded-lg service-card"
            style={{ background: "#1A1A1A" }}
            data-ocid="about.education.card.1"
          >
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              B.Sc. Final Year (Mathematics)
            </h3>
            <p className="text-gray-400 text-sm">
              Currently completing my undergraduate degree with a focus on pure
              and applied mathematics, statistics, and analytical thinking.
            </p>
          </div>
          <div
            className="p-6 border border-gray-700 rounded-lg service-card"
            style={{ background: "#1A1A1A" }}
            data-ocid="about.education.card.2"
          >
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Digital Marketing Learner
            </h3>
            <p className="text-gray-400 text-sm">
              Self-studying digital marketing fundamentals — SEO, content
              strategy, social media growth, and online branding techniques.
            </p>
          </div>
        </div>

        <div
          className="reveal p-8 border border-gray-700 rounded-lg"
          style={{ background: "#1A1A1A" }}
        >
          <h3 className="text-white font-semibold text-lg mb-3">
            Career &amp; Goals
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            My goal is to build a career that combines my love for mathematics
            with the exciting world of digital marketing. I want to use my
            analytical skills to understand data and trends, and apply creative
            strategies to help businesses grow online. I am committed to
            learning every day and becoming a skilled professional in both
            fields.
          </p>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    key: "gmb",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Google My Business",
    description:
      "I help businesses set up and optimize their Google My Business profile to improve local visibility and attract more customers.",
  },
  {
    key: "web",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Website Design",
    description:
      "I create clean, modern, and responsive websites that look great on all devices and help establish a strong online presence.",
  },
  {
    key: "seo",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "SEO Optimization",
    description:
      "I help improve your website's search engine ranking using proven SEO techniques to drive more organic traffic and visibility.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Services
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.key}
              className="reveal p-8 border border-gray-700 rounded-lg service-card flex flex-col items-center text-center"
              style={{ background: "#1A1A1A" }}
              data-ocid={`services.card.${i + 1}`}
            >
              <div className="text-white mb-5">{svc.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {svc.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {svc.description}
              </p>
              <button
                type="button"
                className="px-6 py-2 border border-gray-600 text-sm font-medium text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                data-ocid={`services.getstarted.${i + 1}.button`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CircularSkill({
  label,
  percent,
  isVisible,
}: { label: string; percent: number; isVisible: boolean }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = isVisible
    ? circumference - (percent / 100) * circumference
    : circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 100 100"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#2a2a2a"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="ring-animate"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{percent}%</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm font-medium text-center">{label}</p>
    </div>
  );
}

const TECHNICAL_SKILLS = [
  { label: "Website Design", percent: 75 },
  { label: "SEO Optimization", percent: 70 },
  { label: "Google My Business", percent: 80 },
  { label: "Social Media Marketing", percent: 65 },
];

const PROFESSIONAL_SKILLS = [
  { label: "Problem Solving", percent: 85 },
  { label: "Teaching", percent: 70 },
  { label: "Communication", percent: 80 },
  { label: "Creativity", percent: 75 },
];

function SkillsSection() {
  const [barsVisible, setBarsVisible] = useState(false);
  const [ringsVisible, setRingsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const barsEl = barsRef.current;
    const ringsEl = ringsRef.current;

    const barsObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBarsVisible(true);
          barsObs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    const ringsObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRingsVisible(true);
          ringsObs.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (barsEl) barsObs.observe(barsEl);
    if (ringsEl) ringsObs.observe(ringsEl);

    return () => {
      barsObs.disconnect();
      ringsObs.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-3">
            My Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Skills
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={barsRef}>
            <h3 className="text-white font-semibold text-xl mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {TECHNICAL_SKILLS.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-200 font-medium">
                      {skill.label}
                    </span>
                    <span className="text-gray-400">{skill.percent}%</span>
                  </div>
                  <div
                    className="h-2 rounded-full"
                    style={{ background: "#2a2a2a" }}
                  >
                    <div
                      className="h-2 rounded-full bg-white progress-bar"
                      style={{
                        width: barsVisible ? `${skill.percent}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={ringsRef}>
            <h3 className="text-white font-semibold text-xl mb-8">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {PROFESSIONAL_SKILLS.map((skill) => (
                <CircularSkill
                  key={skill.label}
                  label={skill.label}
                  percent={skill.percent}
                  isVisible={ringsVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CONTACT_ITEMS = [
  {
    key: "whatsapp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.007-.016.028C16.18 18.46 14.177 19 12.234 19c-1.39 0-2.757-.367-3.956-1.067l-4.39 1.15 1.175-4.28A9.886 9.886 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.963 9.963 0 01-4.438 8.007z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "7745866526",
    href: "https://wa.me/917745866526",
    color: "#25D366",
  },
  {
    key: "instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    value: "ranjitmohite.___",
    href: "https://instagram.com/ranjitmohite.___",
    color: "white",
  },
  {
    key: "email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "ranjitmohite909@gmail.com",
    href: "mailto:ranjitmohite909@gmail.com",
    color: "white",
  },
];

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal space-y-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to reach out to me through any of the channels below.
                I'm always open to new opportunities and collaborations.
              </p>
            </div>
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  data-ocid={`contact.${item.key}.link`}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-white transition-colors flex-shrink-0"
                    style={{ background: "#1A1A1A", color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:underline">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className="reveal p-8 border border-gray-700 rounded-lg"
            style={{ background: "#1A1A1A" }}
            data-ocid="contact.form.panel"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-8 text-center"
                data-ocid="contact.success_state"
              >
                <svg
                  className="w-16 h-16 text-white mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-white font-semibold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 px-6 py-2 border border-gray-600 text-sm text-white hover:border-white transition-colors"
                  data-ocid="contact.send_another.button"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full bg-transparent border border-gray-700 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                    data-ocid="contact.name.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full bg-transparent border border-gray-700 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                    data-ocid="contact.email.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    className="w-full bg-transparent border border-gray-700 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                    data-ocid="contact.subject.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    placeholder="Write your message..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full bg-transparent border border-gray-700 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 resize-none"
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black font-semibold text-sm tracking-wider hover:bg-gray-200 transition-colors"
                  data-ocid="contact.submit.button"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ background: "#000000" }}>
      <div className="h-px" style={{ background: "#222" }} />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm text-center">
          &copy; {year} Ranjit Mohite. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/917745866526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="WhatsApp"
            data-ocid="footer.whatsapp.link"
          >
            <span className="sr-only">WhatsApp</span>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.007-.016.028C16.18 18.46 14.177 19 12.234 19c-1.39 0-2.757-.367-3.956-1.067l-4.39 1.15 1.175-4.28A9.886 9.886 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.963 9.963 0 01-4.438 8.007z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/ranjitmohite.___"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Instagram"
            data-ocid="footer.instagram.link"
          >
            <span className="sr-only">Instagram</span>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="mailto:ranjitmohite909@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
            data-ocid="footer.email.link"
          >
            <span className="sr-only">Email</span>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <p className="text-gray-600 text-xs text-center">
          Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  useReveal();

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { threshold: 0.4 },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header activeSection={activeSection} />
      <main>
        <HeroSlider />
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
