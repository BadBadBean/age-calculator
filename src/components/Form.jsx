import Button from "./Button";

export default function Form() {

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    for (let [key, value] of formData.entries()) {
      console.log({key, value})
    }

    const birthDate = new Date(year.value, month.value - 1, day.value).toLocaleDateString("fr-FR")
    console.log(birthDate)
  }

  return (
    <>
      <form onSubmit={handleSubmit}> 
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
        <Button />
      </form>
    </>
  );
}
