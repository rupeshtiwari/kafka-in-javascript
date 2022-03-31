import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`localhost:9092`],
});

const producer = kafka.producer();
await producer.connect();
await producer.send({
  topic: 'test-topic',
  messages: createMessages(),
});

function createMessages() {
  const messages = [];
  for (let key = 0; key < 100; key++) {
    const value = `Rupesh Learning Kafka ${key}`;
    messages.push({
      key: key.toString(),
      value,
    });
  }

  return messages;
}

await producer.disconnect();
console.log(`message produced`);
