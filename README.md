
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

## prerequisites 

use nodejs 16.X as 18 has SSL issues:
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported


```bash
npm install
```

## Run

```bash
npm run start
```

## eslint
```bash
npm run lint
```

## Build

```bash
npm run build
```

## Deploy
For deploy app:
  1. run app
  2. run eslint
  3. build app
  4. delete old bandle in [S3] (s3://LISAadp-logicbucket-iwc74fxi23ar/public/)
  5. upload new bandle to [S3] (s3://LISAadp-logicbucket-iwc74fxi23ar/public/)
  6. go to [website](https://iimw521s71.execute-api.ap-southeast-2.amazonaws.com/V3/HTTP/S3/LB/public/index.html) 