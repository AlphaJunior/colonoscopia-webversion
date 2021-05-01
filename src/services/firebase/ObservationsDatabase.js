import { firestore } from "./firebase";
const ObservationsDb = firestore.collection("/Observations");

class ObservationsDbDataService {
  getAll() {
    return ObservationsDb.orderBy("name");
  }
  create(data) {
    return ObservationsDb.add(data);
  }
  update(id, data) {
    return ObservationsDb.doc(id).update(data);
  }
  delete(id) {
    return ObservationsDb.doc(id).delete();
  }
}

export default new ObservationsDbDataService();
