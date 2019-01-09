import React from 'react';
import { connect } from 'react-redux';
//import compose from 'recompose/compose';

import { GridList, GridTile } from '@material-ui/coreGridList';
import IconButton from '@material-ui/coreIconButton';
import IconPreview from '@material-ui/coresvg-icons/action/visibility';

import { showModal as showModalAction } from '../../redux/actions';

const modalData = ({ img, title, author }) => {
  return {
    title: author,
    body: '',
    image: img,
    buttons: []
  };
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    //  width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

const tilesData = [
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/badge_1.jpg',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/hostess_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/scanner_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },

  {
    img: 'https://files.ecommerceberlin.com/expojuicer/badge_1.jpg',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/hostess_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/scanner_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },

  {
    img: 'https://files.ecommerceberlin.com/expojuicer/badge_1.jpg',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/hostess_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: 'https://files.ecommerceberlin.com/expojuicer/scanner_1.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  }
];

const Photogrid = props => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList} cols={4}>
      {tilesData.map((tile, i) => (
        <GridTile
          key={i}
          title={tile.title}
          subtitle={
            <span>
              by <b>{tile.author}</b>
            </span>
          }
          actionIcon={
            <IconButton onClick={() => props.showModal(modalData(tile))}>
              <IconPreview color="white" />
            </IconButton>
          }
          actionPosition="right"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} alt="" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default connect(null, {
  showModal: showModalAction
})(Photogrid);
