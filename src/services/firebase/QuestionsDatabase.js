import { firestore } from "./firebase";
const QuestionsDb = firestore.collection("/Questions");

class QuestionsDataService {
  getAll() {
    return QuestionsDb.orderBy("name");
  }
  create(data) {
    return QuestionsDb.add(data);
  }
  update(id, data) {
    return QuestionsDb.doc(id).update(data);
  }
  delete(id) {
    return QuestionsDb.doc(id).delete();
  }
}

export default new QuestionsDataService();
