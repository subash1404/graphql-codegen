import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { request, gql } from 'graphql-request';
const fs = require('fs');

const SCHEMA_URL = 'http://localhost:8088/accounts/api';

const HEADERS = {
    'x-csrf-token': 'TApfHsbiUi7RDGL72XLYPA==',
    'CustomerSubDomain': 'msp4375760122658275328',
    'Content-Type': 'application/json',
    'Cookie': 'CustomerSubDomain=msp4375760122658275328; app-csrf=TApfHsbiUi7RDGL72XLYPA==; app-token=NlJlNUVRY1I3VW4wUWxjYWVLYmZ3ZyUzRCUzRA; uitoken=4375760120158470144',
  };
  

async function generateOps() {
  const introspection = await request({
    url: SCHEMA_URL,
    document: getIntrospectionQuery(),
    requestHeaders: HEADERS,
  }) as IntrospectionQuery;

  const schema = buildClientSchema(introspection);
  const printedSchema = printSchema(schema);

  fs.writeFileSync('./schema.graphql', printedSchema);
  console.log('✅ Schema written to schema.graphql');
}

generateOps();
