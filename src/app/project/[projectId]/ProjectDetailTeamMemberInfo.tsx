const TeamMemberInfo = ({ count, label }: { count: number; label: string }) => (
  <div className="flex mr-[35px]">
    <p className="text-h2 me-4">{label}</p>
    <p className="text-body1 font-medium text-gray-60">{count}명</p>
  </div>
);

export default TeamMemberInfo;