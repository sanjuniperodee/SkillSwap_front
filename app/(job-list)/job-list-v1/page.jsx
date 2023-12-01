import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v1";

export const metadata = {
  title: "Skill Swap",
  description: "Делись своими знаниями и обретай новые",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
