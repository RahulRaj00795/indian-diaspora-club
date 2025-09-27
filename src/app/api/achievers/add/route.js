
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, description } = await request.json();
    const docRef = await addDoc(collection(db, 'achievers'), {
      name,
      description,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error('Error adding achiever:', error);
    return new NextResponse('Failed to add achiever', { status: 500 });
  }
}
