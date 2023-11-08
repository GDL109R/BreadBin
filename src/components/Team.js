import { Fragment } from "react";
import styles from "../TeamStyles.module.css";

const Team = () => {

    return (
        <Fragment>
            <div className="container">
                <div className={styles['levelRowStyle']}>
                    <div className="col-12">
                        <div className={styles['levelBoxStyle']}>Level 6</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat0.png")} alt="Liv" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require('../PFPs/Cat1.png')} alt="Jamie" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat2.png")} alt="Tommy" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat3.png")} alt="Kyle" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={styles['boxStyle']}>Liv</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>Jamie</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>Tommy</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>Kyle</div>
                    </div>
                </div>
                <div className={styles['levelRowStyle']}>
                    <div className="col-12">
                        <div className={styles['levelBoxStyle']}>Level 5</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat4.png")} alt="Anna" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat5.png")} alt="Helen" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className={styles['boxStyle']}>Anna</div>
                    </div>
                    <div className="col-6">
                        <div className={styles['boxStyle']}>Helen</div>
                    </div>
                </div>
                <div className={styles['levelRowStyle']}>
                    <div className="col-12">
                        <div className={styles['levelBoxStyle']}>Level 4</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat6.png")} alt="~~~~" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat7.png")} alt="~~~~" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat8.png")} alt="~~~~" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>
                            <img src={require("../PFPs/Cat9.png")} alt="~~~~" className={styles['pfpImgStyle']} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={styles['boxStyle']}>~~~~~</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>~~~~~</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>~~~~~</div>
                    </div>
                    <div className="col-3">
                        <div className={styles['boxStyle']}>~~~~~</div>
                    </div>
                </div>
                <div className={styles['levelRowStyle']}>
                    <div className="col-12">
                        <div className={styles['levelBoxStyle']}>Brief history of Bread Bin</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={styles['boxStyle']}>
                            History (derived from Ancient Greek ἱστορία (historía) 'inquiry; knowledge acquired by investigation') is the systematic study and documentation of the human past.
                            The period of events before the invention of writing systems is considered prehistory. "History" is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events. Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts, and ecological markers. History is incomplete and still has debatable mysteries.
                            History is an academic discipline which uses a narrative to describe, examine, question, and analyze past events, and investigate their patterns of cause and effect.Historians debate which narrative best explains an event, as well as the significance of different causes and effects. Historians debate the nature of history as an end in itself, and its usefulness in giving perspective on the problems of the present.
                            Stories common to a particular culture, but not supported by external sources (such as the tales surrounding King Arthur), are usually classified as cultural heritage or legends. History differs from myth in that it is supported by verifiable evidence. However, ancient cultural influences have helped create variant interpretations of the nature of history, which have evolved over the centuries and continue to change today. The modern study of history is wide-ranging, and includes the study of specific regions and certain topical or thematic elements of historical investigation. History is taught as a part of primary and secondary education, and the academic study of history is a major discipline in universities.
                            Herodotus, a 5th-century BC Greek historian, is often considered the "father of history", as one of the first historians in the Western tradition, though he has been criticized as the "father of lies". Along with his contemporary Thucydides, he helped form the foundations for the modern study of past events and societies. Their works continue to be read today, and the gap between the culture-focused Herodotus and the military-focused Thucydides remains a point of contention or approach in modern historical writing. In East Asia, a state chronicle, the Spring and Autumn Annals, was reputed to date from as early as 722 BC, though only 2nd-century BC texts have survived.
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team;