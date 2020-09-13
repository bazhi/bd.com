import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import HeadSection from "./HeadSection"
import VoteSection from "./VoteSection";

const styles = (theme) => ({
	wrapper: {
		position: "relative",
		backgroundColor: theme.palette.common.white,
		flex: 1,
		overflowY: "auto",
	},
});

function Home(props) {
	const {classes} = props;
	return (
		<Box className={classNames(classes.wrapper)}>
			<HeadSection />
			<VoteSection/>
		</Box>
	);
}

Home.propTypes = {
	theme: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home)
