import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col w-3/5">
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>Card Body</Card.Body>
            <Card.Footer className="px-6 pt-4 pb-2">
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
