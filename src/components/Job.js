const Job = (props) => {
  return (
    <li className={"jobItem"}>
      <h2>{props.job}</h2>
      <h4>{props.employer}</h4>
    </li>
  );
};

export default Job;
