const ALL_DIGIMON_URL = "https://digi-api.com/api/v1/digimon?pageSize=1460"
const DIGIMON_INFO_URL = "https://digi-api.com/api/v1/digimon/"

export async function getAllDigimon(level="All") {
    let url = ALL_DIGIMON_URL
    if (level != "All") {
        url = url+"&level="+level
    }
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Api error")
    }
    return response.json()
}
export async function getDigimonInfo(id) {
    const response = await fetch(DIGIMON_INFO_URL+id)
    if (!response.ok) {
        throw new Error("Api error")
    }
    return response.json()
}