import { ProjectList } from "@component/components/landing/project/ProjectList";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <Suspense>
      <ProjectList />
    </Suspense>
  );
}
