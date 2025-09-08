# qavajs
Demo of [Mobitru](https://mobitru.com/) integration
## Docs
https://qavajs.github.io/docs/intro

https://mobitru.com/docs/
## Install Modules
```bash
npm install
```

## Set environment variables
Create `.env` file and set following env variables
```dotenv
# Mobitru API key
MOBITRU_API_KEY=
# Mobitru project
MOBITRU_BILLING_UNIT=
# UDID of device to execute tests
MOBITRU_UDID=
```

## Execute Tests
Locally in browser
```bash
npm run test:web:local
```

Web on mobile browser 
```bash
npm run test:web:mobile:mobitru
```

Web on desktop browser
```bash
npm run test:web:desktop:mobitru
```

Native app on real mobile device
```bash
npm run test:native:mobile:mobitru
```

## Project Structure
- [config](./config.ts) - main config
- [features](./features) - test cases
- [memory](./memory) - test data
- [page_object](./page_object) - page objects
- [step_definition](./step_definition) - project specific step definitions
- [report](./report) - reports
