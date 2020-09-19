import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';


class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,    
    image: PropTypes.node,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {addColumn, columns, title, image, description} = this.props;
    //console.log('pokaż columns', columns);

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div> 
        <Container />
      </section>
    );
  }
}

export default List;