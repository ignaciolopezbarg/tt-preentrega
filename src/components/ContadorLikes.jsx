import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Angry, Annoyed, Laugh } from "lucide-react";

function ContadorLikes() {
  // URL de MockAPI para guardar los contadores
  const API_URL = "https://686be2ca14219674dcc67d83.mockapi.io/likes";

  const [numeroAngry, setNumeroAngry] = useState(0);
  const [numeroAnnoyed, setNumeroAnnoyed] = useState(0);
  const [numeroLaugh, setNumeroLaugh] = useState(0);
  const [seleccionado, setSeleccionado] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar datos desde MockAPI al iniciar
  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Error al cargar datos: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Datos cargados:', data);
      
      data.forEach(item => {
        switch(item.type) {
          case 'angry':
            setNumeroAngry(item.count || 0);
            break;
          case 'annoyed':
            setNumeroAnnoyed(item.count || 0);
            break;
          case 'laugh':
            setNumeroLaugh(item.count || 0);
            break;
        }
      });
    } catch (error) {
      console.error('Error al cargar likes:', error);
      Swal.fire('Error', 'No se pudieron cargar los datos guardados', 'error');
    } finally {
      setLoading(false);
    }
  };

  const updateLikeInAPI = async (type, newCount) => {
    try {
      // Buscar el registro existente
      const response = await fetch(API_URL);
      const data = await response.json();
      const item = data.find(like => like.type === type);
      
      if (item && item.id) {
        // Actualizar registro existente
        await fetch(`${API_URL}/${item.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: type,
            count: newCount
          })
        });
        console.log(`${type} actualizado a ${newCount}`);
      } else {
        // Crear nuevo registro si no existe
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: type,
            count: newCount
          })
        });
        console.log(`${type} creado con valor ${newCount}`);
      }
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  const incrementar = async (contador) => {
    let newCount;
    let type;
    
    switch (contador) {
      case "Laugh":
        newCount = numeroLaugh + 1;
        setNumeroLaugh(newCount);
        type = 'laugh';
        break;
      case "Angry":
        newCount = numeroAngry + 1;
        setNumeroAngry(newCount);
        type = 'angry';
        break;
      case "Annoyed":
        newCount = numeroAnnoyed + 1;
        setNumeroAnnoyed(newCount);
        type = 'annoyed';
        break;
      default:
        return;
    }
    
    // Guardar en MockAPI
    await updateLikeInAPI(type, newCount);
  };

  const onPick = (contador, value) => {
    if (!seleccionado) {
      Swal.fire(
        "Gracias por su opinión, la misma nos ayuda a mejorar!",
        `Su valoración ${value}`,
        "success",
        { timer: 2000 }
      );
      incrementar(contador);
      setSeleccionado(true);
    } else {
      Swal.fire("No puede volver a elegir", "", "warning", { timer: 1000 });
    }
  };

  return (
    <div className="bg-slate-200 text-center p-4 sm:p-6 lg:p-8 rounded-lg">
      <section className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
        <p className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-800 text-center">
          Su Valoración es muy importante para nosotros, su opinión cuenta!
        </p>
        <p className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-600 text-center">
          ¿Cómo le resultó el uso de la página?
        </p>
      </section>

      {loading ? (
        <div className="text-center py-4">
          <p className="text-lg text-blue-600">Cargando contadores...</p>
        </div>
      ) : (
        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          <button onClick={() => onPick("Angry", 1)} className="transition-all duration-300 hover:transform hover:scale-105">
            <Angry
              size={80}
              className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-red-500 hover:scale-110 transition-transform mx-auto"
            />
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-5">
              <span className="font-semibold text-base sm:text-lg text-black">{numeroAngry}</span>
              <span className="font-semibold text-sm sm:text-base lg:text-lg text-black">Disconforme</span>
            </div>
          </button>
          <button onClick={() => onPick("Annoyed", 2)} className="transition-all duration-300 hover:transform hover:scale-105">
            <Annoyed
              size={80}
              className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-yellow-500 hover:scale-110 transition-transform mx-auto"
            />
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-5">
              <span className="font-semibold text-base sm:text-lg text-black">{numeroAnnoyed}</span>
              <span className="font-semibold text-sm sm:text-base lg:text-lg text-black">Conforme</span>
            </div>
          </button>
          <button onClick={() => onPick("Laugh", 3)} className="transition-all duration-300 hover:transform hover:scale-105">
            <Laugh
              size={80}
              className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-500 hover:scale-110 transition-transform mx-auto"
            />
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-5">
              <span className="font-semibold text-base sm:text-lg text-black">{numeroLaugh}</span>
              <span className="font-semibold text-sm sm:text-base lg:text-lg text-black">Muy Satisfecho</span>
            </div>
          </button>
        </section>
      )}
    </div>
  );
}

export default ContadorLikes;
