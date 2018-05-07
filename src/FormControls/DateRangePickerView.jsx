import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates'

export class DateRangePickerView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {startDate:null,endDate:null}
    }


    onDateRangeChange = ({startDate, endDate }) => {
        console.log(startDate,endDate);
        if (startDate!= null && endDate!= null){
            this.setState({startDate:startDate,endDate:endDate},()=>{
                console.log(this.state);
                this.props.onChange(
                    {target:{value:{startDate: startDate.format("MMM Do YYYY"),endDate:endDate.format("MMM Do YYYY")}}},
                    this.props._key
                )
            });
        } else {
            this.setState({startDate:startDate,endDate:endDate});
        }
    }

    render() {

        return (
            <div key={this.props._key} >
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="startDateId"
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId= "endDateId"
                    onDatesChange={({startDate, endDate }) => this.onDateRangeChange({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    {...this.props.options}
                />
                <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
                <small className="form-text text-muted ">( Please provide a start and end date for {this.props.label}. )</small>
            </div>
        )
    }


} // end of SingleDatePickerView

DateRangePickerView.propTypes = {
    _key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorFor: PropTypes.func.isRequired
}
