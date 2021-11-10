const poke_container = document.getElementById('poke_container');
const fetchPokemons = async () => {
	for (let i = 1; i <= 50; i++) {
		await get_Pokemon(i);
	}
};

const get_Pokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	const poke = document.createElement('div');
	poke.classList.add('pokemon');
     

	
	const pokeInnerHTML = `
        <div class="image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png"  />
        </div>
        <div class="content">
            <h3>ABILITIES:${pokemon.abilities[0].ability.name.toUpperCase()}</h3>
            <h4>Moves:${pokemon.moves[0].move.name}</h4>
            <h5>Weight:${pokemon.weight}</h5>
        </div>`;

	poke.innerHTML = pokeInnerHTML;

	poke_container.appendChild(poke);
}

fetchPokemons();










