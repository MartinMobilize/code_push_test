### Installation guide
[Instal react native](https://facebook.github.io/react-native/docs/getting-started.html)

React Native Navigation requires react native 0.37. To install an older version of react run
```
npm i -g rninit --source react-native@0.37
```

React native 0.37, requires react 15.3.1
```
npm uninstall react  --save
npm install react@15.3.1 --save

npm uninstall react-addons-shallow-compare --save
npm install react-addons-shallow-compare@15.3.1 --save
```



### Schema.js
We use [Normlizer](https://github.com/paularmstrong/normalizr) to normlize the data we receive from the server to store it in the redux way

