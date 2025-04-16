const express = require('express');
const { GraphQLClient } = require('graphql-request');
const { GetClientListDocument } = require('./graphql');


const app = express();
const PORT = 3000;

// GraphQL Client
const client = new GraphQLClient('http://localhost:8084/msp', {
    headers: {
      'CustomerSubDomain': 'msp4375760122658275328',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer api-eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0Mzc1NzYwMTI2MjA2NjU2NTEyIiwicmFuZG9taXplciI6Ilx1MDAxRTBcdTAwMDfvv71cdTAwMEbvv71cZu-_vUvvv70ifQ.J_jFEBHkeQ-_kMj6WYTCoA3tQRmjxITmMYeBR4QdwxSfvt4-Zh-Nw0hgK9eej0gX9qtbyRjLfr0biu2rFfB2K47fW5QdVzuomZGccyc201rkHhsMnx7il-O7i1VEkHJOEOCzMM6y6TCQucgQOyChvzXDznAajwAyej87L7NJ4K1V0QH-4Dcn-PjtU7EsLfwiVgEUfEZ9_bKkjQYNMp4hetIYlB-WSK79h5MsqK5RvqLHLg8LnDgUmZyjPlJL6mZ9ZvCcWx97UrZrDyrR2OPt4bzkTGHZ6Saqr23jzuErbm18rhRku2UxEYCC-ey9j92mvvEeLSpf8yBVMnnhSnaWSQ',
      'Cookie': 'CustomerSubDomain=msp4375760122658275328; JSESSIONID=3ECB53D5CBA77192CD0BE5D0DBD52879; app-csrf=eLZCfbseo314RnW6Uygu3A==; app-token=dTZhc1Z2RG04QVlQRnhxRGF3cnlqUSUzRCUzRA; uitoken=4375760120158470144'
    },
  });  
  const variables = {
    listInfo: {
      page: 1
    }
  };

// REST endpoint
app.get('/list', async (req, res) => {
  try {
    const data = await client.request(GetClientListDocument, variables);
    res.json(data.getClientList);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});