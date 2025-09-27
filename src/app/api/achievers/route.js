
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'achievers'));
    const achievers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return NextResponse.json(achievers);
  } catch (error) {
    console.error('Error fetching achievers:', error);
    return new NextResponse('Failed to fetch achievers', { status: 500 });
  }
}
