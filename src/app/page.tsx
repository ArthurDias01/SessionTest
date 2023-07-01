import { MainSection } from '@/components/MainSection'
import { transformData } from '../lib/transform'
import data from '../mock/data.json'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { SecondarySection } from '@/components/SecondarySection';

export default function Home() {


  const transformedData = transformData(data);


  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-12 gap-8">
      <section className="flex flex-col w-1/2 justify-center items-center gap-8">
        Wanna try your own data?
        <Link href="/test">
          <Button variant="outline">Try my data</Button>
        </Link>
      </section>
      <MainSection>
        <SecondarySection>
          <h2>Example Input:</h2>
          <pre>
            <code className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 font-bold">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        </SecondarySection>
        <SecondarySection>
          <h2>Example Output:</h2>
          <pre>
            <code className="text-slate-800 dark:text-white font-bold">
              {JSON.stringify(transformedData, null, 2)}
            </code>
          </pre>
        </SecondarySection>
      </MainSection>
    </main>
  )
}
