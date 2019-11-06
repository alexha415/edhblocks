import React, {useState} from 'react'
import styles from './Section.module.scss';

const Section = ({name, desc}) => {

  const [hovered, setHovered] = useState(false);

  const onHover = () => {
    console.log('test');
    setHovered(true);
  }
  return (
    <div className={`${styles.section} ${hovered ? styles.sectionHovered : ''} flex-col`} onMouseEnter={onHover}>
      <h4 className={`${styles.header}`}>{name}</h4>
      <p className={`${styles.description}`}>{desc}</p>
    </div>
  )
}

export default Section
