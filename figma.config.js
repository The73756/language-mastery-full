/**
 * @type {import('@neodx/figma').Configuration}
 */
module.exports = {
  export: {
    fileId:
      'https://www.figma.com/file/vbFmBrSj32JkDU6qicI5r6/%D0%AF%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0?type=design&node-id=104-1255&mode=design&t=Vi1RrmhONCPrUWwK-0',
    output: 'assets/icons',
    collect: {
      target: [
        {
          // First of all - select the "Icons" page
          type: 'CANVAS',
          filter: 'Icons',
        },
        {
          // Then select all components with names that starts with "32/"
          type: 'COMPONENT',
        },
      ],
    },
  },
}
