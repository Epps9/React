import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

class SearchResults extends React.Component {
      
  constructor (props) {
    super (props);
  }

    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
      searchText: PropTypes.func,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const { cards, title, icon} = this.props;
      return (
        <Container >
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
            <div className={styles.creator}>
            </div> 
          </section>
        </Container>
      );
    }
}


export default SearchResults;