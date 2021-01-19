const JobDetail = (el) => {
  return (
    <div className="job-info">
      <img src={el.img} alt="" />
      <h1 className="date">{el.date}</h1>
      <h3>{el.name}</h3>
      <p>{el.quali} </p>
    </div>
  );
};

export default JobDetail;
