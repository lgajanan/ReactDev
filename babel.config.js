module.exports = {
    presets: [
    ['@babel/preset-env',   {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime:'automatic'}],
  ],};

  // why use presets: 
  // this presets helps babel jsx code into html so that can read properly. 