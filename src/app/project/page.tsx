import { ProjectList } from "@component/components/landing/project/ProjectList";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <Suspense>
      {/* 컨테이너 너비 */}
      <section className="m-auto max-w-[1080px] w-full mt-[100px] flex flex-col gap-[100px] mb-[100px]">
        <Suspense>
          {/* 프로젝트 */}
          <ProjectList />
        </Suspense>
      </section>
    </Suspense>
  );
}
