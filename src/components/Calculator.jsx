import "./Calculator.css";

export default function Calculator() {




  
  return (
    <div className="container">
      <div className="label-container">
        <div className="day">
          <label className="only-label">
            DAY
            <input className="input-label" type="number" min="1" max="31" />
          </label>
        </div>
        <div className="month">
          <label className="only-label">
            MONTH
            <input className="input-label" type="number" min="1" max="12" />
          </label>
        </div>
        <div className="year">
          <label className="only-label">
            YEAR
            <input className="input-label" type="number" />
          </label>
        </div>
        <button className="button">
          <img src="../../assets/images/icon-arrow.svg" alt="" />
        </button>
      </div>
      <div className="age-calculator">
        <p className="calculo"> 25 years</p>
        <p className="calculo"> 3 months</p>
        <p className="calculo"> 5 days</p>
      </div>
    </div>
  );
}
