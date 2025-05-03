import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/dashboardheader";
import { FiUpload } from "react-icons/fi";

export function New() {
  return (
    <Container>
      <DashboardHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button className="border-2 border-zinc-600 w-48 rounded-lg flex items-center justify-center cursor-pointer h-32">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 cursor-pointer"
            />
          </div>
        </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <h1>Teste</h1>
      </div>
    </Container>
  );
}
