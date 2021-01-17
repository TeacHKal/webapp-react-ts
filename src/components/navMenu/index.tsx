import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {RouteComponentProps, withRouter} from "react-router-dom";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface props extends RouteComponentProps {}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
    },
}));

const NavMenu: React.FC<props> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('/');

    const goToRouterPath = (path: string) => {
        props.history.push(path);
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
        goToRouterPath(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                    <Tab
                        value="/"
                        label="Home"
                        wrapped
                        {...a11yProps('one')}
                    />
                    <Tab value="/chatApp" label="Chat App" {...a11yProps('two')} />
                    <Tab value="/rps" label="Paper Rock Scissors" {...a11yProps('three')} />
                    <Tab value="/test" label="Test" {...a11yProps('three')} />
                </Tabs>
            </AppBar>
        </div>
    );
}

export default withRouter(NavMenu);