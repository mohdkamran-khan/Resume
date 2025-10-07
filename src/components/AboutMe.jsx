import { UserRound } from "lucide-react";

const AboutMe = () => {
  return (
    <div>
      {/*AboutMe*/}
      <div className="p-3 ml-4">
        <div className="flex items-center gap-2">
          <UserRound className="size-5 text-blue-600"/>
          <div className="font-bold text-xl text-blue-600">About Me</div>
        </div>
        <p className="text-md text-gray-700 font-serif mt-2 font-semibold">
          I'm a passionate web developer with experience in building dynamic and
          responsive web applications. My expertise lies in both front-end and
          back-end development, allowing me to create seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
