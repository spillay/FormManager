import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../service/AuthService';
import ErrorBoundary from '../../utils/ErrorBoundary';
import { DynamicForm } from '../../DynamicForm';

export class LoginView extends Component {
    constructor(props) {
        super(props);
        console.log("in LoginView constructor");
        this.Auth = new AuthService();
        this.state = {
            submitted: false
        }
    } // end of constructor

    reload = () => {
        this.forceUpdate();
    }

    checkStage = () => {
        // console.log("checkStage")
        if (this.dynForm == undefined) {
            return true;
        }
        // console.log("before switch :", this.dynForm.state.stage)
        switch (this.dynForm.state.stage) {
            case "Initial":
            case "Incomplete":
                return true;
                break;
            case "Complete":
                return false;
                break;
            default:
                return true;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.dynForm.checkValidations() == true) {
            var data = this.dynForm.getData();
            this.setState({ submitted: true })
            console.log("now you can submit...", data);  // alert("now you can submit..."+JSON.stringify(data))
            this.Auth.login(data).then((res) => {
                console.log(res);
                this.props.submitFunc(res);
            }).catch((error) => {
                console.log(`error :${error}`)
            })
        }
    }
    render() {
        return (
            <div>
                <main role="main" className="container pt-7">
                    <div className="row">
                        <div className="col-md-6 offset-md-4">
                            <div className="card" style={{ width: '30rem' }}>
                                <img className="card-img-top custom-image mx-auto img-thumbnail" src={this.props.logo} alt="logo" />
                                <div className="card-body">
                                    <span><i className="fa fa fa-forward" aria-hidden="true"></i>  Login </span>
                                    <form onSubmit={this.props.submitFunc}>
                                        <ErrorBoundary>
                                            <DynamicForm           // configure the form  controls
                                                model={this.props.modelForm}
                                                groups={this.props.groups} // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
                                                columns={this.props.columns}
                                                ref={(node) => this.dynForm = node}
                                                reload={this.reload} >
                                            </DynamicForm>
                                        </ErrorBoundary>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-md-12 '>
                                                <button className="btn btn-primary btn-block" disabled={this.checkStage()} >
                                                    {(this.state.submitted) ?
                                                        <div><i className="fa fa-spinner fa-spin"></i> {'Processing...'}</div> :
                                                        <i className="fa fa fa-sign-in" aria-hidden="true"></i>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {this.props.children}


                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

        )
    }

}
LoginView.propTypes = {
    groups: PropTypes.number.isRequired,
    columns: PropTypes.string.isRequired,
    modelForm: PropTypes.object.isRequired,
    submitFunc: PropTypes.func.isRequired
};


