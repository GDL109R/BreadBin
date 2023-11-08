import { useState } from 'react';
import styles from "../ExpandableSection.module.css";

export default ({ title, reviewMessage, expanded = false }) => {

    const [isExpanded, setExpanded] = useState(expanded);

    const handleClick = () => {
        setExpanded(!isExpanded)
    };

    const reviewPreview = reviewMessage.length > 200 ? reviewMessage.substring(0, 200) + "..." : reviewMessage;

    return (
        <div className={styles['expandable-section']}>
            <div className={styles["expandable-title"]} onClick={() => handleClick()}>
                <span>{title}</span>
                <span className="symbol">{isExpanded ? "-" : "+"}</span>
            </div>
            <div className={styles["expandable-preview"]}>
                {!isExpanded && <p>{reviewPreview}</p>}
            </div>
            {isExpanded && <div className={styles["expandable-preview"]}><p>{reviewMessage}</p></div>}
        </div>
    )
}

