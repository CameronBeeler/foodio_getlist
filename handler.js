'use strict';

exports.getList = (event, context, callback) => {
  const type = event.t_var;

  console.log('getList Lambda Method');
  if(type==='all')
  {
    console.log('input:all');
    callback(null, 'return all selected');
  }
  else if(type === 'single'){
    console.log('input:single');
    callback(null, 'return a single record');
  }
  else {
    console.log('input:');
    callback(null, 'Hello Cam, no event criteria defined');
  }
  /*
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
  */

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
