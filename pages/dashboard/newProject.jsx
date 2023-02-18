import { useState } from "react";
import { useProject } from "../../hooks/useProject";
const NewProject = () => {
  const project = useProject({ action: "new" });
  return (
    <div className="bg-slate-50 min-h-screen p-5">
      <h1>New Project</h1>
      <form></form>
    </div>
  );
};

export default NewProject;
