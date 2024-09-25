<div class="content">
    <div class="leftCol">
        <div class="welcome">
            <h2>Welcome!</h2>
            <p>We are so glad too see you!</p>
            <h3>What is Dungeonstone?</h3>
            <p>
                Dungeonstone is a turn-based trading card game blending deck-building strategy with class-based combat. 
                Players choose from 4 classes (Shield, Healer, Mage, Rogue), each with a pre-built deck. They then 
                add 3 unique cards to customize their strategy.
                <br><br>
                Gameplay consists of battling through levels, each culminating in a boss fight. Every boss has distinct 
                abilities and weaknesses, requiring players to adapt their tactics. For example:
                <br><br>
                The Troll King regenerates health, challenging players to burst damage
                The Shadow Weaver turns invisible, testing area-of-effect abilities
                The Dragon's scales deflect spells, favoring physical attacks
                <br><br>
                Players must use their class abilities and custom cards wisely to overcome these varied challenges and progress through increasingly difficult bosses.
            </p>
        </div>
    </div>
    <div class="rightCol">
        <div class="ready">
        <h3>Ready to Play?</h3>
        <p>Just enter your name and began your quest!</p>
        <input type="text" name="" id="" maxlength="22" placeholder="Name your aviator">
        <a href="/build">Lets go!</a>
    </div>
    </div>
    

</div>
<style>
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }
    .leftCol {
        margin: 2%;
        padding: 2%;

    }
    .rightCol {
        margin: 2%;

        padding: 2%;
    }

    .welcome {
        width: 100%;
        padding: 2%;
        border-radius: 2rem;
        border: solid 2px black;
        background-color: #1b2d34;
    }

    .ready {
        width: 100%;
        padding: 2%;
        border-radius: 2rem;
        border: solid 2px black;
        background-color: #1b2d34;

        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .ready h3{
        font-size: 3.5rem;
        margin: 0px;
        padding: 0px;
    }

    .ready input{
        font-size: 1.3rem;
        outline: none;
        border: none;
        background-color: #ffffff;
        padding: .5rem 1rem;

    }

    .ready a {
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
    }

    .ready a:hover {
        border: 3px solid rgb(226, 197, 34);
        transition: .25s;
    }
</style>
<script>

</script>