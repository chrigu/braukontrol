// @flow
import React, { PropTypes } from 'react';

const Alert = ({alert, remove, index}) => {

  return (
    <div className="alert row">
        <div className="col-xs-2">
            <span>{alert.treshold}°C</span>
        </div>
        <div className="col-xs-3">
            <span>Triggered:
                {alert.triggered === true ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>}
            </span>
        </div>
        <div className="col-xs-1 pull-right">
            <span className="glyphicon glyphicon-trash" aria-hidden="true" onClick={() => remove(index)}></span>
        </div>
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
};

export default Alert;