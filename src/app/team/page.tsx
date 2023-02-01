import { config } from "@/config";
import { Member } from "@/domain/member";
import { MemberCard } from "./Member";

const fetchTeam = async () => {
  const response = await fetch(`${config.aws.api}/members`, {
    cache: "force-cache",
  });
  return response.json();
};

const Team = async () => {
  const team = await fetchTeam();

  return (
    <section className="w-11/12 md:max-w-3xl m-auto my-32 text-center">
      <h1 className="text-5xl">We are not mundane</h1>
      <p className="my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex flex-wrap">
        {team.data.map((member: Member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
