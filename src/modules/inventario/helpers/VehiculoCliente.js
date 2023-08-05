import axios from "axios"

export const consultarTodosFachada = async() => {
    return await consultarTodos();
}

export const consultarPorPlacaFachada = async(placa) => {
    return await consultarPorPlaca(placa);
}

const consultarTodos = async () => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Inventario/vehiculos`).then(r => r.data);
    console.log(data);
    return data;
}

const consultarPorPlaca = async (placa) => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Inventario/vehiculos/${placa}`).then(r => r.data);
    console.log(data);
    return data;
}