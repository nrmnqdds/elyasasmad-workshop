import { NextResponse } from "next/server";

const contentExampleArray = [
  {
    name: "Elon Ma",
    username: "@yelon.ma",
    photoURL:
      "https://i1.sndcdn.com/avatars-XpzN0ujJa3iI96PS-hKizHQ-t500x500.jpg",
    content:
      "Just had a blast at the Full-Stack Fusion mobile app workshop in IIUM! 🚀💻 It's incredible to see so much talent and innovation in one room. Keep pushing the boundaries of what's possible! 🔥 #FullStackFusion #Innovation #MobileApps",
    createdAt: "19 mins",
    data: {
      likes: 8012,
      reposts: 5001,
      comments: 600,
    },
  },
  {
    name: "Bill Gates",
    username: "@bill",
    photoURL:
      "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg",
    content:
      "Thrilled to be a part of the Full-Stack Fusion mobile app workshop. The energy and creativity here are inspiring. These young developers are the future of technology, and I'm excited to see the innovation they'll bring to the world. 🌐💡 #FullStackFusion #Innovation #TechFuture",
    createdAt: "3 hrs",
    data: {
      likes: 2500,
      reposts: 500,
      comments: 100,
    },
  },
  {
    name: "Hakim Nazry",
    username: "@hakim.nazry",
    photoURL: "https://randomuser.me/api/portraits/men/80.jpg",
    content: "Full-stack fusion is fun! I'm glad everyone likes it. 🗿",
    createdAt: "Yesterday",
    data: {
      likes: 250,
      reposts: 100,
      comments: 50,
    },
  },
];

export async function GET(req: Request) {
  return NextResponse.json(contentExampleArray);
}
