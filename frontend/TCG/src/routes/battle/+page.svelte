<script lang="ts">
	import { loadCardsByName } from "$lib";
	import BattleCard from "$lib/components/battle-card.svelte";
    
	import { selectedCards } from "$lib/stores.svelte.js";
	import type { card } from "$lib/types";
	import { onMount } from "svelte";


    const cardDataNames = selectedCards.get()
    let cardData : any[]


    onMount(async ()=>{
        let dataResponse = await loadCardsByName(cardDataNames)
        cardData = dataResponse
    })

</script>
<style>
    .cardLayout {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 25px;
        justify-items: center;
    }

    .classCardLayout {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 25px;
        justify-items: center;
        align-items: center;
    }

    .classSelector {
        display: flex;
        flex-direction: column;
        align-self: center;
        min-height: 65vh;
    }

    .title {
        align-self: center;
        font-size: 4rem;
        margin: 1rem 0rem;
    }

    .title2 {
        align-self: center;
        font-size: 2.75rem;
        margin: 0rem 0rem 2rem;
    }

    .finishLayout {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin-bottom: 130px;
    }

    .finishLayout a{
        padding: 1rem 2rem;
        outline: none;
        border: none;
        background-color: #3D606D;
        color: white;
        font-size: 1.3rem;
        border: 3px solid black;
        border-radius: 1rem;
        transition: .25s;
        cursor: pointer;
        text-decoration: none;
    }
</style>
<div class="classSelector">
    <div class="title">Your deck! Click to play a card</div>
    <div class="classCardLayout">
        {#each cardData as data}
            <BattleCard cardData={data}/>
        {/each}
    </div>
</div>
