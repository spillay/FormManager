import React, { Component } from 'react';
import {DynamicForm,ReactDatesDefaultThemeOverRide} from '@spillay/formmanager';

const formControls = [

    // date control :
    { key: 'createdAt', label: 'CreatedAt', type: 'SingleDatePicker',fieldValidations: {isSDP:true}, options: {readOnly:true,numberOfMonths: 1,isOutsideRange: () => false,small: true,block: true,noBorder: true,displayFormat: 'MMM Do YYYY'} },
    { key: 'dateFilter', label: 'DateRangePicker', type: 'DateRangePicker', fieldValidations: {isDRP:true}, options: {readOnly:true,numberOfMonths: 1,isOutsideRange: () => false,small: true,block: true,noBorder: true,displayFormat: 'MMM Do YYYY'} },
  
    
    // text box control:
    { key: 'firstName', label: 'First Name', type: 'text', fieldValidations: { required: true,isString: true,minLength: 5,maxLength: 30 },options: {autoComplete: 'given-name',placeholder: 'First Name...',icon: 'fa fa fa-user'} },
    { key: 'lastName', label: 'Last Name', type: 'text', fieldValidations: { required: true,isString: true,minLength: 5,maxLength: 30  },options: {autoComplete: 'family-name',placeholder: 'Last Name...',icon: 'fa fa fa-user'} },
    
    
    { key: 'username', label: 'User Name (email address)', type: 'email', fieldValidations: { required: true,emailFormat: true },options: {autoComplete: 'email',placeholder: 'Email address...',icon: 'fa fa fa-envelope-o'}  },
    { key: 'password', label: 'Password', type: 'password', fieldValidations: {required: true},options: {autoComplete: 'current-password',placeholder: 'Password..',icon: 'fa fa fa-lock'}  },
    { key: 'salary', label: 'Salary($)', type: 'text', fieldValidations: {required: true,isCurrency:true},options: {autoComplete: '',placeholder: 'Salary..',icon: 'fa fa fa-usd'}  },
    { key: 'phone', label: 'Phone Mobile', type: 'text', fieldValidations: {required: true,isCellnumber: true},options: {autoComplete: 'tel',placeholder: 'Phone Mobile...',icon: 'fa fa fa-phone'} },
    
    { key: 'age', label: 'Age', type: 'range',fieldValidations: { required: true },options: {autoComplete: '',min:"10", max:"50" } },
    { key: 'rating', label: 'Rating', type: 'number', fieldValidations: {},options: {autoComplete: ''} },
    { key: 'note', label: 'Note', type: 'textarea', autoComplete: '', fieldValidations: { required: true }, options: {autoComplete: '',placeholder: 'Note...',icon: ''} },
  
    // // select control :
    { key: 'city', label: 'City', type: 'select',opts: {autoComplete: 'family-name'},options: [
        { key: 'mumbai', label: 'Mumbai', value: 'Mumbai' },
        { key: 'bangalore', label: 'Bangalore', value: 'Bangalore' },
        { key: 'kerala', label: 'Kerala', value: 'Kerala' }
      ]
    },
  
    // radio control :
    {
      key: 'gender', label: 'Gender', type: 'radio',fieldValidations: { required: true },opts: {inline:false},options: [
        { key: 'male', label: 'Male', name: 'gender', value: 'male' },
        { key: 'female', label: 'Female', name: 'gender', value: 'female' }
      ]
    },
  
    // // check box control :
    {
      key: 'skills', label: 'Skills', type: 'checkbox',fieldValidations: { required: true }, opts: {inline:true},options: [
        { key: 'reactjs', label: 'ReactJS', value: 'reactjs' },
        { key: 'angular', label: 'Angular', value: 'angular' },
        { key: 'vuejs', label: 'VueJS', value: 'vuejs' }
      ]
    }
  
  ]
  

class SimpleForm extends Component {
    
    reload = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
               <DynamicForm           // configure the form  controls
                    model={formControls}
                    groups={2} // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
                    columns="col-md-6"
                    ref={(node) => this.dynForm = node}
                    reload={this.reload}
                >
                </DynamicForm>
            </div>
        );
    }
}

export default SimpleForm;
/*
 
*/
