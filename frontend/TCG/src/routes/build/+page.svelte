<script lang="ts">
    import Card from "$lib/components/card.svelte";
	import ClassCard from "$lib/components/classCard.svelte";
	import { selectedCards, selectedClass } from "$lib/stores.svelte.js";

    let {data} = $props();
    const cardData = data.cardData
    const classCardData = data.classCardData

    let classSelected = false;

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
    <div class="title">Choose your class</div>
    <div class="classCardLayout">
        {#each classCardData as data}
            <ClassCard cardData={data} />
        {/each}
    </div>
</div>
{#if selectedClass.get()}
<div class="classSelector">
    <div class="title2">Select 3 cards to add to your deck</div>
    <div class="cardLayout">
        {#each cardData as data}
            <Card cardData={data}/>
        {/each}
    </div>
</div>

{/if}
{#if selectedCards.get().length == 3}
    <div class="finishLayout">
        <div class="title2">Good job building your deck!</div>
        <a href="/battle">Play!</a>
    </div>
{/if}