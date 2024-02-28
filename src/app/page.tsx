import { Button } from '@/components/Button';

export default function HomePage() {
  return <>
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9">
      <div>
        Content 1


        <Button>Download CV</Button>
      </div>
      <div>
        Content 2
      </div>
    </section>
  </>;
}
