import { useState } from 'react';
import styles from "../ExpandableSection.module.css";

export default ({ title, children, expanded = false }) => {

    const [isExpanded, setExpanded] = useState(expanded);

    const handleClick = () => {
        setExpanded(!isExpanded)
    };

    return (
        <div className={styles['expandable-section']}>
            <div className={styles["expandable-title"]} onClick={() => handleClick()}>
                <span>{title}</span>
                <span className="symbol">{isExpanded ? "-" : "+"}</span>
            </div>
            {isExpanded && <div className={styles["expandable-content"]}>{children}</div>}
        </div>
    )
}

