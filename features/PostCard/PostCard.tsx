import { Card } from "@/components/Card";
import Image from "next/image";

export const PostCard = () => {
  return (
    <Card className="p-3 rounded">
      <Card.Header>
        <div className="font-bold text-xl mb-2 flex justify-between items-center">
          <div className="flex items-center">
            <Image className="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/id/237/50/50" alt="Avatar of Drake Surach" width={50} height={50} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Drake Surach</p>
              <p className="text-gray-600">Jul &apos;23 in General 🌐</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">Getting Started ✔️</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <p className="text-gray-700 text-base mb-4">
          Welcome to the ChatGPT Mastery course and community! Watch the video below to learn how to navigate around and get started!
        </p>
      </Card.Body>
      <Card.Footer className="flex items-center gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">👍 35</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">💬 18</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Last comment 9d ago</span>
      </Card.Footer>
    </Card>
  )
}