import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
//import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
      
  constructor (props) {
    super (props);
  }

    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }

    render() {
      console.log('karty', this.state);
      const {cards,title, icon} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}> 
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span> 
            {title}
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div> */}
        </section>
      );
    }
}


export default Column;