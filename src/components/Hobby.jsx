import Section from "./Section"
import { MessageSquareHeart } from "lucide-react";
import { CircleStar } from "lucide-react";

const Hobby = () => {
  return (
    <>
    {/*Hobby & Interests*/}
   <Section icon={<MessageSquareHeart className="size-5 text-blue-600" />} sectionTitle={"Hobbies & Interests"}>
        <ul className="list-disc ml-6 mt-2">
          <li>Reading</li>
          <li>Travelling</li>
          <li>Watching Informative Videos</li>
          <li>Personality Development</li>
        </ul> 
   </Section>

   {/*Extracurricular Activities */}
   <Section icon={<CircleStar className="size-5 text-blue-600" />} sectionTitle={"Extracurricular Activities"}>
        <ul className="list-disc ml-6 mt-2">
          <li>Volunteered Convocation Organizer</li>
          <li>Volunteered University Fests</li>
          <li>Intra University Volleyball Events</li>
          <li>NSS</li>
        </ul>
   </Section>
   </>
  )
}

export default Hobby