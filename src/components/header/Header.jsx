import React, { useState } from 'react';
import './header.css';

import user_avatar from '../../assets/user_avatar.png';
import notifications from '../../assets/notifications.png';

const Header = () => {

    return (
        <header>
            <div id="header-title" className="header__title">Błąd strony</div>
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