# Type of testing
- unit Testing
- Integration Testing
- End to End Testing - e2e testing

# setting up testing in our app
- Install react testing library (npm i -D  @testing-library/react)
- Install jest (npm i -D jest)
- Install Babel Dependencies ( npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure babel (create file and paste code: babel.config.js)
- Configure Parcel Config file to disable default babel transpilation (create file and config :-  .parcelrc)
- Jest Configuration (npx jest --init)will ask for some question 
- jsdom enviornment - :  npm i -D jest-environment-jsdom
- (use vscode icon extention for icons)
- Install -D @babel/preset-react - to make  JSX work in test case.
- config babel preset in babel file  (   
      ['@babel/preset-env',   {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime:'automatic'}], )