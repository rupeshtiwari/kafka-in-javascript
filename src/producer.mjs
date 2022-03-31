import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`localhost:9092`],
});

const producer = kafka.producer();
await producer.connect();
await producer.sendBatch({
  topic: 'test-topic',
  messages: createMessage(),
});

function createMessage() {
  const messages = [];
  for (let key = 0; key < 100; key++) {
    const message = `Hello KafkaJS user! ${key}`;
    messages.push({
      key,
      message,
    });
  }

  return messages;
}

await producer.disconnect();
console.log(`message produced`);
