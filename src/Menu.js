import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import { withRouter } from 'react-router-dom';

const items = [
    { name: 'customers', icon:'' },
    { name: 'segments', icon: <LabelIcon /> },
    { name: 'commands', icon: '' },
    { name: 'products', icon: '' },
    { name: 'categories', icon: '' },
    { name: 'reviews', icon: '' },
];

const Menu = ({ onMenuClick, translate, logout }) => (
    <div>
        <DashboardMenuItem onClick={onMenuClick} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={item.name}
                leftIcon={item.icon}
                onClick={onMenuClick}
            />
        ))}
        <Responsive
            xsmall={
                <MenuItemLink
                    to="/configuration"
                    primaryText='configuration'
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                />
            }
            medium={null}
        />
        <Responsive xsmall={logout} medium={null} />
    </div>
);

const enhance = compose(
    withRouter,
    connect(
        state => ({
            theme: state.theme,
            locale: state.i18n.locale,
        }),
        {}
    ),
    translate
);

export default enhance(Menu);
