import { firestore } from "./firebase";
const PreparationTipsDb = firestore.collection("/PreparationTips");
class PreparationTipsDataService {
  getAll() {
    return PreparationTipsDb.orderBy("name");
  }
  create(data) {
    return PreparationTipsDb.add(data);
  }
  update(id, data) {
    return PreparationTipsDb.doc(id).update(data);
  }
  delete(id) {
    return PreparationTipsDb.doc(id).delete();
  }
}

export default new PreparationTipsDataService();
