import StatsCard from "./StatsCard";
import classes from "./StatsComponent.module.css";
const StatsComponent = () => {
  return (
    <>
      <div className={classes.container}>
        <h3 style={{ color: "rgb(48, 59, 90)" }}>Summary</h3>
        <div className={classes.statsContainer}>
          <StatsCard
            style={{
              background: "hsla(0, 100%, 67%,10%)",
              color: "hsla(0, 100%, 67%,100%)",
            }}
            title="Reaction"
            img="/assets/images/icon-reaction.svg"
            data="80"
          />
          <StatsCard
            style={{
              background: "hsla(39, 100%, 56%,10%)",
              color: "hsla(39, 100%, 56%,100%)",
            }}
            title="Memory"
            img="/assets/images/icon-memory.svg"
            data="92"
          />
          <StatsCard
            style={{
              background: "hsla(166, 100%, 37%,10%)",
              color: "hsla(166, 100%, 37%,100%)",
            }}
            title="Verbal"
            img="/assets/images/icon-verbal.svg"
            data="61"
          />
          <StatsCard
            style={{
              background: "hsla(234, 85%, 45%,10%)",
              color: "hsla(234, 85%, 45%,100%)",
            }}
            title="Visual"
            img="/assets/images/icon-visual.svg"
            data="72"
          />
        </div>

        <button>Continue</button>
      </div>
    </>
  );
};

export default StatsComponent;
