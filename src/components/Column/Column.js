import React from 'react';
import styles from '.Column.scss';

class Column extends React.components {

    static propTypes = {
        title1: PropTypes.node,
        title2: PropTypes.node,
        title3: PropTypes.node,
      }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}> {props.titleText}
                </h3>
            </section>
        );
    }
}

export default Column;