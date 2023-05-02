import React from 'react';
import styles from "../styles/Title.module.css";
const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Liste der Bücher</h2>
                <p>Fügen Sie Ihr Buch der Bibliothek hinzu</p>
            </div>
        </div>
    );
};

export default Title;