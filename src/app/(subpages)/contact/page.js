import Image from "next/image";
import bg from "../../../../public/some2-background.jpg";
import Form from "../../../components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Call a Pokémon Trainer
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Ready to embark on a new journey or share your legendary encounters? Whether you're looking to trade ideas, form a party, or simply chat about rare finds, your messages are like Poké Balls—each one holds something powerful. Use the form below to send your signal across the Pokéverse, and a Trainer will respond with the speed of a Quick Attack.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}