import { config } from "@/config";
import { Member } from "@/domain/team/member";
import Image from "next/image";

type MemberProps = {
  member: Member;
};

export const MemberCard = ({ member }: MemberProps) => {
  return (
    <div className="w-full p-3 text-center flex flex-col items-center">
      <Image
        src={`${config.aws.cdn}/team/member-${member.id}.jpeg`}
        alt={`${member.name} photo`}
        className="rounded-full my-2"
        width={200}
        height={200}
      />
      <h1 className="text-2xl">{member.name}</h1>
      <h1 className="text-base">{member.role}</h1>
    </div>
  );
};
