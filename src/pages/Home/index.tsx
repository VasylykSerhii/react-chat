import React, { FC } from 'react'
import { firestore } from "@/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Home: FC = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
    <div>
      Home
      <button >Click</button>
    </div>
  )
}

export default Home
