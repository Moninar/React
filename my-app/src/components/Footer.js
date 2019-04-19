import React from "react"

function Footer() {
    const date = new Date(1999, 10, 1, 17);
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        backgroundColor: "grey"
    }

    if (hours < 12) {
        timeOfDay = "morning";
        styles.backgroundColor = "red";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.backgroundColor = "green";
    } else {
        timeOfDay = "night";
        styles.backgroundColor = "grey";
    }

    return (
        <footer>
            <h3 style={styles}>Good {timeOfDay}</h3>
        </footer>
    )
}

export default Footer