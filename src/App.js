import Header from "./components/Layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSessionUpdate } from "./hooks/useSession";

export default function App() {
  const setState = useSessionUpdate()

  setState({ films: [], people: [], ships: [] })

  return (
    <>
      <Header></Header>
    </>
  );
}