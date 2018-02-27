import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderUser from '../components/RenderUser';
import { getUser } from '../../../actions/userActions';
import AuthWrapper from '../../../components/AuthWrapper';

class User extends Component {

    componentDidMount(){
        const userParam = this.props.match.params.id || 'me';

        this.props.getUser(userParam);
    }

    render(){
        const { user } = this.props;

        return (
            <RenderUser user={user} />
        )
    }
}

const mapStateToProps = ({ userReducer }) => {
    return {
        user: userReducer.user,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser
}, dispatch);

export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps)(User));