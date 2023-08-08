import React from "react";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear;

    return (
        <h6>Copyright {year} @ Samuel Abioye</h6>
    )
}

export default Footer;