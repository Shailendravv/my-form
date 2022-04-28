import React from 'react';
import './PersonalInfo.css';
// import AdditionalInfo from './Components/AdditionalInfo';
import PersonalInfo from './Components/PersonalInfo';

const handleSubmit=()=>{}

export default function PersonalInfo() {
  return (
    <div>
      <form>
        <div className="name">
          <div>
            <label>
              First name
              <br />
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Last name
              <br />
              <input type="text" name="name" />
            </label>
          </div>
        </div>
        <div className="email">
          <label>
            Email address
            <br />
            <input type="text" name="name" />
          </label>
        </div>
        <div className="country">
          <label>
            Country/Region
            <br />
            <input type="text" name="name" />
          </label>
        </div>
        <div className="street">
          <label>
            Street address
            <br />
            <input type="text" name="name" />
          </label>
        </div>
        <div className="rest">
          <div>
            <label>
              City
              <br />
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              State / Province
              <br />
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Zip / Postal
              <br />
              <input type="text" name="name" validation={} />
            </label>
          </div>
        </div>
        <br/>
        <button type="submit" onSubmit={handleSubmit}>Next</button>
      </form>
    </div>
  );
}
