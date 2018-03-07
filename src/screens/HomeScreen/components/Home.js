import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import '../../../styles/UsersStyles/User.css';
import '../../../styles/HomeStyles/Home.css';

class Home extends Component {
    state = {
        limit: 5,
    };

    componentDidMount(){
        const { getUsersPosts } = this.props;

        getUsersPosts(this.state);
    }


    handleClick = () => {
        const { limit } = this.state;

        this.props.getUsersPosts({ limit: limit*2 });

        this.setState({ limit: limit*2 });
    };


    renderUserPosts = () => {
        const { posts } = this.props;

        return posts.map(post => (
            <Link key={post._id} to={`/users/${post.author}`}>
                <ListItem leftAvatar={<Avatar src={post.photoURL} />}>
                    {post.title}
                </ListItem>
            </Link>
        ));
    };

    render() {
        const { posts } = this.props;

        return (
            <div className='homePosition userPosition'>
                <div className='homeBox userBox'>
                    <div className='homeTitleBox userGreetingBox'>
                        <h1 className='homeTitle userGreeting'>Welcome on main page!</h1>
                    </div>

                    <div className='homeContentBox'>
                        <h3 className='titleElement'>Users posts</h3>

                        <div>
                            <MuiThemeProvider>
                                <List>
                                    {this.renderUserPosts()}
                                </List>
                            </MuiThemeProvider>

                            {posts.length < this.state.limit ?
                                null :
                                <MuiThemeProvider>
                                    <FlatButton label='Render more posts' onClick={this.handleClick} fullWidth />
                                </MuiThemeProvider>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
