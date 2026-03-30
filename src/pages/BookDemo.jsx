import { useNavigate } from "react-router-dom";
import FloatingNav from "../components/FloatingNav";

const BookDemo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-amiamie)]">
      <FloatingNav />
      <main className="mx-auto flex max-w-lg flex-col gap-10 px-6 pb-24 pt-32 md:pt-40">
        <header>
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/45">
            D360 Tribe
          </p>
          <h1 className="text-3xl font-light tracking-tight text-white md:text-4xl">
            Book a demo
          </h1>
          <p className="mt-3 text-sm font-light leading-relaxed text-white/55 md:text-base">
            Share your details. We&apos;ll follow up with a time that works.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          autoComplete="off"
        >
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Name
            </span>
            <input
              name="name"
              type="text"
              required
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base font-light text-white outline-none transition-[border,background] placeholder:text-white/25 focus:border-[var(--color-gold)] focus:bg-white/[0.07]"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Work email
            </span>
            <input
              name="email"
              type="email"
              required
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base font-light text-white outline-none transition-[border,background] placeholder:text-white/25 focus:border-[var(--color-gold)] focus:bg-white/[0.07]"
              placeholder="you@company.com"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Company
            </span>
            <input
              name="company"
              type="text"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base font-light text-white outline-none transition-[border,background] placeholder:text-white/25 focus:border-[var(--color-gold)] focus:bg-white/[0.07]"
              placeholder="Company name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              What should we cover?
            </span>
            <textarea
              name="message"
              rows={4}
              className="resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base font-light text-white outline-none transition-[border,background] placeholder:text-white/25 focus:border-[var(--color-gold)] focus:bg-white/[0.07]"
              placeholder="Team size, priorities, timeline…"
            />
          </label>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-full bg-gradient-to-br from-[#cfa355] to-[#e8c882] px-8 py-3 text-sm font-medium uppercase tracking-wider text-black transition-[transform,filter] hover:scale-[1.02] hover:brightness-110"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-sm font-light uppercase tracking-widest text-white/45 transition-colors hover:text-white"
            >
              Back to site
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default BookDemo;
