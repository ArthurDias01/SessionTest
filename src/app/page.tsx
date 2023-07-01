import { MainSection } from '@/components/MainSection'
import { transformData } from '../lib/transform'
import data from '../mock/data.json'
import { SecondarySection } from '@/components/SecondarySection';
import { HeroButton } from '@/components/HeroButton';
import { HeroTitle } from '@/components/HeroTitle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {


  const transformedData = transformData(data);


  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-[5%] md:px-24 py-12 gap-8">
      <section className="flex flex-col w-1/2 justify-center items-center gap-8">
        <HeroTitle />
        <HeroButton />
        <Link href="https://github.com/ArthurDias01/SessionTest">
          <Button variant="link">
            Visit source code
          </Button>
        </Link>
      </section>
      <MainSection>
        <SecondarySection>
          <h3>Example Input:</h3>
          <pre className="overflow-auto">
            <code className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 font-bold
            dark:bg-gradient-to-r dark:from-blue-400 dark:to-emerald-400
            ">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        </SecondarySection>
        <SecondarySection>
          <h3>Example Output:</h3>
          <pre className="overflow-auto">
            <code className="text-slate-800 dark:text-white font-bold">
              {JSON.stringify(transformedData, null, 2)}
            </code>
          </pre>
        </SecondarySection>
      </MainSection>
    </main>
  )
}
