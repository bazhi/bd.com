import React, { useCallback, useState } from "react";
import intl from 'react-intl-universal';
import PropTypes from "prop-types";
import { Button, Dialog, DialogActions, DialogContent, TextField, Typography, withStyles, } from "@material-ui/core";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import { ST_Login } from "../../../shared/constants/StatusCommon"

const styles = (theme) => ({
	dialogContent: {
		paddingTop: theme.spacing(2),
	},
	dialogActions: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
});

function ChangePassword(props) {
	const {onClose, classes, setLoginStatus} = props;
	const [isLoading, setIsLoading] = useState(false);
	
	const sendPasswordEmail = useCallback(() => {
		setIsLoading(true);
		setTimeout(() => {
			setLoginStatus(ST_Login.verificationEmailSend);
			setIsLoading(false);
			onClose();
		}, 1500);
	}, [setIsLoading, setLoginStatus, onClose]);
	
	return (
		<Dialog
			open
			hideBackdrop
			onClose={onClose}
			disableBackdropClick={isLoading}
			disableEscapeKeyDown={isLoading}
			maxWidth="xs"
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendPasswordEmail();
				}}
			>
				<DialogContent className={classes.dialogContent}>
					<Typography paragraph>
						{intl.get("ForgetPwdContent")}
					</Typography>
					<TextField
						variant="outlined"
						margin="dense"
						required
						fullWidth
						label={intl.get("EmailAddress")}
						autoFocus
						type="email"
						autoComplete="off"
					/>
				</DialogContent>
				<DialogActions className={classes.dialogActions}>
					<Button onClick={onClose} disabled={isLoading}>
						{intl.get("Cancel")}
					</Button>
					<Button
						type="submit"
						variant="contained"
						color="secondary"
						disabled={isLoading}
					>
						{intl.get("ResetPwd")}
						{isLoading && <ButtonCircularProgress />}
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}

ChangePassword.propTypes = {
	onClose: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	setLoginStatus: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(ChangePassword);
