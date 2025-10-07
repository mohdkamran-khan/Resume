import Section from './Section'
import { Briefcase } from "lucide-react";

const Projects = () => {
  return (<Section icon={ <Briefcase className="size-5 text-blue-600" />} sectionTitle="Projects">
        <div className="bg-blue-100 rounded-lg p-3 mt-4">
          <h2 className="font-bold">E-Books Store (MERN)</h2>
          <p className="text-sm mt-2 mb-4">
            A platform for listing old & new books with user authentication &
            product management allowing users to search, edit, buy/sell books
            and manage orders.
          </p>
          <div className="p-2">
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              JSP
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              JSTL
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Maven
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              MySQL
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 font-semibold text-blue-800 text-sm">
              ApacheTomcat
            </span>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-3 mt-4">
          <h2 className="font-bold">Learning Management System (Maven)</h2>
          <p className="text-sm mt-2 mb-4">
            A platform for listing & managing courses with CRUD Operations. User
            based access, search and progress tracking features.
          </p>
          <div className="pb-2 pt-1">
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              React.js
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Redux
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Node.js
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              MongoDB
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Express.js
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Cloudinary
            </span>
            <span className="bg-blue-300 rounded-lg py-1 px-3 mr-3 font-semibold text-blue-800 text-sm">
              Stripe
            </span>
          </div>
        </div>
  </Section>
  )
}

export default Projects