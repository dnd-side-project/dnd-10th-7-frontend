import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
      className="flex flex-col justify-center items-center h-[100vh] gap-2 text-h1 absolute left-0 mx-auto right-0 z-30 bg-purple-main4"
    >
      <div className="flex flex-col gap-2 justify-evenly p-[30px] w-[300px] rounded-md h-[100px] items-center bg-white">
        <h3>잠시만 기다려주세요.</h3>
        <SyncLoader />
      </div>
    </div>
  );
}
