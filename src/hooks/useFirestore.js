import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase.utils";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
