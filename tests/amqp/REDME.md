### AMQP Interface Tests
The tracer has been implemented into adapters 1 and 2 (**adp1** and **adp2**).

The adp1 reads the messages from "**data1**" queue, create or transporte the trace id into message's data to the queue "**data2**", that is readed from adp2, that just prints the trace id.

#### Infra
- **RabbitMq**: This server is dockerized into file "**tests/docker-compose.rabbit.yml**".
Run command: "docker-compose -f docker-compose.rabbit.yml up --build -d"

#### Adapters
- **adp1** 
- **adp2**

Run command: "**node {adpName}/main.js**"
F.I: **node adp1/main.js**

To manage the topics access the rabbitmq manager: **http://localhost:15672/**

IMPORTANT: Each adp has its only **package.json**, so it should be installed to run the MSs.

#### Publisher

An AMQP publisher that publish multiple times a data to a topic.

Parameters:
- **queue**: The queue to send the data. defatult: "data1".
- **sents**: Times to send the data for the queue. default: 5.
- **data**: Data send to queue.

IMPORTANT: The "**x-trace-id**" property reffers to the trace id, if filled, the tracer will uses it.

Run command: "**node requester/publisher.js**"