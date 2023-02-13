<template>
    <div class="container">
        <div class="typography__content">
            <div class="text">
                <p class="title-paragraph">Title 1 | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Title 2 | Font size: 48px | Line height: 116% | Weight: Bold/700 </p>
                <p class="title-2">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Title 3 | Font size: 34px | Line height: 39.78px | Weight: ExtraBold/800 </p>
                <p class="title-3">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Title 4 | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Headline  | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Subheadline | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body  | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body Bold | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body Small | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body Small Bold | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Caption | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Button large | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    Button Large
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Button medium | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="title-1">
                    Button Medium
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Button small | Font size: 60px | Line height: 72px | Weight: Bold/700 </p>
                <p class="button-small">
                    Button Small
                </p>
            </div>

        </div>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');

.container {
    padding: .5rem;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    /* max-width: 900px; */
    font-family: 'Nunito Sans', sans-serif;
}

.typography__content{
    display: flex;
    flex-direction: column;
    gap: 1rem;    
    flex-wrap: wrap;
    overflow: hidden;
}

.text{
    border: 1px solid #0F0D15;
    padding: 1rem;
    border-radius: 1rem;
}

.title-paragraph{
    font-weight: 700;
}

.title-1{
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.5%;
}


.title-2{
    font-weight: 700;
    font-size: 48px;
    line-height: 116%;
    /* color: #0F0D15; */
}

.title-3{
    font-weight: 800;
    font-size: 34px;
    line-height: 117%;
    /* color: #0F0D15; */
}

.button-small{
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
}

</style>