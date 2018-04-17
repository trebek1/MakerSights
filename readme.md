
To Run: npm install, npm start;

Compilation using webpack and babel-cli (Notes)
1). using babel-cli to get access to babel-node to compile webpack config and express config 

Frontend Environment
1). webpack dev defaults to localhost:8080

Eslint
1). if you want to fix a certain file then run --fix using the eslint ref from package.json
2). eslint is also setup as npm run lint for the src folder

Loading SCSS
1). Using ExtractTextPlugin to create standalone scss file 
2). Styles/base.scss must reference the scss file that is created 
3). styles.css is created by webpack and is referenced in index.html 
4). index.js references the scss file here: import './styles/base.scss';

Jest + Enzyme Unit testing
Packages: Jest:   jest babel-jest babel-preset-env babel-preset-react react-test-renderer
Packages: Enzyme: enzyme enzyme-adapter-react-16 enzyme-to-json
1). DOM Testing 
2). Run npm run test to start jest
3). Run npm run test:coverage to generate the coverage report 
4). Run npm run test:watch to watch for changes 

Snapshot testing not included but could be implemented 
5). I did not setup snapshot testing

