import React, {useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

interface props extends RouteComponentProps {}

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

    const currentRouterPath= useSelector((state: any) => state.router.location.pathname);

    useEffect(() => {
        setValue(currentRouterPath);
    }, [currentRouterPath])

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