import Message from "../model/index.js";

class ContainerMongoDb {
  addMessage = async (messageToAdd) => {
    const message = new Message(messageToAdd);

    await message.save();
  };

  getMessages = async () => {
    const array = {
      id: "1",
      messages: [],
    };

    const messages = await Message.find({});

    messages.forEach((message) => {
      array.messages.push(message);
    });
    return array;
  };
}

const containerMongoDb = new ContainerMongoDb();

export default containerMongoDb;
