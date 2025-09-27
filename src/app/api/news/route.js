
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'news'));
    const news = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return new NextResponse('Failed to fetch news', { status: 500 });
  }
}
