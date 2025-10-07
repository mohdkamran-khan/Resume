import Section from './Section'
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
    <Section icon={<BookOpen className="size-5 text-blue-600" />} sectionTitle="Education">
        <div>
          <ul>
            <li className="font-bold ml-6 mt-3 list-disc">
              Diploma Full Stack JAVA Development
            </li>
            <p className="text-gray-500 ml-6">
              Jain University, Bangalore - 2024-2025
            </p>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold ml-6 mt-2 list-disc">
              Full Stack MERN Development
            </li>
            <p className="text-gray-500 ml-6">KG Coding - 2025-2026</p>
          </ul>
        </div>
    </Section>
  )
}

export default Education