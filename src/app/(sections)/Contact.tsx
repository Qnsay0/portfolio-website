"use client";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

interface ProjectProps {
  title: string;
  subtitle: string;
}

export default function Contact(props: ProjectProps) {
  const form = useRef<HTMLFormElement>(null);
  const serviceKey = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY as string;
  const templateKey = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      (result) => {
        console.log("Wysłano email", result.text);
        form.current?.reset();
      },
      (error) => {
        console.log("Problem z wysłaniem", error.text);
      },
    );
  };

  return (
    <div className="min-h-[70dvh] md:max-w-[1500] m-auto gap-10 bg-blackrounded-t-4xl text-white flex flex-row justify-between px-4 py-7 flex-wrap ">
      <div className="px-5 flex flex-1 flex-col gap-10">
        <div className="">
          <h1 className="text-white uppercase font-bold text-7xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tighter">
            {props.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-lg md:max-w-xl text-neutral-300">
            {props.subtitle}
          </p>
          <div className="flex flex-col gap-3 items-start select-text">
            <a className="border-b leading-loose text-lg md:text-xl font-normal ">
              kontakt@barteklimdev.pl
            </a>
            <a className="border-b leading-loose text-lg md:text-xl">
              +48 571 242 470
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-2xl ">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
            target="_blank"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <FaGithubAlt />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
            target="_blank"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
            target="_blank"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-10 gap-10">
        <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold uppercase tracking-wider text-neutral-400 resize-none"
            >
              Name
            </label>
            <textarea
              name="name"
              id="name"
              rows={1}
              className="outline-0 border-b border-b-neutral-600 focus:border-b-white resize-none"
              placeholder="Twoje imie"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold uppercase tracking-wider text-neutral-400"
            >
              email
            </label>
            <textarea
              name="email"
              id="email"
              rows={1}
              className="outline-0 border-b border-b-neutral-600 pb-1.5 focus:border-b-white resize-none"
              placeholder="twoj@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="question"
              className="text-sm font-semibold uppercase tracking-wider text-neutral-400"
            >
              O co chcesz się zapytać?
            </label>
            <textarea
              name="message"
              id="question"
              rows={3}
              placeholder="Napisz krótko, czego potrzebujesz"
              className="outline-none border-b border-b-neutral-600 bg-transparent pb-1.5 focus:border-b-white transition-colors resize-none"
            />
          </div>

          <p className="text-sm text-neutral-400 max-w-lg mt-5">
            Administratorem danych jest Bartłomiej Klimek. Dane z formularza
            przetwarzane są wyłącznie w celu obsługi zapytania i kontaktu
            zwrotnego.
          </p>
          <button
            type="submit"
            className="relative cursor-pointer z-99 bg-white text-black px-7.5 py-2.5 uppercase tracking-wider font-bold rounded-4xl w-fit m-auto mt-5"
          >
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}
