import { firestore } from "./firebase";

const usersAvaliationsDb = firestore.collection("/Users");

class usersAvaliationsDataService {
  getAll() {
    return usersAvaliationsDb.orderBy("name");
  }
  create(data) {
    return usersAvaliationsDb.add(data);
  }
  update(id, data) {
    return usersAvaliationsDb.doc(id).update(data);
  }
  delete(id) {
    return usersAvaliationsDb.doc(id).delete();
  }
}

export default new usersAvaliationsDataService();
