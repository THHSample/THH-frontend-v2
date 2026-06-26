import axios from "axios";

const GET_ANIMALS_URL = "https://orgfarm-1b2bccc2e5-dev-ed.develop.my.salesforce-sites.com/services/apexrest/getAnimals";


export default interface AnimalResponse {
  kennel: number;
  name: string;
  collarType: string;
  diet: string,
  walk1: boolean,
  walk2: boolean,
  walk3: boolean,
  notes: string

}

interface Items {
  items: AnimalResponse[];
}

export async function getAnimals(): Promise<AnimalResponse[]> {
  try {
    const response = await axios.get<Items>(
      GET_ANIMALS_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Axios response", response);
    return response.data.items;
  } catch (error: any) {
      console.log("Trouble converting response")
      const errorItem: AnimalResponse = {
        kennel: 1,
        name: '',
        collarType: '',
        diet: '',
        walk1: false,
        walk2: false,
        walk3: false,
        notes: ''
      };
      const errorResponse = [
        errorItem
      ]
      return errorResponse
    }
}