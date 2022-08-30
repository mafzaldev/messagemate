import ChatRoom from "./components/ChatRoom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import Credits from "./components/Credits";

const styles = {
  container: `max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[100vh] bg-gray-100 shadow-xl relative bg-[#231834]`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Navbar />
        {user ? <ChatRoom /> : <div className="m-auto">{<SignIn />}</div>}
        {!user && <Credits />}
      </section>
    </div>
  );
}

export default App;
