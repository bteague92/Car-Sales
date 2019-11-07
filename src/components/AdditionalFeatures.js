import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = ({ additionalFeat }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeat.length ? (
        <ol type="1">
          {additionalFeat.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeat: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, null)(AdditionalFeatures);
