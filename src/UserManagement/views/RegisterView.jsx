import React from 'react';
import PropTypes from 'prop-types';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Register View using {this.props.modelForm}
            </div>
        )
    }

}
RegisterView.propTypes = {
    modelForm: PropTypes.string
};
export default RegisterView;