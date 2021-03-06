import React, { useCallback, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection"
import VoteSection from "./VoteSection";
import {AxiosNoCache} from "shared/components/AxiosCache";

const styles = (theme) => ({});

function Vote(props) {
	const {actionID} = props;
	
	const [userData, setUserData] = useState(null);
	
	const LoadData = useCallback((id) => {
		AxiosNoCache({
			url: `/data/${id}/vote.json`,
			method: 'get'
		}).then(function (res) {
			setUserData(res.data);
		}).catch(function (error) {
			console.log(error);
		});
	}, [setUserData]);
	
	useEffect(()=>{
		LoadData(actionID);
	},[LoadData, actionID]);
	
	return (
		<div>
			<HeadSection/>
			{
				userData && (
					<VoteSection userData={userData}/>
				)
			}
		</div>
	);
}

Vote.propTypes = {
	theme: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	actionID: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(Vote)
