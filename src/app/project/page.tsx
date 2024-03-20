import { Suspense } from "react";
import ProjectList from "@component/components/landing/project/ProjectList";

export default function ProjectPage() {
  return (
    <Suspense>
      <section className="mx-auto max-w-[1080px] w-full mt-[100px] flex flex-col gap-[100px] mb-[100px]">
        {/* 프로젝트 */}
        <ProjectList />
      </section>
    </Suspense>
  );
}
