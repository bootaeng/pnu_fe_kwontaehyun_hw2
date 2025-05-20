import requests
import json

def get_pokemon_data(pokemon_id):
    pokemon_url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}"
    species_url = f"https://pokeapi.co/api/v2/pokemon-species/{pokemon_id}"

    pokemon_res = requests.get(pokemon_url)
    species_res = requests.get(species_url)

    if pokemon_res.status_code == 200 and species_res.status_code == 200:
        pokemon_data = pokemon_res.json()
        species_data = species_res.json()

        types = [t['type']['name'] for t in pokemon_data['types']]
        image = pokemon_data['sprites']['front_default']
        name = pokemon_data['name']

        description = next(
            (entry['flavor_text'].replace('\n', ' ').replace('\f', ' ')
             for entry in species_data['flavor_text_entries']
             if entry['language']['name'] == 'en'),
            ""
        )

        return {
            "id": pokemon_id,
            "name": name,
            "types": types,
            "image": image,
            "description": description
        }

    return None

pokemon_list = []
for i in range(1, 152):
    print(f"Fetching Pokémon {i}...")
    data = get_pokemon_data(i)
    if data:
        pokemon_list.append(data)


with open("data.js", "w", encoding="utf-8") as f:
    f.write("export const MOCK_POKEMONS = ")
    json.dump(pokemon_list, f, indent=2)
    f.write(";")
