import './globals.css';
import AuthSessionProvider from './providers/SessionProvider';


export const metadata = {
  title: 'My NextAuth App',
  description: 'Authentication example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
