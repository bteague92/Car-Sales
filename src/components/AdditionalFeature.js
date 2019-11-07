import React from 'react';
import { addFeat } from "./../actions/actionCreators";
import { connect } from "react-redux";

const AdditionalFeature = ({ addFeat, feature }) => {

  const handleAddFeature = () => {

  }
  console.log(addFeat);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeat })(AdditionalFeature);
