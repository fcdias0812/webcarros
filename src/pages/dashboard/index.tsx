import { useState, useEffect, useContext } from "react";
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/dashboardheader";
import { FiTrash2 } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs, where, query } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";

interface CarsProps {
  id: string;
  name: string;
  year: string;
  price: string | number;
  city: string;
  km: string;
  images: ImageCarProps[];
  uid: string;
}

interface ImageCarProps {
  name: string;
  uid: string;
  url: string;
}

export function Dashboard() {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState<CarsProps[]>([]);

  useEffect(() => {
    function loadCars() {
      if (!user?.uid) {
        return;
      }

      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, where("uid", "==", user.uid));

      getDocs(queryRef)
        .then((snapshot) => {
          let listcars = [] as CarsProps[];

          snapshot.forEach((doc) => {
            listcars.push({
              id: doc.id,
              name: doc.data().name,
              year: doc.data().year,
              km: doc.data().km,
              city: doc.data().city,
              price: doc.data().price,
              images: doc.data().images,
              uid: doc.data().uid,
            });
          });

          setCars(listcars);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadCars();
  }, [user]);

  return (
    <Container>
      <DashboardHeader />

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg relative">
          <button
            onClick={() => {}}
            className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 cursor-pointer drop-shadow"
          >
            <FiTrash2 size={26} color="#000" />
          </button>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webcarros-32ff4.firebasestorage.app/o/images%2Fy1FsEqxjIDTnCjH2OxUAkzKLgEn1%2Fb245606b-6f13-4bfc-a7fb-6375ad039fa7?alt=media&token=2adc31d1-73b4-4a69-9f41-ebd158f7bf3d"
            alt="Foto do carro"
            className="w-full rounded-lg mb-2 max-h-70"
          />
          <p className="font-bold mt-1 px-2 mb-2">Mercedez</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700">Ano: 2016/2016 | 230.000 km</span>
            <strong className="text-black font-bold mt-4">R$ 150.000</strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-black">Indaiatuba - SP</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
