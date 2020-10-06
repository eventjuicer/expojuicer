
 
import {createMuiTheme} from '@material-ui/core/styles';
import _get from 'lodash/get'

import {
  red,
  grey

} from '@material-ui/core/colors';

//https://github.com/mui-org/@material-ui/core/blob/master/src/styles/getMuiTheme.js

const appTheme = `${process.env.REACT_APP_THEME}`;

const customThemes = {

  black : {


    //  spacing: spacing,
    //  fontFamily: "'Lato', 'Helvetica', sans-serif",
      palette: {
        primary1Color: '#000000', /*table alternate rows!*/
        primary2Color: grey[300],
        primary3Color: grey[300],
        accent1Color: red[500],
        accent2Color: grey[700], /*pagination + table alt rows onHover  */
        accent3Color: grey[700], /*table column names */
        // textColor: darkBlack,
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
      },
    appBar: {
      color: '#fdd835',
      titleFontWeight: 300,
      textColor : '#000000'
    },

  

    tabs: {
        backgroundColor: grey[200],
        textColor: grey[500],
        selectedTextColor: red[700],
    },

    

  },

  red : {


    //  spacing: spacing,
   //   fontFamily: "'Lato', 'Helvetica', sans-serif",
      palette: {
        // primary1Color: grey200, /*table alternate rows!*/
        primary2Color: grey[300],
        primary3Color: grey[300],
        accent1Color: red[500],
        accent2Color: grey[700], /*pagination + table alt rows onHover  */
        accent3Color: grey[700], /*table column names */
        // textColor: darkBlack,
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
      },
    appBar: {
      color: red[500],
      titleFontWeight: 300,
    },

 
    tabs: {
        backgroundColor: grey[200],
        textColor: grey[500],
        selectedTextColor: red[700],
    },

 


  }

};


export const getTheme = () => createMuiTheme(appTheme && appTheme in customThemes ? customThemes[appTheme] : customThemes.red)

export const getColorsFromTheme = () => _get(getTheme(), "palette", {})


