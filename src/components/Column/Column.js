import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {

    constructor (props) {
        super (props)
    }

    static propTypes = {
        title1: PropTypes.node,
        title2: PropTypes.node,
        title3: PropTypes.node,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}> {this.props.columnTitle}
                </h3>
            </section>
        );
    }
}

export default Column;