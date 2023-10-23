import classes from "./StatsCard.module.css";
const StatsCard = (props) => {
  return (
    <>
      <div className={classes.container} style={props.style}>
        <div className={classes.leftSide}>
          <img src={props.img} />
          <span>{props.title}</span>
        </div>
        <div className={classes.rightSide}>
          <span style={{ color: "hsl(224, 30%, 27%)" }}>{props.data} / </span>
          <span style={{ color: "rgb(172 172 190)" }}>100</span>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
