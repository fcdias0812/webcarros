import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import toast from "react-hot-toast";

export function DashboardHeader() {
  async function handleLogout() {
    await signOut(auth);
    toast.error("Usuário deslogado.");
  }

  return (
    <div className="w-full items-center flex h-10 bg-red-500 rounded-lg text-white font-medium gap-4 px-4 mb-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/new">Cadastrar novo carro</Link>

      <button onClick={handleLogout} className="ml-auto cursor-pointer">
        Sair da conta
      </button>
    </div>
  );
}
