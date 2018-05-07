import React, { Component } from 'react'
import PropTypes from 'prop-types'

// const options= [
//   { key: "male", label: "Male", name: "gender", value: "male" },
//   { key: "female", label: "Female", name: "gender", value: "female" }
// ]

export class RadioView extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: ""
  }
  }

  onChange = (e) => {
    // console.log("e.target.value :",e.target.value)
    // console.log("checked :",e.target.checked)
    if (e.target.checked == true) {
      this.setState({ selected: e.target.value},()=>{
        this.props.onChange({target:{value:this.state.selected}}, this.props._key)
        // console.log(JSON.stringify(this.state))
    })
    } 
     
 
  }


  render () {
    const content = this.props.options.map((row, idx) => (
      <div key={'ll' + row.key} className={this.props.opts.inline==true?'custom-control-inline':'custom-control'}>
        <label key={'ll' + row.key} className="custom-control custom-radio">
          <input
            className="custom-control-input"
            type="radio"
            key={row.key}
            value={row.value}
            checked={this.state.selected === row.key}
            onChange={(e) => { this.onChange(e) }} />
          <span className="custom-control-indicator"></span>
          <span className="custom-control-label">{row.label}</span>
        </label>
        <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
      </div>
    ));
    return (<div>
      {content}
    </div>)

  }

} // end of TextView

RadioView.propTypes = {
  _key: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
