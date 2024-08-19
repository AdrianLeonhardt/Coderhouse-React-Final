import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/datafirebase";

const FinalizarCompra = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext);

    //Creamos un estado para manejar el ID del pedido
    const [pedidoId, setPedidoId] = useState("");

    // Creamos un estado para manejar errores
    const [error, setError] = useState("");

    //Funcion para calcular el total del carrito
    const calcularTotalPrecio = () => {
        return carrito.reduce((acumulador, producto) => {
            return acumulador + (producto.precio * producto.quantity);
        }, 0);
    };

    const totalPrecio = calcularTotalPrecio();

    //Funcion para enviar datos en formulario
    const { register, handleSubmit } = useForm({mode: 'onBlur'});
    
    const enviarDatos = (datos) => {

        const email = datos.email;
        const confirmEmail = datos.confirmEmail;

        if (email !== confirmEmail) {
          setError("Los emails no coinciden");
          return;
        }

        const detallesPedidosCliente = {
            cliente: datos,
            productos: carrito,
            total: totalPrecio
        };
        //console.log(detallesPedidosCliente);

        //Enviamos los datos de los pedidos a Firebase
        const pedidosFire = collection(db, "pedidos");

        addDoc(pedidosFire, detallesPedidosCliente)
        //Capturamos detalles de la compra
            .then((doc)=> {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
            .catch((err) => {
              console.error("Error al guardar el pedido: ", err);
          });
    };

    //Retornamos solo si tenemos un Id del pedido
    if (pedidoId) {
        return (
            <div className = "saludo-final">
                <h1>Gracias por tu compra</h1>
                <h2>Tu numero de pedido es: {pedidoId}</h2>
            </div>
        )
    }


    return (
      <div className="form-finalizar-compra">
      <h1 className="detalle-carrito">Finalizar Compra</h1>

      <form className="formulario" onSubmit={handleSubmit(enviarDatos)}>
          <input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })}
              className="input-field"
          />
          <input
              type="text"
              placeholder="Ingresa tu apellido"
              {...register("apellido", { required: "El apellido es obligatorio" })}
              className="input-field"
          />
          <input
              type="email"
              placeholder="Ingresa tu email"
              {...register("email", { required: "El email es obligatorio" })}
              className="input-field"
          />
          <input
              type="email"
              placeholder="Confirma tu email"
              {...register("confirmEmail", {
                  required: "La confirmación del email es obligatoria"
              })}
              className="input-field"
          />
          <input
              type="number"
              placeholder="Ingresa tu teléfono"
              {...register("telefono", { required: "El teléfono es obligatorio" })}
              className="input-field"
          />

          {error && <p className="error-message">{error}</p>}
    
            <button className="btn-finalizar-compra" type="submit">Comprar</button>
          </form>
        </div>
      );
    };

export default FinalizarCompra