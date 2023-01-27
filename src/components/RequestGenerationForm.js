import React, { useState } from 'react';
import styles from './RequestGenerationForm.module.css';

const RequestGenerationForm = ({ generateRequest }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const changeHandler = (event) => {
    const options = [...event.target.selectedOptions];

    if (options.length > 3) {
      return;
    }

    const values = options.map((option) => option.value);
    setSelectedValues(values);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedValues);
    generateRequest(selectedValues);
  };
  return (
    <div className={styles['container']}>
      <h2>Choose upto 3 of your favorite genres</h2>
      <form className={styles['form']} onSubmit={submitHandler}>
        <select
          className={styles['items-container']}
          multiple={true}
          value={selectedValues}
          onChange={changeHandler}
        >
          <option
            className={styles['option-item']}
            value="Action and Adventure"
          >
            Action and Adventure
          </option>
          <option className={styles['option-item']} value="Classics">
            Classics
          </option>
          <option
            className={styles['option-item']}
            value="Comic Book or Graphic Novel"
          >
            Comic Book or Graphic Novel
          </option>
          <option
            className={styles['option-item']}
            value="Detective and Mystery"
          >
            Detective and Mystery
          </option>
          <option className={styles['option-item']} value="Fantasy">
            Fantasy
          </option>
          <option className={styles['option-item']} value="Historical Fiction">
            Historical Fiction
          </option>
          <option className={styles['option-item']} value="Horror">
            Horror
          </option>
          <option className={styles['option-item']} value="Literary Fiction">
            Literary Fiction
          </option>
          <option className={styles['option-item']} value="Romance">
            Romance
          </option>
          <option className={styles['option-item']} value="Science Fiction ">
            Science Fiction{' '}
          </option>
          <option
            className={styles['option-item']}
            value="Suspense, Thrillers and Crime"
          >
            Suspense, Thrillers and Crime
          </option>
          <option
            className={styles['option-item']}
            value="Biographies, Autobiographies, Memoir and Essays"
          >
            Biographies, Autobiographies, Memoir and Essays
          </option>
          <option className={styles['option-item']} value="Cookbooks">
            Cookbooks
          </option>
          <option className={styles['option-item']} value="Poetry">
            Poetry
          </option>
          <option className={styles['option-item']} value="History">
            History
          </option>
        </select>
        <button type="submit" className={styles['generate-btn']}>
          Generate
        </button>
      </form>
      <h3>{selectedValues}</h3>
    </div>
  );
};

export default RequestGenerationForm;
