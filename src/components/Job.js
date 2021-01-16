const Job = (props) => {
  return (
    <li className={"jobItem"}>
      <h2>{props.job}</h2>
      <p>{props.employer}</p>
    </li>
  );
};

export default Job;
