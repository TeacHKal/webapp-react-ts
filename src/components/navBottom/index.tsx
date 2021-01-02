import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        width: '250px',
    },
});

export const NavBottom: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(-1);

    return (
        <BottomNavigation
            value={value}
            onChange={(event: any, newValue: React.SetStateAction<number>) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Contact" icon={<Email />} />
        </BottomNavigation>
    );
}