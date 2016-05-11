# Fantasy Football Fanatic

A website that provides an aggregation of current fantasy football news for any given player

Currently not deployed. If you'd like to try it right now, follow instructions below:

## Getting Started

```
$ git clone https://github.com/eazy-g/Fantasy-Football-Fanatic.git test-site
$ cd test-site
$ npm install
$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

The only acceptable names at this time are:

'Rob Gronkowski', 'LeSean McCoy', 'Aaron Rodgers', 'Antonio Gates'

...spelled exactly as shown. Only four names are acceptable right now because the main website I am pulling news from requires a specific url for every player, and I did not want to waste time hard coding hundreds of different player urls. This is solely a proof of concept at this point :) There is no error handling yet either, hence the required exact spelling. And also close to no css. 
