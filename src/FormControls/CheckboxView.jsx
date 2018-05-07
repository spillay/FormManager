import React, { Component } from 'react'
import PropTypes from 'prop-types'

// const options = [
//   { key: "reactjs", label: "ReactJS", value: "reactjs" },
//   { key: "angular", label: "Angular", value: "angular" },
//   { key: "vuejs", label: "VueJS", value: "vuejs" }
// ]

export class CheckboxView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
  }

  onChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.checked)

    if (e.target.checked == true) {
      this.state.selected.push(e.target.value) // add item into array
    } else {
      this.state.selected = this.state.selected.filter((d) => (  // remove item from array
        d !== e.target.value
      ));
    }
    // console.log(JSON.stringify(this.state))
    this.props.onChange({ target: { value: this.state.selected } }, this.props._key)
  }


  render() {
    const content = this.props.options.map((row, idx) => (
      // console.log(row,idx)
      <div key={"ll" + row.key} className={this.props.opts.inline == true ? 'custom-control-inline' : 'custom-control'}>
        <label key={"ll" + row.key} className="custom-control custom-checkbox">
          <input
            className='custom-control-input'
            type="checkbox"
            key={row.key}
            value={row.value}
            onChange={(e) => { this.onChange(e) }}
          />
          <span className="custom-control-indicator"></span>
          <span className="custom-control-label "> {row.label}</span> </label>
      </div>

    ));
    return (<div>
      {content}
      <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
    </div>)

  }


} // end of CheckboxView

CheckboxView.propTypes = {
  _key: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // errorFor: PropTypes.func.isRequired
}
