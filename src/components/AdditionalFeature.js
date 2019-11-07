import React from 'react';
import { addFeat } from "./../actions/actionCreators";

const AdditionalFeature = props => {

  const handleAddFeature = () => {

  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
