import Section from './Section'
import { Code } from "lucide-react";

const Skills = () => {
  return (
    <Section icon={<Code className="size-5 text-blue-600" />} sectionTitle="Skills">
        <div className="mt-3 flex flex-wrap gap-y-3">
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            JavaScript
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            React.js
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            Express.js
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            MongoDB
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            MySQL
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            Redux
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            JAVA
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            Maven
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            JSP
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            JSTL
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            MySQL
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            Git
          </span>
          <span className="bg-gray-300 rounded-lg py-1 px-3 mr-3 font-semibold text-sm ">
            AWS
          </span>
        </div>
    </Section>
 )
}

export default Skills