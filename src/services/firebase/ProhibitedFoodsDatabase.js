import { firestore } from "./firebase";

const ProhibitedFoodsDb = firestore.collection("/ProhibitedFoods");
class ProhibitedFoodsDataService {
  getAll() {
    return ProhibitedFoodsDb.orderBy("name");
  }
  create(data) {
    return ProhibitedFoodsDb.add(data);
  }
  update(id, data) {
    return ProhibitedFoodsDb.doc(id).update(data);
  }
  delete(id) {
    return ProhibitedFoodsDb.doc(id).delete();
  }
}

export default new ProhibitedFoodsDataService();
