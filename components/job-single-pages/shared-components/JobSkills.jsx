const JobSkills = (param) => {
  // const skills = [
  //   "app",
  //   "administrative",
  //   "android",
  //   "wordpress",
  //   "design",
  //   "react",
  // ];
  return (
    <ul className="job-skills">
      {param.skills.map((skill, i) => (
        <li key={i}>
          <a href="#">{skill}</a>
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
