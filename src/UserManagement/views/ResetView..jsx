import React from 'react';
import PropTypes from 'prop-types';

class ResetView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Reset View using {this.props.modelForm}
            </div>
        )
    }

}
ResetView.propTypes = {
    modelForm: PropTypes.string
};
export default ResetView;