import ChatRoom from "./components/ChatRoom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const styles = {
  container: `bg-black max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[100vh] bg-gray-100 shadow-xl border relative`,
  credits: `font-bold  text-gray-900 pb-5`,
  username: `hover:underline`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Navbar />
        {user ? <ChatRoom /> : <div className="m-auto">{<SignIn />}</div>}
        {!user && (
          <div className={styles.credits}>
            Made with <span className="text-red-500">❤</span> by{" "}
            <a
              className={styles.username}
              href="https://github.com/mafzaldev"
              target={"_blank"}
            >
              @mafzaldev
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
