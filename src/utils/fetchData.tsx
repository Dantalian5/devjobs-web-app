import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import type { Job } from '@/types/jobs';

// Fetch data from local server
export async function fetchDatafromServer() {
  try {
    const res = await fetch('http://192.168.1.101:5000/jobs');
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('res.status');
    }
  } catch (error) {
    return 'error';
  }
}
// Fetch data from firebase server
export async function fetchDatafromFirestore() {
  try {
    const res = await getDocs(collection(db, 'jobs'));
    const data: Job[] = [];
    res.forEach((doc) => {
      data.push(doc.data() as Job);
    });
    return data;
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
  }
}
