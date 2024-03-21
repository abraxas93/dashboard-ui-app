import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col">
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>Card Body</Card.Body>
            <Card.Footer>Card Footer</Card.Footer>
          </Card>
        </div>
        <div className="right-col">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
