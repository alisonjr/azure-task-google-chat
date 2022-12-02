# Project

This project is a Task for Azure Pipelines.
Link for marketplace https://marketplace.visualstudio.com/items?itemName=AlisonRodrigues.google-chat

## Features

Now only feature thats exists is a WebHook.

## How to use?

- Acess the google chat app (https://mail.google.com/chat)

- Select the chat

- Open the chat option and select Manager wekhooks
![select chat](/images/select-chat.png "select chat")

- Put the name of your hook and the icon. After click on 'Save'
![create webhook](/images/new-hook.png "create webhook")

- Get the webhook url. you need this address
![get url](/images/get-webhook-url.png "get url")

- install this extension on your organization on Azure devops

- Add this extension on the pipeline. And put the webhook url and your message
![config task](/images/az-configure-task.png "config task")
