
import { FormProvider } from '../../contexts/form-context';



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <FormProvider>
        {children}
      </FormProvider>
    </section>
  )
}
