import { firestore } from "./firebase";

const MedicineDb = firestore.collection("/Medicines");

class MedicinesDataService {
  getAll() {
    return MedicineDb.orderBy("name");
  }
  create(data) {
    return MedicineDb.add(data);
  }
  update(id, data) {
    return MedicineDb.doc(id).update(data);
  }
  delete(id) {
    return MedicineDb.doc(id).delete();
  }
}

export default new MedicinesDataService();
