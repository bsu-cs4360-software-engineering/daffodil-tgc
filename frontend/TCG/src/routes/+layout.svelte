<script>

</script>
<div class="main">
    <div class="header">
        <h1>DND - HearthStone</h1>
    </div>
    <div class="gameContent">
        <slot />
    </div>
</div>
<style>
    .main {
        width: 100%;
        min-width: 100vh;
    }

    .header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #213740;
    }

    h1 {
        margin: 10px 0px;
        color: #c9d5de;
    }

</style>