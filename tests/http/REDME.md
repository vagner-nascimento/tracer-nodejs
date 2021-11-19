### HTTP Interface Tests
The tracer has been implemented into microsservices 1, 2, 3 and 4, that has only a **GET** route that returns **200** - **{ traceId: "the trace id" }**.

The **ms1** calls the **ms2**, that calls **ms3**. **ms1** also calls **ms4** after **ms2**.


#### Microsservices
- **ms1:** port 3000
- **ms2:** port 3001
- **ms3:** port 3002
- **ms4:** port 3003

Run command: "**node {msFolder}/main.js**"
F.I: **node ms1/main.js**

To call use the following URL: **http://localhost:{msPort}/**
F.I: **https://localhost:3000/**

IMPORTANT: Each ms has its only **package.json**, so it should be installed to run the MSs.


#### Requester
An axios rest client that fastly calls muiple times the **ms1** to validate if the trace id keeps the same in concurrent calls.

To run just install the depencies and rum the following command: "**node requester/requester.js**"

It will call **twice**, if you want to change it, just edit the **requester.js** file changing the constant "**calls**" (at line 4) to the desired calls that you want to test.