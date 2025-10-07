import  Section  from "./Section"
import { MonitorCog } from 'lucide-react'

const Experience = () => {
  return (
    <Section icon={<MonitorCog className="size-5 text-blue-600"/>} sectionTitle={"Experience"}>
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg mt-3">MindShift Technologies</h2> 
            <p className="text-sm text-gray-500">June-Sept 2025</p>
            </div>
            <p className="text-gray-600">FullStack (MERN) Web Developer - Intern</p>
            
            <ol className="list-disc mt-2 space-y-1 ml-6">
                <li>
                    Built LMS with JWT authentication, role-based access, and REST APIs.
                </li>
                <li>
                    Designed optimized MongoDB schemas, reducing API response by 30%.
                </li>
                <li>
                    Integrated Cloudinary uploads and Stripe payments for 100+ users.
                </li>
            </ol>

    </Section>
  );
};

export default Experience