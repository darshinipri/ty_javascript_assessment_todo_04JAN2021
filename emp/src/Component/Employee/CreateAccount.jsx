import React, { Component } from 'react';

export default class ShowAccount extends Component {
    empData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password:'',
            phone: ''
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            password: '',
            phone: ''
        })
   console.log(this.state.props)
     }



    // React Life Cycle
    componentDidMount() {
        this.empData = JSON.parse(localStorage.getItem('employee'));

        if (localStorage.getItem('employee')) {
            this.setState({
                name: this.empData.name,
                email: this.empData.email,
                password: this.empData.password,
                phone: this.empData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                password: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('employee', JSON.stringify(nextState));
    }

   

    render() {
        return (
            <div className="container">
                
                <form onSubmit={this.onSubmit} method="post">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required maxLength="30" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input required type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" required maxLength="10" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}