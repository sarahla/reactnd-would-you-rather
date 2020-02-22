import React from 'react';

function Avatar(props) {
    const {user, width} = props;
    const src = require(`../../images/${user.avatarURL}`);
    return (
        <img src={src} alt={user.name} width={width} />
    )
}

export default Avatar;