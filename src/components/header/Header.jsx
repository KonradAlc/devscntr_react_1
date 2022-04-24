import React, { useState } from 'react';
import './header.css';

import user_avatar from '../../assets/user_avatar.png';
import notifications from '../../assets/notifications.png';

const Header = (props) => {

    return (
        <header>
            <div className="header__title">{props.page}</div>
            <div className="header__user">
                <div className="header__notifications">
                    <img src={notifications} alt="" />
                </div>
                <div className="header__user__name">
                    Jones Ferdinand
                </div>
                <div className="header__user__img">
                    <img src={user_avatar} />
                </div>
            </div>
        </header>
    )
}

export default Header;