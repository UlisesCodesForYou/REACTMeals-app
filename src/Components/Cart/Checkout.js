import { useRef } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === ""; // Helper functions that are used to validate
const isFiveNumbs = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const enteredName = nameInputRef.current.value;
  const enteredStreet = streetInputRef.current.value;
  const enteredPostalCode = postalCodeInputRef.current.value;
  const enteredCity = cityInputRef.current.value;

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameIsValid = !isEmpty(enteredName); // So here, I am validating if the isEmpty function is NOT empty.
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveNumbs(enteredPostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (formIsValid) {
      // Data goes here.
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

// TO CANCEL THE ORDER, I MUST GIVE THAT BUTTON A TYPE OF 'BUTTON' OR ELSE IT'LL SUBMIT!  I DON'T WANT THAT!
