import classes from "./ResultComponent.module.css";
const ResultComponent = () => {
  return (
    <>
      <div className={classes.container}>
        <h2>Your Result</h2>
        <div className={classes.circle}>
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h1>Great</h1>
        <p>You scored higher than 65% of the people who have taken theses tests</p>
      </div>
    </>
  );
};

export default ResultComponent;
