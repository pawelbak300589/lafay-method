import React from 'react';

import AdminNav from "./admin-nav/admin-nav.component";
import NormalUserNav from "./normal-user-nav/normal-user-nav.component";
import PremiumUserNav from "./premium-user-nav/premium-user-nav.component";

const CustomNavbar = ({ currentUser }) => {
    switch (currentUser.role) {
        case 'Admin':
            return <AdminNav />;
        case 'NormalUser':
            return <NormalUserNav />;
        case 'PremiumUser':
            return <PremiumUserNav />;
        default:
            return <></>;
    }
};

export default CustomNavbar;
