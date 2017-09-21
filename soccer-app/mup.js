module.exports = {
  servers: {
    one: {
      host: 'ec2-13-59-193-29.us-east-2.compute.amazonaws.com',
      username: 'ubuntu',
      pem: '/Users/vigneshnadar/Documents/aws loft/deeplearningawsloft.pem'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },
meteor: {
    name: 'soccer-app',
    path: '/Users/vigneshnadar/Documents/Football-Scheduler/soccer-app',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://thedomain.com',
      MONGO_URL: 'mongodb://localhost/27017'
    },
    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
    },
    deployCheckWaitTime: 60
  },
mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
