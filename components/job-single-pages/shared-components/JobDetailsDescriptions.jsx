const JobDetailsDescriptions = (param) => {
  return (
    <div className="job-detail">
      <h4>Описание работы</h4>
      <p>
        {param.description}
      </p>
      <h4>Обязанности</h4>
      <ul className="list-style-three">
        {param.responsibilities.map(item => ((
          <li>
            {item}
          </li>
        )))}
      </ul>
      <h4>Навыки и опыт</h4>
      <ul className="list-style-three">
        {param.skills.map(item => ((
            <li>
              {item}
            </li>
        )))}
      </ul>
    </div>
  );
};

export default JobDetailsDescriptions;
