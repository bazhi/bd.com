import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Divider, List, Paper, withStyles } from "@material-ui/core";
import SubscriptionTable from "./SubscriptionTable";
import { Subscription as TabSubscription } from "logged_in/constants/TabPage";

const styles = {
	divider: {
		backgroundColor: "rgba(0, 0, 0, 0.26)"
	}
};

function Subscription(props) {
	const {
		transactions,
		classes,
		selectPage
	} = props;
	
	useEffect(() => {
		if (selectPage) {
			selectPage(TabSubscription);
		}
	}, [selectPage]);
	
	return (
		<Paper>
			<List disablePadding>
				<Divider className={classes.divider} />
				<SubscriptionTable transactions={transactions} />
			</List>
		</Paper>
	);
}

Subscription.propTypes = {
	classes: PropTypes.object.isRequired,
	transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(Subscription);
