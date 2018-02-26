import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderUser from '../components/RenderUser';
import { getUser } from '../../../actions/userActions';

class User extends Component {

    componentDidMount(){
        const user_id = this.props.match.params.id;

        this.props.getUser(user_id);
    }

    render(){
        const { user } = this.props;

        return (
            <RenderUser user={user} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);