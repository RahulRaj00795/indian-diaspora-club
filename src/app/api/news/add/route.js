
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { title, description, image, link } = await request.json();
    const docRef = await addDoc(collection(db, 'news'), {
      title,
      description,
      image,
      link,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error('Error adding news:', error);
    return new NextResponse('Failed to add news', { status: 500 });
  }
}
