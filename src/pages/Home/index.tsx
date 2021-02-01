import React, { FC } from 'react'
import { firestore } from "@/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Layout from '@/components/Layout'
const Home: FC = () => {
  interface IChatMessages {
    text: string
  }

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData<IChatMessages>(query, { idField: 'id' });


console.log(messages);

  return (
    <Layout>
      Home <button >Click</button>
    </Layout>
  )
}

export default Home
