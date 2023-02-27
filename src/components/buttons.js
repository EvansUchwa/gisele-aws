import React from 'react'

export function IconBtn(props) {
    const { icon, size } = props;
    return (
        <span id={'iconBtn'}
            {...props}
            style={{ width: size, height: size, fontSize: (size / 2) + 'px' }} >
            {icon}
        </span>
    )
}
