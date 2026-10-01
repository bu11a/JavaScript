const API_url = "https://dummyjson.com/products"

export async function getProducts() {
    try{
        const responce = await fetch(`${API_url}?limit=100`)

        if (!responce.ok) {
            throw new Error("Ошибка при выгрузке товаров!")
        }

        const data = await responce.json();

        return data.products;
    } catch(error) {
        console.log(error);
        return []
    }
}