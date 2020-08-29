import React, { useEffect } from "react"

const Redirect = ({pageContext}) => {
    const {redirectToUrl} = pageContext;
    useEffect(() => {
        window.location.replace(redirectToUrl);
    }, []);

    return (
        <p>
            Lala
        </p>
    )
}

export default Redirect
