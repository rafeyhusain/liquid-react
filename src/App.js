import Header from "./components/Layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import { SessionProvider } from "./hooks/useSession";

export default function App() {
  return (
    <>
      <SessionProvider>
        <Header></Header>
      </SessionProvider>
    </>
  );
}