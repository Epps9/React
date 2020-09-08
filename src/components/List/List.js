import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';



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
            <Column columnTitle1={this.props.title1}/>
            <Column columnTitle1={this.props.title2} />
            <Column columnTitle1={this.props.title3} />
          </div>
      </section>
    )
  }
}

export default List;