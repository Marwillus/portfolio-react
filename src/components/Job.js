const Job = (props) => {
  return (
    <li className={"job-item"}>
      <h2>{props.job}</h2>
      <p>{props.employer}</p>
    </li>
  );
};

export default Job;
