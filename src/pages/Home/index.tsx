import React, { FC } from 'react'
import { firestore } from "@/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Home: FC = () => {
  interface IChatMessages {
    text: string
  }

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData<IChatMessages>(query, { idField: 'id' });

  return (
    <div>
      Home <button >Click</button>
    </div>
  )
}

export default Home
