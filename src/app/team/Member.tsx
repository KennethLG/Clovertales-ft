import { Member } from "@/domain/team/member";
import Image from "next/image";

type MemberProps = {
  member: Member;
};

export const MemberCard = ({ member }: MemberProps) => {
  return (
    <div className="p-3 text-center">
      <Image
        src={member.photo}
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
