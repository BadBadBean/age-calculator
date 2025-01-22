import { useState } from 'react';
import Button from "./Button";

export default function Form() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const [error, setError] = useState('');

  const calculateAge = (birthDate) => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Si days est négatif :
    if (days < 0) {
      months--; // On retire un mois
      // On ajoute les jours du mois précédent
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Si months est négatif :
    if (months < 0) {
      years--; // On retire une année
      months += 12; // On ajoute 12 mois
    }

    return { years, months, days };
  };

  const validateDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    const today = new Date();

    // Vérification de la validité de la date
    if (date.getDate() !== parseInt(day)) {
      return "Date invalide";
    }

    if (date > today) {
      return "Date dans le futur";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const day = formData.get('day');
    const month = formData.get('month');
    const year = formData.get('year');

    const validationError = validateDate(day, month, year);
    if (validationError) {
      setError(validationError);
      setAge({ years: '--', months: '--', days: '--' });
      return;
    }

    setError('');
    const birthDate = new Date(year, month - 1, day);
    const ageResult = calculateAge(birthDate);
    setAge(ageResult);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <fieldset>
          <label htmlFor="day">JOUR</label>
          <input 
            type="number" 
            id="day" 
            name="day" 
            placeholder="JJ"
            min="1"
            max="31"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="month">MOIS</label>
          <input 
            type="number" 
            id="month" 
            name="month" 
            placeholder="MM"
            min="1"
            max="12"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="year">ANNÉE</label>
          <input 
            type="number" 
            id="year" 
            name="year" 
            placeholder="AAAA"
            required
          />
        </fieldset>
        {error && <p>{error}</p>}
        <Button />
        <div>
          <h2>Âge :</h2>
          <p>
            {age.years} ans, {age.months} mois, et {age.days} jours
          </p>
        </div>
      </form>
    </div>
  );
}