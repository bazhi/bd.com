import React, { memo } from "react";
import intl from 'react-intl-universal';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Button, Hidden, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import LanguageSelector from "../../../shared/components/LanguageSelector";

const styles = theme => ({
	appBar: {
		boxShadow: theme.shadows[6],
		backgroundColor: theme.palette.common.white
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between"
	},
	menuButtonText: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400
	},
	noDecoration: {
		textDecoration: "none !important"
	}
});


function NavBar(props) {
	const {
		classes,
		openRegisterDialog,
		openLoginDialog,
		handleMobileDrawerOpen,
		handleMobileDrawerClose,
		mobileDrawerOpen,
		selectedTab
	} = props;
	const menuItems = [
		{
			link: "/",
			name: intl.get("Home"),
			icon: <HomeIcon className="text-white" />,
			iconPC: <HomeIcon className="" />
		},
		{
			link: "/blog",
			name: intl.get("Blog"),
			icon: <BookIcon className="text-white" />,
			iconPC: <BookIcon className="" />
		},
		{
			name: intl.get("Register"),
			onClick: openRegisterDialog,
			icon: <HowToRegIcon className="text-white" />,
			iconPC: <HowToRegIcon className="" />
		},
		{
			name: intl.get("SignIn"),
			onClick: openLoginDialog,
			icon: <LockOpenIcon className="text-white" />,
			iconPC: <LockOpenIcon className="" />
		}
	];
	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<div>
						<Typography variant="h4" className={classes.brandText} display="inline" color="primary">
							B
						</Typography>
						<Typography variant="h5" className={classes.brandText} display="inline" color="textSecondary">
							&
						</Typography>
						<Typography variant="h4" className={classes.brandText} display="inline" color="secondary">
							D
						</Typography>
					</div>
					<div>
						<LanguageSelector className={""} />
						<Hidden mdUp>
							<IconButton className={classes.menuButton} onClick={handleMobileDrawerOpen} aria-label="Open Navigation">
								<MenuIcon color="primary" />
							</IconButton>
						</Hidden>
						<Hidden smDown>
							{
								menuItems.map(element => {
									if (element.link) {
										return (
											<Link key={element.name} to={element.link} className={classes.noDecoration} onClick={handleMobileDrawerClose}>
												<Button color="default" size="large" classes={{text: classes.menuButtonText}}>
													{element.iconPC}
													{element.name}
												</Button>
											</Link>
										);
									}
									return (
										<Button color="default" size="large" onClick={element.onClick} classes={{text: classes.menuButtonText}} key={element.name}>
											{element.iconPC}
											{element.name}
										</Button>
									);
								})
							}
						</Hidden>
					</div>
				</Toolbar>
			</AppBar>
			
			<NavigationDrawer menuItems={menuItems} anchor="right" open={mobileDrawerOpen} selectedItem={selectedTab} onClose={handleMobileDrawerClose} />
		</div>
	);
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
	handleMobileDrawerOpen: PropTypes.func,
	handleMobileDrawerClose: PropTypes.func,
	mobileDrawerOpen: PropTypes.bool,
	selectedTab: PropTypes.string,
	openRegisterDialog: PropTypes.func.isRequired,
	openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(memo(NavBar));
