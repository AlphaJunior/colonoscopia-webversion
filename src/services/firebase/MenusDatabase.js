import { firestore } from "./firebase";
const MenuDb = firestore.collection("/Menus");
class MenusDataService {
  getAll() {
    return MenuDb.orderBy("name");
  }
  create(data) {
    return MenuDb.add(data);
  }
  update(id, data) {
    return MenuDb.doc(id).update(data);
  }
  delete(id) {
    return MenuDb.doc(id).delete();
  }
}
export default new MenusDataService();
