import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactBootstrapSlider from 'react-bootstrap-slider';

export class SliderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            dirty: false,
           
        }
    }


    onChange = (e) => {

        // console.log("Slider value:",e.target.value)
        this.setState({ value: e.target.value, dirty: true }, () => {
            this.props.onChange({ target: { value: this.state.value } }, this.props._key)
        })
    }


    render() {
        return (

            <div key={"r" + this.props._key}>
                <ReactBootstrapSlider
                    value={this.state.value}
                    handleChange={(e) => this.onChange(e)}
                    slideStop={(e) => this.onChange(e)}
                    style={{width:'100%;'}}
                    {...this.props.options} />
                <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
               
                <small className="form-text text-muted ">( Please provide valid {this.props.label}. )</small>
            </div>
        )
    }
} // end of RangeView

SliderView.propTypes = {
    _key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorFor: PropTypes.func.isRequired
}

// <small className="form-text text-muted ">Current Slider Value: <span className="badge badge-success">{this.state.value}</span></small>