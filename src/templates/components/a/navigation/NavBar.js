import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";
import LanguageSelector from "shared/components/LanguageSelector";
import AudioFrame from "shared/components/AudioFrame";
import CompanyName from "shared/components/CompanyName";
import HideOnScroll from "shared/components/HideOnScroll";

const styles = theme => ({
	appBar: {
		boxShadow: theme.shadows[6],
		backgroundColor: theme.palette.background.topBar
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
});


function NavBar(props) {
	const {classes, target} = props;
	const music = "/music/001.mp3";
	return (
		<HideOnScroll target={target}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolbar} variant="dense">
					<CompanyName/>
					<div>
						<AudioFrame src={music}>
						</AudioFrame>
						<LanguageSelector className={""} />
					</div>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
	target : PropTypes.func
};

export default withStyles(styles, {withTheme: true})(memo(NavBar));
