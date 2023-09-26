/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.cirlce-shadow-move': {
          'box-shadow': 'rgba(103, 0, 255, 0.4) 0px 10px 60px 0px',
          'animation': 'pulse-opacity 4s infinite, move-effect 4s infinite',
          'animation-timing-function': 'ease-in-out'
        },
        '.image-effect': {
          'filter': 'grayscale(1) brightness(.87)'
        },
        '.txt-stroke': {
          'color': 'transparent',
          '-webkit-text-stroke': '2px white',
          'font-family': 'sans-serif'
        },
        '.img-animation': {
          'animation': 'img-effect 4s infinite',
          'animation-timing-function': 'ease-in-out'
        },
        '.space-clutter': {
          'animation': 'clutter-animation 5s infinite'
        },
        '.xplr-btn': {
          'border': '1px solid white',
          'color': 'transparent',
          'padding': '12px 22px',
          'font-size': '1.2em',
          'transition': 'all .2s ease-in-out',
          'box-shadow': '0 0 0 100px inset, 0 0 5px grey'
        },
        '.rotating-brdr': {
          'position': 'relative',
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'width': 'fit-content',
          'background': 'linear-gradient(#d300ff, #8c1eff)',
          'background-clip': 'padding-box',
          'color': 'white',
          'font-size': '1.2rem',
          'font-weight': '600',
          'padding': '12px 24px',
          'cursor': 'pointer',
          'border': '2px solid transparent',
          'border-radius': '19px',
          'text-decoration': 'none',
          'overflow': 'hidden',
          'z-index': '0',
          'transition': 'border-color 0.3s ease',
          'box-shadow': 'rgba(103, 0, 255, 0.4) 0px 10px 60px 0px'
        },
        '.rotating-brdr-bef': {
          'content': '""',
          'position': 'absolute',
          'z-index': '-2',
          'left': '-20%',
          'top': '30%',
          'width': '150%',
          'height': '60%',
          'background-color': 'white',
          'background-repeat': 'no-repeat',
          'background-size': '100% 100%, 50% 50%',
          'background-position': '0 0, 100% 0, 100% 100%, 0 100%',
          'animation': 'border-rotate 3s infinite linear'
        },
        '.rotating-brdr-aft': {
          'content': '""',
          'position': 'absolute',
          'left': '1px',
          'top': '1px',
          'width': 'calc(100% - 2px)',
          'height': 'calc(100% - 2px)',
          'background': 'linear-gradient(#d300ff, #8c1eff)',
          'border-radius': '19px'
        },
        /*Animations*/
        '.fly-in-from-right': {
          'animation': 'fly-in-from-right 1000ms ease-out'
        },
        '.fly-in-from-right-300': {
          'animation': 'fly-in-from-right-500 1000ms ease-out'          
        },
        '.fly-in-from-left-200': {
          'animation': 'fly-in-from-left-200 1000ms ease-out'
        },
        '.fly-in-from-top': {
          'animation': 'fly-in-from-top 1000ms ease-out'
        },
        '.fly-in-from-bottom': {
          'animation': 'fly-in-from-bottom 1000ms ease-out'
        },
        '.bar':{
          'transition': 'transform .3s ease'
        },
        '.bar1.opened': {
          'transform': 'translateY(6px) rotate(45deg)'
        },
        '.bar2.opened': {
          'transform': 'translateY(-10px) rotate(-45deg)'
        },
        /*Section control*/
        '.section-display.flex-display': {
          'display': 'block'
        },
        '.intro': {
          'animation': 'fadeIn 100ms ease-in-out'
        },
        '.outro': {
          'animation': 'fadeOut 100ms ease-in-out'
        },
        /*Mobile menu fix*/
        '.menu-container': {
          'position': 'absolute',
          'right': '0',
          'width': '20%',
          'background': '#8700a3',
          'z-index': '10',
          'height': 'fit-content',
          'border-radius': '8px',
          'font-size': '1.2rem',
          'border': '1px solid #d300ff',
          'min-width': '110px'
        }
      })
    })
  ],
}
