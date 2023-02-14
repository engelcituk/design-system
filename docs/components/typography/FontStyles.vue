<template>
    <div class="container">
        <div class="typography__content">
            <div class="text">
                <p class="title-paragraph">Title 1 | Font size: 60px | Line height: 120% | Weight: Bold/700 </p>
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
                <p class="title-paragraph">Title 3 | Font size: 34px | Line height: 117% | Weight: ExtraBold/800 </p>
                <p class="title-3">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Headline | Font size: 24px | Line height: 132% | Weight: ExtraBold/800 </p>
                <p class="headline">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Subheadline  | Font size: 18px | Line height: 135% | Weight: Bold/700 </p>
                <p class="subheadline">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body | Font size: 16px | Line height: 147% | Weight: Regular/400 </p>
                <p class="body">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body bold | Font size: 16px | Line height: 147% | Weight: Bold/700 </p>
                <p class="body-bold">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body small | Font size: 14px | Line height: 116% | Weight: Regular/400 </p>
                <p class="body-small">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Body small bold | Font size: 14px | Line height: 116% | Weight: Bold/700 </p>
                <p class="body-small-bold">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Caption  | Font size: 12px | Line height: 130% | Weight: Semi-bold/600 </p>
                <p class="caption">
                    La Tierra es el tercer planeta del sistema solar. 
                </p>
            </div>

           <div class="text">
                <p class="title-paragraph">Button large | Font size: 16px | Line height: 150% | Weight: Bold/700 </p>
                <p class="button-large">
                    Button Large
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Button medium | Font size: 14px | Line height: 112% | Weight: Bold/700 </p>
                <p class="button-medium">
                    Button Medium
                </p>
            </div>

            <div class="text">
                <p class="title-paragraph">Button small | Font size: 12px | Line height: 130% | Weight: Bold/700 </p>
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
}

.title-3{
    font-weight: 800;
    font-size: 34px;
    line-height: 117%;    
}

.headline{
    font-weight: 800;
    font-size: 24px;
    line-height: 132%;    
}

.subheadline{
    font-weight: 700;
    font-size: 18px;
    line-height: 135%;    
}

.body{
    font-weight: 400;
    font-size: 16px;
    line-height: 147%;    
}
.body-bold{
    font-weight: 700;
}

.body-small{
    font-weight: 400;
    font-size: 14px;
    line-height: 116%;    
}

.body-small-bold{
    font-weight: 700;
    font-size: 14px;
    line-height: 116%;
}

.caption{
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
}

.button-large{
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
}

.button-medium{
    font-weight: 700;
    font-size: 14px;
    line-height: 112%;
}
.button-small{
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
}

</style>