import containerMongoDb from "../controller/containerMongoDb.js";

class MongoDAO {
  addMessage = async (messageToAdd) => {
    try {
      await containerMongoDb.addMessage(messageToAdd);
    } catch (e) {
      console.log(e.message);
    }
  };

  getMessages = async () => {
    try {
      return (await containerMongoDb.getMessages()) || [];
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default MongoDAO;
