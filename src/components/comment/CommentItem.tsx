import { useState } from "react";
import { ReplyComment } from "./ReplyComment";

export const CommentItem = () => {
  // const [openReplyComment, setOpenReplyComment] = useState<boolean>(false);

  const dummyComment = [
    {
      commentId: 1,
      user: "chaeminenie",
      nickname: "cjcjcjcj",
      profileImageUrl: "aiaiaiaiaiaiaai",
      createdDate: "2024.24.24",
      time: "2시간전",
      content:
        "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
    },
    {
      commentId: 2,
      user: "chaeminenie",
      nickname: "cjcjcjcj",
      profileImageUrl: "aiaiaiaiaiaiaai",
      createdDate: "2024.24.24",
      time: "2시간전",
      content:
        "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
    },
    {
      commentId: 3,
      user: "chaeminenie",
      nickname: "cjcjcjcj",
      profileImageUrl: "aiaiaiaiaiaiaai",
      createdDate: "2024.24.24",
      time: "2시간전",
      content:
        "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
    },
    {
      commentId: 4,
      user: "chaeminenie",
      nickname: "cjcjcjcj",
      profileImageUrl: "aiaiaiaiaiaiaai",
      createdDate: "2024.24.24",
      time: "2시간전",
      content:
        "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
    },
    {
      commentId: 5,
      user: "chaeminenie",
      nickname: "cjcjcjcj",
      profileImageUrl: "aiaiaiaiaiaiaai",
      createdDate: "2024.24.24",
      time: "2시간전",
      content:
        "굉장히 흥미로운 서비스 어쩌구 졸리다 지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다지금 새벽 4시다",
    },
  ];

  const [openReplyComments, setOpenReplyComments] = useState<Array<boolean>>(
    new Array(dummyComment.length).fill(false)
  );

  const toggleReplyComment = (index: number) => {
    const newOpenReplyComments = [...openReplyComments];
    newOpenReplyComments[index] = !newOpenReplyComments[index];
    setOpenReplyComments(newOpenReplyComments);
  };

  return (
    <div className="flex flex-col space-y-8">
      {dummyComment.map((item, idx) => {
        return (
          <>
            <div className="flex gap-[25px] items-center" key={idx}>
              {/* profile-img */}
              <div className="h-[48px] w-[48px] rounded-full bg-gray-40" />

              <div className="flex flex-col space-y-1">
                <div className="flex gap-[8px] items-center">
                  <p className="text-body2">{item.user}</p>
                  <p className="text-caption1 text-gray-60">
                    {item.createdDate}
                  </p>
                  <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
                  <p className="text-caption1 text-gray-60">{item.time}</p>
                  <p className="w-[5px] h-[5px] rounded-full bg-gray-60" />
                  <p
                    className="text-caption1 text-gray-60 cursor-pointer"
                    onClick={() => {
                      toggleReplyComment(idx);
                    }}
                  >
                    답글달기
                  </p>
                </div>
                <div className="text-body3">{item.content}</div>
              </div>
            </div>
            {openReplyComments[idx] && <ReplyComment />}
          </>
        );
      })}
    </div>
  );
};
