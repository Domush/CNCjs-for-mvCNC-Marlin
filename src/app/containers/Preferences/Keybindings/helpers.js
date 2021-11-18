
import React, { Fragment } from 'react';

export const formatShortcut = (shortcut = [], isActive = true) => {
    const output = [];
    const style = {
        opacity: !isActive ? '0.4' : '1'
    };

    for (let i = 0; i < shortcut.length; i++) {
        if (i === shortcut.length - 1) {
            output.push(<kbd style={style} key={i}>{shortcut[i]}</kbd>);
        } else {
            output.push(<Fragment key={i}><kbd style={style}>{shortcut[i]}</kbd> <span>+</span> </Fragment>);
        }
    }

    return output;
};
