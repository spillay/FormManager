import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class RangeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            dirty: false
        }
    }

    onChange = (e) => {
        this.setState({ value: e.target.value, dirty: true }, () => {
            this.props.onChange({ target: { value: this.state.value } }, this.props._key)
        })
    }

    getClassName = () => {
        if (this.state.dirty == false) {
            return 'form-control-range';
        } else {
            if (this.props.errorFor(this.props._key) == "") {
                return 'form-control-range is-valid';
            } else {
                return 'form-control-range is-invalid';
            }
        }
    }
    render() {
        return (

            <div key={"r" + this.props._key} >
                <input
                    className={this.getClassName()}
                    type={this.props.type}
                    key={this.props._key}
                    value={this.state.value}
                    onChange={(e) => this.onChange(e)}
                    {...this.props.options}
                />
                <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
                <span >Current Slider Value: <span className="badge badge-success">{this.state.value}</span></span>
                <small className="form-text text-muted ">( Please provide valid {this.props.label}. )</small>
            </div>
        )
    }
} // end of RangeView

RangeView.propTypes = {
    _key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorFor: PropTypes.func.isRequired
}
