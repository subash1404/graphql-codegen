const express = require('express');
const { GraphQLClient } = require('graphql-request');
const { GetAllMailboxesDocument, GetAllEmployeesDocument } = require('../../dist/generated/graphql');


const app = express();
const PORT = 3000;

// GraphQL Client
const client = new GraphQLClient('http://localhost:8088/accounts/api', {
  headers: {
    'x-csrf-token': 'DCaQU938AsB3k2fdHV2PPA==',
    'CustomerSubDomain': 'msp4375760122658275328',
    'Content-Type': 'application/json',
    'Cookie': 'CustomerSubDomain=msp4375760122658275328; app-csrf=DCaQU938AsB3k2fdHV2PPA==; app-token=VW8yeE9hSGp6ZnJ2YkFpUlhKY1ZldyUzRCUzRA; uitoken=4375760120158470144'
  },
});

const variables = {
  isClientMailbox: true,
  isMSPProduct: false,
};

// REST endpoint
app.get('/employees', async (req, res) => {
  try {
    const data = await client.request(GetAllEmployeesDocument);
    res.json(data.getAllEmployees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

app.get('/box', async (req, res) => {
  try {
    const data = await client.request(GetAllMailboxesDocument, variables);
    res.json(data.getMailboxes);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
