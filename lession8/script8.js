async function fetchWeather() {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=43.2525&longitude=76.9115&current=temperature_2m,wind_speed_10m"

    try {
        console.log("Загрузка...")
        const responce = await fetch(url)

        if (!responce.ok) {
            console.log("Ошибка с ответом")
        }

        const data = await responce.json()

        const temperature = data.current.temperature_2m
        const wind_speed = data.current.wind_speed_10m
        const dayTemp=data.current.dayTemp

        const temperature_unit = data.curren_units.temperature_2m
        const wind_speed_unit = data.current_units.wind_speed_10m

        console.log(`Погода в Алмате: `)
        console.log(`Температура: ${temperature}${temperature_unit}`)
        console.log(`Скорость ветра: ${wind_speed}${wind_speed_unit}`)
    } catch(error){
        console.log("Ошибка", error)
    } finally{
        console.log("Загрузка завершена")
    }

}
fetchWeather()