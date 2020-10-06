import React, { useEffect } from "react"

const NotFoundPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://github.com/blopa/jamstack-url-shortener'
        );
    }, []);

    return (<p></p>)
}

export default NotFoundPage;
