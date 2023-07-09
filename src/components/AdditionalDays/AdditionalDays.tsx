import "./AdditionalDays.css";
import React from "react";

const AdditionalDays: React.FC = () => {
  return (
    <div className="additional-days-container">
      <div className="additional-day">
        <div>
          <h3>Wednesday</h3>
          <p>25°C</p>
          <div>
            <p>Image</p>
          </div>
          <p>Clear sky</p>
        </div>
      </div>
      <div className="additional-day">
        <div>
          <h3>Thursday</h3>
          <p>26°C</p>
          <div>
            <p>Image</p>
          </div>
          <p>Raining</p>
        </div>
      </div>
      <div className="additional-day">
        <div>
          <h3>Friday</h3>
          <p>24°C</p>
          <div>
            <p>Image</p>
          </div>
          <p>Cloudy</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDays;
