import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SelectView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      dirty: false
    }
  }

  onChange = (e) => {
    // console.log("Select value: ", e.target.value);
    this.setState({ selected: e.target.value,dirty: true }, () => {
      this.props.onChange({target:{value:this.state.selected}}, this.props._key)
      
    })
  }
 
  getClassName = () => {
    if (this.state.dirty==true){
      return 'form-control is-valid'; 
    } else {
      return 'form-control'; 
    }
}

  render() {
    let content = this.props.options.map((o) => (
      <option key={o.key} value={o.value}>
        {o.label}
      </option>
    ));

    content = <div key={this.props._key}>
      <select
        value={this.state.selected}
        className={this.getClassName()+' selectpicker show-tick show-menu-arrow'}
        width='100px'
        title="Choose one of the following..."
        data-size="5"
        data-live-search="false"
        {...this.props.opts}
        onChange={(e) => this.onChange(e)}>
        <optgroup label="Location">
          {content}
        </optgroup>
      </select>
      <div className="validation-error" >{this.props.errorFor(this.props._key)}</div>
      <small className="form-text text-muted">( Please provide valid {this.props.label}. )</small>
    </div>;




    return (<div>
      {content}
    </div>)
  }

} // end of TextView

SelectView.propTypes = {
  _key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorFor: PropTypes.func.isRequired
}
