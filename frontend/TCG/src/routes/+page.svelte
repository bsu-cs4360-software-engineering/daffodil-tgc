<script>
    import Card from "$lib/components/card.svelte";
	import { onMount } from "svelte";

    async function test() {
        let data = await fetch("localhost:3000")
        console.log(data)
    }

    onMount(()=> {
        test()
    })
</script>

<Card />