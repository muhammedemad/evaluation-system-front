import React, {Component} from 'react';
import * as classes from './Toolbar.module.scss';
import Logo from '../../Logo/WhiteLogo';
import AnonymousNavigation from '../AnonymousNavigation/AnonymousNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';
import DrawerToggle from '../DrawerToggler/DrawerToggler';
import Notifications from '../../UI/Notifications/Notifications';
import {connect} from 'react-redux';
class Toolbar extends Component {
    render(){
        return (
            <header className={[classes.Toolbar, this.props.className].join(' ')}>
                <Logo className={classes.ToolbarLogo}/>
                {
                    this.props.isAuthenticated?
                        <Notifications  className='MobileOnly' clicked={this.props.notificationsClicked} NumberOfNotifications={this.props.numberOfNotifications}/>
                    :null
                }
                
                <DrawerToggle MobileMenuOpen={this.props.MobileMenuOpen} clicked={this.props.drawerToggleClicked}/>
                <div className={classes.DesktopOnly}>
                {this.props.isAuthenticated ?
                    <>
                        <AuthenticatedNavigation />
                        <Notifications clicked={this.props.notificationsClicked} NumberOfNotifications={this.props.numberOfNotifications}/>
                    </> : <AnonymousNavigation />
                }
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: state.login.token !== null
    };
};
export default connect(mapStateToProps)(Toolbar);