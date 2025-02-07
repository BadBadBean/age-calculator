import PropTypes from "prop-types";

export default function InputField({
  label,
  name,
  placeholder,
  min,
  max,
  required,
}) {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
      />
    </fieldset>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.bool,
};
