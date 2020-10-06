import React, { useEffect } from "react"

const IndexPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://github.com/blopa/jamstack-url-shortener'
        );
    }, []);

    return (<p></p>)
}

export default IndexPage;
