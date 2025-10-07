import Section from "./Section";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <Section
      icon={<Send className="size-5 text-blue-600" />}
      sectionTitle="Contact Me"
    >
      <div className="ml-1 mt-3 space-y-1 mb-4">
        <div className="flex items-center gap-1">
          <Mail className="size-4" />
          <span className="font-bold">E-mail </span>{" "}
          <a
            className="cursor-pointer hover:scale-105 hover:text-blue-600"
            href="mailto:mohdkamrankhan.dev@gmail.com"
          >
            : mohdkamrankhan.dev@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="size-4" />
          <span className="font-bold">Phone </span>{" "}
          <a
            className="cursor-pointer hover:scale-105 hover:text-blue-600"
            href="tel:+919415195895"
          >
            : +91-9415195895
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
