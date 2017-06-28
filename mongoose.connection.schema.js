NativeConnection {
  base:
  Mongoose {
    connections: [ [Object], [Circular] ],
    models: {},
    modelSchemas: { Product: [Object], User: [Object] },
    options: { pluralization: true }
  },
  collections: {
    products:
    NativeCollection {
      collection: [Object],
      opts: [Object],
      name: 'products',
      collectionName: 'products',
      conn: [Circular],
      queue: [],
      buffer: false,
      emitter: [Object]
    },
    users:
    NativeCollection {
      collection: [Object],
      opts: [Object],
      name: 'users',
      collectionName: 'users',
      conn: [Circular],
      queue: [],
      buffer: false,
      emitter: [Object]
    }
  },
  models: {
    Product: {
      [Function: model]
      hooks: [Object],
      base: [Object],
      modelName: 'Product',
      model: [Function: model],
      db: [Circular],
      discriminators: undefined,
      findProductsByFlavor: [Function],
      fetchMultiple: [Function],
      findProductByIdAndDelete: [Function],
      createProduct: [Function],
      findProductById: [Function],
      findProductAndUpdate: [Function],
      getPopularProducts: [Function],
      _events: [Object],
      _eventsCount: 2,
      schema: [Object],
      collection: [Object],
      Query: [Object],
      '$__insertMany': [Function],
      insertMany: [Function]
    },
    User: {
      [Function: model]
      hooks: [Object],
      base: [Object],
      modelName: 'User',
      model: [Function: model],
      db: [Circular],
      discriminators: undefined,
      fetchUserProfile: [Function],
      loginOrRegister: [Function],
      loginUser: [Function],
      registerUser: [Function],
      addToMemberCart: [Function],
      deleteFromCart: [Function],
      editToMemberCart: [Function],
      _events: [Object],
      _eventsCount: 2,
      schema: [Object],
      collection: [Object],
      Query: [Object],
      '$__insertMany': [Function],
      insertMany: [Function]
    }
  },
  config: { autoIndex: true },
  replica: true,
  hosts: [
    {
      host: 'stackinet-cluster-shard-00-00-wqafo.mongodb.net',
      port: 27017
    }, {
      host: 'stackinet-cluster-shard-00-01-wqafo.mongodb.net',
      port: 27017
    }, {
      host: 'stackinet-cluster-shard-00-02-wqafo.mongodb.net',
      port: 27017
    }
  ],
  host: null,
  port: null,
  user: 'stackinet',
  pass: 'odV9WmWq1Tm752KO',
  name: 'nj2jp-development',
  options: {
    db: {
      forceServerObjectId: false, w: 1
    },
    auth: { authSource: 'admin' },
    server: { socketOptions: {}, ssl: true, auto_reconnect: true },
    replset:
    { socketOptions: {},
    ssl: true,
    rs_name: 'stackinet-cluster-shard-0' },
    mongos: undefined
  },
  otherDbs: [],
  _readyState: 1,
  _closeCalled: false,
  _hasOpened: true,
  _listening: false,
  db:
  Db {
    domain: null,
    _events: {
      fullsetup: [Function],
      all: [Function],
      close: [Function],
      error: [Function],
      reconnect: [Function],
      timeout: [Function],
      open: [Function],
      parseError: [Function]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    s:
    { databaseName: 'nj2jp-development',
    dbCache: {},
    children: [],
    topology: [Object],
    options: [Object],
    logger: [Object],
    bson: BSON {},
    authSource: undefined,
    readPreference: undefined,
    bufferMaxEntries: -1,
    parentDb: null,
    pkFactory: undefined,
    nativeParser: undefined,
    promiseLibrary: [Function: Promise],
    noListener: false,
    readConcern: undefined },
    serverConfig: [Getter],
    bufferMaxEntries: [Getter],
    databaseName: [Getter],
    _listening: true
  }
}
