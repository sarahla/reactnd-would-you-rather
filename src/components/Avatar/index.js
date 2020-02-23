import React from 'react';

function Avatar(props) {
    const {user, width, className} = props;
    const src = require(`../../images/${user.avatarURL}`);
    return (
        <img className={className} src={src} alt={user.name} width={width} />
    )
}

export default Avatar;