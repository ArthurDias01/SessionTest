import { MainSection } from '@/components/MainSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { SecondarySection } from '@/components/SecondarySection';
import { TransformedData } from '@/components/TransformedData';
import { Input } from '@/components/Forms/Input';
import { ResetInputButton } from '@/components/ResetInputButton';

export default function Test() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-12 gap-8">
      <section className="flex flex-col w-1/2 justify-center items-center gap-8">
        Wanna try your own data?
        <Link href="/test">
          <Button variant="outline">Try my data</Button>
        </Link>
      </section>
      <article className="flex flex-col justify-center items-center gap-8 w-full">
        <MainSection>
          <SecondarySection>
            <h2>Place Your Input:</h2>
            <pre>
              <Input />
            </pre>
          </SecondarySection>
          <SecondarySection>
            <h2>OUTPUT:</h2>
            <pre>
              <TransformedData />
            </pre>
          </SecondarySection>
        </MainSection>
        <ResetInputButton />
      </article>
    </main>
  )
}
