import { useState } from "react";
import DB from "db";

const useRead = () => {
  const [isLoading, setLoading] = useState(false);
  const handleWrite = async ({
    title,
    body
  }: {
    title: string;
    body: string;
  }) => {
    setLoading(true);
    try {
      await DB.collection("posts").add({ title, body });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
    setLoading(false);
  };
  return { handleWrite, isLoading };
};

export default useRead;
