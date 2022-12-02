
async function run() {

  const tl = require('azure-pipelines-task-lib/task');
  try {

    const webhookurl = tl.getInput('webhookurl', true);
    const message = tl.getInput('message', true);

    const axios = require('axios');
    const data = JSON.stringify({ 'text': message });
    let resp;

    try {
      resp = await axios.post(webhookurl, data, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      })
      
      console.log(resp);

      tl.setResult(tl.TaskResult.Succeeded, '🎉 The message has been sent');
      

    } catch (error) {
      console.log(error);
      tl.setResult(tl.TaskResult.Failed, JSON.stringify(error));
    }

    return resp;

  }
  catch (err) {
    console.log(err);
    tl.setResult(tl.TaskResult.Failed, JSON.stringify(err));
  }
}

run();