import { logos } from "../../utils/constants";

export default function Logos() {
  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto max-w-[90rem] px-24 py-28 max-xl:px-16 max-xl:py-24">
        <p className="text-primary-50 last m-auto mb-28 text-center text-xl max-xl:mb-20 max-xl:text-lg/8">
          Organizations powered by <span className="font-bold">NoteFlow</span>
        </p>
        <ul className="grid grid-cols-4 justify-items-center gap-y-24">
          {logos.map((logo) => {
            return (
              <li key={logo.id}>
                <img
                  className="h-10 max-xl:h-8"
                  src={logo.src}
                  alt={logo.alt}
                  key={logo.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
