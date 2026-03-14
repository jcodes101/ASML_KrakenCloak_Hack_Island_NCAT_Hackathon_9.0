import { Link } from 'react-router-dom';
import asmlLogo from '../assets/asml_logo.png';
import SignUp_Background from '../components/signUpPage_components/SignUp_Background';
import SignUp_Card from '../components/signUpPage_components/SignUp_Card';
import Utility_Footer from '../components/loginPage_components/Utility_Footer';

function SignUpPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen relative overflow-hidden">
      <SignUp_Background />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex justify-center pt-6 pb-2 shrink-0">
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            <img src={asmlLogo} alt="ASML - Home" className="h-20 w-auto object-contain" />
          </Link>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <SignUp_Card />
          <Utility_Footer />
        </main>
      </div>
    </div>
  );
}

export default SignUpPage;
