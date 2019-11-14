import { useEffect, useState } from "react";
import DB from "db";

const useRead = () => {
  const [lists, setLists] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const read = async () => {
    setLoading(true);
    const snapshot = await DB.collection("posts").get();
    let fetchList: any[] = [];
    snapshot.forEach(doc => {
      fetchList.push(doc.data());
      console.log(doc.data());
    });
    setLists(fetchList);
    setLoading(false);
  };

  useEffect(() => {
    read();
  }, []);
  return { lists, isLoading, read };
};

export default useRead;
