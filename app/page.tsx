import Image from "next/image";
import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col w-3/5 p-3">
          <Card>
            <Card.Header>
              <div className="font-bold text-xl mb-2 flex justify-between items-center">
                <div className="flex items-center">
                  <Image className="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/id/237/50/50" alt="Avatar of Drake Surach" width={50} height={50} />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">Drake Surach</p>
                      <p className="text-gray-600">Jul '23 in General 🌐</p>
                    </div>
                </div>
                <div className="flex items-center">
                  <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">Getting Started ✔️</span>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="px-3">
              <p className="text-gray-700 text-base mb-4">
                Welcome to the ChatGPT Mastery course and community! Watch the video below to learn how to navigate around and get started!
              </p>
            </Card.Body>
            <Card.Footer className="px-3 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">👍 35</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">💬 18</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Last comment 9d ago</span>
            </Card.Footer>
          </Card>
        </div>
        <div className="right-col w-2/5">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
