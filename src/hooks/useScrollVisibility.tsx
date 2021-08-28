import React, { useState } from 'react';

const useScrollVisibility = (objectRef) => {
    const [visible, setVisible] = useState(false);

    const observe = () => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
        observer.observe(objectRef.current);
    };

    return { observe, visible };
}

export default useScrollVisibility;