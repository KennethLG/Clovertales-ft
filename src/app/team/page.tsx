import { team } from "@/mocks/team";
import { MemberCard } from "./Member";

const Team = () => {
  return (
    <section className="w-11/12 md:max-w-3xl m-auto my-32 text-center">
      <h1 className="text-5xl">We are not mundane</h1>
      <p className="my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex flex-col md:flex-row">
        {team.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
