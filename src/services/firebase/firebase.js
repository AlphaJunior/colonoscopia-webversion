import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_9aievOBXES7_hpv3jC95u4n_67hiYak",
  authDomain: "alphacolonoscopia.firebaseapp.com",
  projectId: "alphacolonoscopia",
  storageBucket: "alphacolonoscopia.appspot.com",
  messagingSenderId: "559926114661",
  appId: "1:559926114661:web:df993c863f5154c673098c",
  measurementId: "G-533FW1MXQL",
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = firebase.firestore();

/*
class Firebase{
  constructor(){
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

//login
  async login(email,password){
    const user = await firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .catch( err=>{
      console.log(err);
      return err;
    })
    return user;
  }

//singin
  async signin(email, password){
    const user = await firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch( err=>{
      console.log(err);
      return err;
    })
    return user;
  }
//logout
 
 async logout(){
   firebase.auth().signOut().catch(err=>{
     console.error(err.message)
   })
 }

 isInitialized(){
   return new Promise(resolve =>{
     this.auth.onAuthStateChanged(resolve)
   })
 }


 //conecta cm as coleções la necessarias de dados.
 //crud remedio
 //crud dieta
 //crud n sei mais oq
}


export default new Firebase();

*/
