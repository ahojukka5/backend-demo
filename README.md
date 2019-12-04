# backend-demo.js

[![][travis-img]][travis-url]
[![][coveralls-img]][coveralls-url]

This is a short demo experimenting what is a best way to setup CI/CD/docs for
Node/Express backend. Backend is continuously deployed to Heroku, and can
accessed from address

    http://backend-demo-production.herokuapp.com

API root url is `/api/`. For example:

    http://backend-demo-production.herokuapp.com/api/testing/123

should return you `{ id: "123" }`.

[travis-img]: https://travis-ci.org/ahojukka5/backend-demo.svg?branch=master
[travis-url]: https://travis-ci.org/ahojukka5/backend-demo
[coveralls-img]: https://coveralls.io/repos/github/ahojukka5/backend-demo/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ahojukka5/backend-demo?branch=master
