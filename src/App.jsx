import "./index.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "yue" : "en");
  };

  const photoModules = import.meta.glob("./assets/photos/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}", {
    eager: true,
    import: "default",
  });

  const photos = Object.entries(photoModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);

  const ytEmbed = (url) => {
    const id =
      url.includes("watch?v=")

        ? url.split("watch?v=")[1].split("&")[0]
        : url.split("youtu.be/")[1]?.split("?")[0];

    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-neutral-800 scroll-smooth">
      <nav className="w-full flex items-center justify-between px-12 py-8">
        <div className="text-xs tracking-widest uppercase">Beryl Jiang</div>

        <div className="flex items-center gap-8">
          <ul className="flex gap-10 text-xs tracking-widest uppercase">
            <li>
              <a className="hover:opacity-60 transition cursor-pointer" href="#home">
                {t("nav.home")}
              </a>
            </li>

            {/* Gallery dropdown */}
            <li className="relative group">
              <span className="hover:opacity-60 transition cursor-pointer">
                {t("nav.gallery")}
              </span>

              {/* hover bridge wrapper */}
              <div className="absolute right-0 top-full pt-3 w-40">
                <div className="bg-[#f6f4ef] border border-black/10 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <a
                    href="#photos"
                    className="block px-4 py-3 text-[10px] tracking-widest uppercase hover:bg-black/5 transition"
                  >
                    {t("nav.photos")}
                  </a>
                  <a
                    href="#videos"
                    className="block px-4 py-3 text-[10px] tracking-widest uppercase hover:bg-black/5 transition"
                  >
                    {t("nav.video")}
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a className="hover:opacity-60 transition cursor-pointer" href="#contact">
                {t("nav.contact")}
              </a>
            </li>
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs tracking-widest uppercase hover:opacity-60 transition"
            aria-label="Toggle language"
            type="button"
          >
            {i18n.language === "en" ? "中" : "EN"}
          </button>
        </div>
      </nav>

      <section id="home" className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <div className="relative min-h-[520px]">
          {/* Center text */}
          <div className="relative z-10 flex flex-col items-center text-center pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase text-neutral-800">
              Beryl Jiang
            </h1>
            <p className="mt-6 text-xs tracking-widest uppercase text-neutral-600">
              {t("hero.role")}
            </p>
          </div>

          {/* Headshot (large) */}
          <div className="relative mt-10 flex justify-center">
            <div className="w-full max-w-3xl aspect-[4/5] md:aspect-[3/4] bg-neutral-200 overflow-hidden flex items-center justify-center">
              <span className="text-[10px] tracking-widest uppercase text-neutral-500">
                Headshot
              </span>
            </div>
          </div>

        </div>
      </section>

      <section id="photos" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-lg tracking-widest uppercase mb-12">
          {t("sections.photos")}
        </h2>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative aspect-[3/4] bg-neutral-200 overflow-hidden"
            >
              <img
                src={src}
                alt={`Beryl photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-lg tracking-widest uppercase mb-12">
          {t("sections.videos")}
        </h2>

        {/* Showreel (big) */}
        <div className="relative aspect-video bg-neutral-200 overflow-hidden mb-16">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={ytEmbed("https://www.youtube.com/watch?v=1AAQ-bwvNMc")}
            title="Beryl Jiang Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>


        {/* Smaller videos with text on the right */}
        <div className="space-y-12">
          {[
            {
              title: "Remnants of You",
              year: "2025",
              sub: "Short film directed and shot by Sean Victoriano",
              url: "https://www.youtube.com/watch?v=5qBEcgx8qMk",
            },
            {
              title: "Decision to Leave (Remake)",
              year: "2024",
              sub: "Short film",
            },
            {
              title: "Coming Soon Project",
              year: "2024",
              sub: "Music video / commercial / short film",
            },
          ].map((v, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
              <div className="relative aspect-video bg-neutral-200 overflow-hidden">
                {v.url ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={ytEmbed(v.url)}
                    title={`${v.title} — ${v.year}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-neutral-500/40 flex items-center justify-center">
                        <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-neutral-500/60 ml-0.5" />
                      </div>
                    </div>

                    <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase text-neutral-500">
                      {t("common.comingSoon")}
                    </span>
                  </>
                )}
              </div>



              <div className="pt-1">
                <div className="text-sm tracking-wide text-neutral-800">
                  {v.title} — {v.year}
                </div>
                <div className="text-xs text-neutral-600 mt-2 leading-relaxed max-w-md">
                  {v.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-lg tracking-widest uppercase mb-12">
          {t("sections.contact")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <form className="md:col-span-2 space-y-4">
            <input
              type="text"
              placeholder={t("contact.name")}
              className="w-full bg-neutral-200/70 px-4 py-3 text-sm outline-none focus:bg-neutral-200"
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              className="w-full bg-neutral-200/70 px-4 py-3 text-sm outline-none focus:bg-neutral-200"
            />
            <textarea
              placeholder={t("contact.message")}
              rows={8}
              className="w-full bg-neutral-200/70 px-4 py-3 text-sm outline-none resize-none focus:bg-neutral-200"
            />
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="text-xs tracking-widest uppercase mb-12 hover:opacity-60 transition"
              >
                {t("contact.send")}
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="bg-neutral-200/70 px-4 py-6 min-h-[60px] flex items-start">
              <div className="text-xs tracking-widest uppercase text-neutral-600">
                <a
                  href="https://www.instagram.com/beryl_jiang_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-800 hover:opacity-60 transition"
                >
                  @beryl_jiang_
                </a>
              </div>
            </div>

            <div className="bg-neutral-200/70 px-4 py-6 min-h-[215px]">
              <div className="text-xs tracking-widest uppercase text-neutral-600 mb-4">
                {t("contact.skills")}
              </div>

              <ul className="text-sm text-neutral-700 space-y-2">
                <li>{t("common.comingSoon")}</li>
                <li>{t("common.comingSoon")}</li>
                <li>{t("common.comingSoon")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-10 text-center border-t border-black/5">
        <p className="text-[10px] tracking-widest uppercase text-neutral-500">
          {t("footer.madeBy")}{" "}
          <a
            href="https://shannonlowe.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            Shannon Lowe
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
