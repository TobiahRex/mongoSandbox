# _Mongo Sandbox:_
Created: 28 June 2017

## DESCRIPTION:
Collection of useful docs and ref material w/respect to Mongo & Mongoose.

## **lambdaMongoConnection.js**
- verifyDb is intended to be called from the initial **handler** function.
- Shows how to persist a mongo db connection over multiple lambda invocations.  Imports are model functions, the expect the connection instance to create their respective models.

## **mongoose.connection.js**
- Shows output from calling _mongoose.createConnection()_.
