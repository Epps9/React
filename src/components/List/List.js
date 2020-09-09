import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Column from '../Column/Column'



class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroIMG={this.props.image} />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column key="0" columnTitle={this.props.columns[0].title}/>
            <Column key={1} columnTitle={this.props.columns[1].title} />
            <Column key={2} columnTitle={this.props.columns[2].title} />
          </div>
      </section>
    )
  }
}

export default List;