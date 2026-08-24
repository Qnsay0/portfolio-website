export default function Contact() {
  return (
    <div className="min-h-[70dvh] md:max-w-[1500] m-auto gap-10 bg-blackrounded-t-4xl  text-white flex flex-row justify-between px-4 py-7 flex-wrap">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-white uppercase font-bold text-7xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tighter">
          contact
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-lg md:max-w-xl text-neutral-300">
          Masz pytania? Chcesz sie dowiedziec wiecej na moj temat i mojej
          dzialalnosci? Pisz smialo.
        </p>
        <div className="flex flex-col gap-3 items-start">
          <a className="border-b leading-loose text-lg md:text-xl font-normal">
            kontakt@barteklimdev.pl
          </a>
          <a className="border-b leading-loose text-lg md:text-xl">
            +48 571 242 470
          </a>
        </div>
      </div>
      <div className="flex flex-2  flex-col bg-neutral-600 p-10 rounded-4xl">
        <div className="flex flex-col">
          <span>Imie</span>
          <input type="text" />
          <span>Email</span>
          <input type="text" />
          <span>O co chcesz zapytac?</span>
          <input type="text" />
        </div>
        <div className="flex flex-row">
          <input type="checkbox" />
          <p>
            Zapoznalem/am sie z <span>Polityka Prywatnosci</span> i wiem, jak
            przetwarzane sa moje dane.
          </p>
        </div>
        <button type="submit">Wyslij wiadomsoc</button>
      </div>
    </div>
  );
}
