import Button from "./Button";

export default function Form() {
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="day">DAY</label>
          <input type="number" id="day" name="day" placeholder="DD"/>
        </fieldset>
        <fieldset>
          <label htmlFor="month">MONTH</label>
          <input type="number" id="month" name="month" placeholder="MM"/>
        </fieldset>
        <fieldset>
          <label htmlFor="year">YEAR</label>
          <input type="number" id="year" name="year" placeholder="YYYY"/>
        </fieldset>
      </form>
      <div className="button">
        <Button />
      </div>
    </>
  );
}
