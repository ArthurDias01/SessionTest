
import { FormProvider } from '../../contexts/form-context';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  )
}
