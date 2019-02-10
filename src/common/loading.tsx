import * as React from "react";
import { State } from "../reducers";

import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";

const LoadingElement = props => {
  return (
    <div>
      {props.loading === true && (
        <ClipLoader
          sizeUnit={"px"}
          size={90}
          color={"#123abc"}
          loading={props.loading}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: any) => ({
  loading: state.load
});

export const Loading = connect(mapStateToProps)(LoadingElement);
