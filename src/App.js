import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { appReducer, initialState } from './reducers/appReducer';

const App = (props) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addedFeatures={state.car.features} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeat: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeat: () => dispatch({ type: "ADD_FEATURE" }),
    removeFeat: () => dispatch({ type: "REMOVE_FEATURE" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
