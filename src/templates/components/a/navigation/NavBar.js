import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import LanguageSelector from "shared/components/LanguageSelector";
import AudioFrame from "shared/components/AudioFrame";

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
	
	noDecoration: {
		textDecoration: "none !important"
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400
	},
});


function NavBar(props) {
	const {classes,} = props;
	const music = "/music/001.mp3";
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
						<AudioFrame src={music}>
						</AudioFrame>
						<LanguageSelector className={""} />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(memo(NavBar));
