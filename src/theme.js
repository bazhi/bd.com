import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./palette";

// colors
const darkBlack = "rgb(36, 40, 44)";

// border
const borderWidth = 2;
const borderHeight = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createMuiTheme({
	palette: palette,
	breakpoints: {
		values: {
			xl,
			lg,
			md,
			sm,
			xs
		}
	},
	border: {
		borderColor: borderColor,
		borderWidth: borderWidth
	},
	overrides: {
		MuiExpansionPanel: {
			root: {
				position: "static"
			}
		},
		MuiTableCell: {
			root: {
				paddingLeft: spacing * 2,
				paddingRight: spacing * 2,
				borderBottom: `${borderWidth}px solid ${borderColor}`,
				[`@media (max-width:  ${sm}px)`]: {
					paddingLeft: spacing,
					paddingRight: spacing
				}
			}
		},
		MuiDivider: {
			root: {
				backgroundColor: borderColor,
				height: borderHeight
			}
		},
		MuiPrivateNotchedOutline: {
			root: {
				borderWidth: borderWidth
			}
		},
		MuiListItem: {
			divider: {
				borderBottom: `${borderWidth}px solid ${borderColor}`
			}
		},
		MuiDialog: {
			paper: {
				width: "100%",
				maxWidth: 430,
				marginLeft: spacing,
				marginRight: spacing
			}
		},
		MuiTooltip: {
			tooltip: {
				backgroundColor: darkBlack
			}
		},
		MuiExpansionPanelDetails: {
			root: {
				[`@media (max-width:  ${sm}px)`]: {
					paddingLeft: spacing,
					paddingRight: spacing
				}
			}
		}
	},
	typography: {
		useNextVariants: true
	},
	
});

export default responsiveFontSizes(theme);
