<script lang="ts">
    import BattleCard from "$lib/components/battle-card.svelte";
    import UnknownCard from "$lib/components/unknown-card.svelte";
	import { selectedCards } from "$lib/stores.svelte.js";
	import type { card } from "$lib/types";

    let {data} = $props();
    //@ts-ignore
    const allCardData = data.cardData

    let cardData: card[] = $state()

    $effect(()=>{
        selectedCards.getData().then(data => {
            cardData = data
            console.log(data);
        })
    })

    function removebyName(card:string){
        if(selectedCards.getLength() > 2){
            alert(`You played the ${card} card!`)
            const ran = Math.round(Math.random() * allCardData.length)
            alert(`The computer played the ${allCardData[ran].name}`)
            selectedCards.set(card)
        }
        
         else {
            alert("You need to draw a card first")
         }
    }

    function addCard(){
        if(selectedCards.getLength() <= 2){
            while(1){
                const ran = Math.ceil(Math.random() * allCardData.length - 1)
                if(!selectedCards.get().includes(allCardData[ran].name)){
                    selectedCards.set(allCardData[ran].name)
                    break
                }
            }
        } else {
            alert("You already have 3 cards in your hand. Play a card first.")
        }

    }
        

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
        width: 800px;
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

    .playfield{
        width: 100%;
        padding: 1rem;
    }


    .battlefield{
        display: flex;
        flex-direction: row;
        background-color: green;
        height: 50vh;
    }
    .layout {
        display: flex;
        flex-direction: row;
    }

    .left {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 600px;
        align-content: center;
        justify-content: center;

    }

    .cardStack {
        width: 250px;
        height: 300px;
        position: relative;
    }

    .hand {
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<div class="classSelector">
    <div class="layout">
        <div class="left">
            <div class="cardStack" onclick={()=>{addCard()}}>
                <div style="z-index: 1; position:absolute; top: 0px;">
                    <UnknownCard />
                </div>
                <div style="z-index: 2; position:absolute; top: 5px;">
                    <UnknownCard />
                </div>
                <div style="z-index: 3; position:absolute; top: 10px;">
                    <UnknownCard />
                </div>
                <div style="z-index: 4; position:absolute; top: 15px;">
                    <UnknownCard />
                </div>
            </div>
        </div>
        <div class="playfield">
            <div class="battlefield">
            </div>
            <div class="hand">
                <div class="classCardLayout">
                    {#each cardData as data}
                        <span onclick={()=>{removebyName(data.name)}}>
                            <BattleCard cardData={data}/>
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
