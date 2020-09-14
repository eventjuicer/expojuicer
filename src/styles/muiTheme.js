
import Provider from '@material-ui/core/styles/MuiThemeProvider';
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
      fontFamily: "'Lato', 'Helvetica', sans-serif",
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

    tableRow: {
       hoverColor: grey[300],
       stripeColor: grey[200],
       // selectedColor: palette.borderColor,
       // textColor: palette.textColor,
       // borderColor: palette.borderColor,
       // height: 48,
     },

     card: {
        // titleColor: fade(palette.textColor, 0.87),
        // subtitleColor: fade(palette.textColor, 0.54),
        // fontWeight: typography.fontWeightMedium,
      },
      cardMedia: {
        // color: darkWhite,
        // overlayContentBackground: lightBlack,
        // titleColor: darkWhite,
        // subtitleColor: lightWhite,
      },
 
     flatButton: {
        // color: transparent,
        // buttonFilterColor: '#999999',
        // disabledTextColor: fade(palette.textColor, 0.3),
      //  textColor: '#ffffff',
      //  primaryColor: '#000000',
      //  secondaryTextColor: '#ffffff',
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
      },

    raisedButton: {
        
      //  // color: palette.alternateTextColor,
      //   // textColor: palette.textColor,
      //   textColor: '#ffffff',
      //   primaryColor: '#000000',
      //   // primaryTextColor: palette.alternateTextColor,
        
      //   secondaryColor: palette.accent1Color,
      //   secondaryTextColor: palette.alternateTextColor,
        
        // disabledColor: darken(palette.alternateTextColor, 0.1),
        // disabledTextColor: fade(palette.textColor, 0.3),
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
    },

    tabs: {
        backgroundColor: grey[200],
        textColor: grey[500],
        selectedTextColor: red[700],
    },

    // card: {
    //    titleColor: fade(palette.textColor, 0.87),
    //    subtitleColor: fade(palette.textColor, 0.54),
    //    fontWeight: typography.fontWeightMedium,
    //  },
    //  cardMedia: {
    //    color: darkWhite,
    //    overlayContentBackground: lightBlack,
    //    titleColor: darkWhite,
    //    subtitleColor: lightWhite,
    //  },
 

  },

  red : {


    //  spacing: spacing,
      fontFamily: "'Lato', 'Helvetica', sans-serif",
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

    tableRow: {
       hoverColor: grey[300],
       stripeColor: grey[200],
       // selectedColor: palette.borderColor,
       // textColor: palette.textColor,
       // borderColor: palette.borderColor,
       // height: 48,
     },

     card: {
        // titleColor: fade(palette.textColor, 0.87),
        // subtitleColor: fade(palette.textColor, 0.54),
        // fontWeight: typography.fontWeightMedium,
      },
      cardMedia: {
        // color: darkWhite,
        // overlayContentBackground: lightBlack,
        // titleColor: darkWhite,
        // subtitleColor: lightWhite,
      },
  

     flatButton: {
        // color: transparent,
        // buttonFilterColor: '#999999',
        // disabledTextColor: fade(palette.textColor, 0.3),
       textColor: red[700],
        primaryTextColor: red[700],
    //    secondaryTextColor: palette.accent1Color,
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
      },

    raisedButton: {
        // color: palette.alternateTextColor,
        // textColor: palette.textColor,
        primaryColor: red[700],
        // primaryTextColor: palette.alternateTextColor,
        // secondaryColor: palette.accent1Color,
        // secondaryTextColor: palette.alternateTextColor,
        // disabledColor: darken(palette.alternateTextColor, 0.1),
        // disabledTextColor: fade(palette.textColor, 0.3),
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
    },

    tabs: {
        backgroundColor: grey[200],
        textColor: grey[500],
        selectedTextColor: red[700],
    },

    // card: {
    //    titleColor: fade(palette.textColor, 0.87),
    //    subtitleColor: fade(palette.textColor, 0.54),
    //    fontWeight: typography.fontWeightMedium,
    //  },
    //  cardMedia: {
    //    color: darkWhite,
    //    overlayContentBackground: lightBlack,
    //    titleColor: darkWhite,
    //    subtitleColor: lightWhite,
    //  },
 


  }

};


export const getTheme = () => createMuiTheme(appTheme && appTheme in customThemes ? customThemes[appTheme] : customThemes.red)

export const getColorsFromTheme = () => _get(getTheme(), "palette", {})

export {  Provider }
