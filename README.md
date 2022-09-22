# Ngen Movie Viewer
Most of us can relate to kicking back on the couch and enjoying a movie with friends and family. This project is bootstrapped with Create-React-App, Express and MUI.

## Development Environment
1. server end (port 3000)
```
$ cd server
$ yarn
$ yarn start
```
2. client end (port 8000)
```
$ cd client
$ yarn
$ yarn start
```
`localhost:8000 will be opened`

## Production Environment
cause the time limit, I did not do this. the approximate method is following:
1. `yarn build` in client end
2. in `server/index.js` add something like this:
```js
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
```
