export const CommentItem = () => {
  const dummyComment = [
    {
      user: "chaeminenie",
      createdDate: "2024.24.24",
      time: "2시간전",
      content: "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다",
    },
    {
      user: "chaeminenie",
      createdDate: "2024.24.24",
      time: "2시간전",
      content: "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다",
    },
    {
      user: "chaeminenie",
      createdDate: "2024.24.24",
      time: "2시간전",
      content: "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다",
    },
    {
      user: "chaeminenie",
      createdDate: "2024.24.24",
      time: "2시간전",
      content: "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다",
    },
    {
      user: "chaeminenie",
      createdDate: "2024.24.24",
      time: "2시간전",
      content: "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다",
    },
  ];

  return (
    <>
      {dummyComment.map((item, idx) => {
        return (
          <div className="flex gap-[25px]" key={idx}>
            {/* profile-img */}
            <div className="h-[48px] w-[48px] rounded-full bg-gray-40" />

            <div className="flex flex-col">
              <div className="flex gap-[8px]">
                <p className="text-body2">{item.user}</p>
                <p className="text-caption1 text-gray-60">{item.createdDate}</p>
                <p className="w-[5px] h-[5px] rounded-full text-gray-60" />
                <p className="text-caption1 text-gray-60">{item.time}</p>
              </div>
              <div className="text-body3">{item.content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
