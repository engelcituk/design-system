<template>
        <!---->
    <div class="container">
        <div class="typography__content">

            <div class="typo">
                <div class="font__title black">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>Black | 900</p>
                </div>
            </div>

            <div class="typo">
                <div class="font__title extra-bold">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>ExtraBold | 800</p>
                </div>
            </div>
            <div class="typo">
                <div class="font__title bold">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>Bold | 700 </p>
                </div>
            </div>

            <div class="typo">
                <div class="font__title semi-bold">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>SemiBold | 600</p>
                </div>
            </div>

            <div class="typo">
                <div class="font__title regular">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>Regular | 400 </p>
                </div>
            </div>

            <div class="typo">
                <div class="font__title light">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>Light | 300</p>
                </div>
            </div>

            <div class="typo">
                <div class="font__title extra-light">Aa</div>
                <div class="font__detail">
                    <p>Nunito Sans</p>
                    <p>ExtraLight | 200 </p>
                </div>
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
    justify-content: space-between;
    gap: 1rem;    
    flex-wrap: wrap;
    overflow: hidden;
}

.typo{
    display: flex;
   /* justify-content: space-around; */
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);     */
    color: #0F0D15;    
    height: 104px;
    width: 232px;
    min-width: 104px; 
    gap: 1rem;  
}

.font__title{
    
    font-family: 'Nunito Sans', sans-serif;
    font-size: 34px;
    line-height: 39.78px;

    height: 104px;
    width: 104px;
    border-radius: 40px;
    margin-left: 5px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08);

    display: flex;
    align-items: center;
    justify-content: center;
}

.font__detail{
    font-weight: 700;
    font-size: 18px;
    line-height: 24.3px;
    letter-spacing: 1%;
    color: #0F0D15;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.font__detail p{
    margin: 0;
}

.font__detail p:nth-child(2){
    font-weight: 400;
    font-size: 16px;
    color: #615E69;
}

.black{
    font-weight: 900;
    
}

.extra-bold{
    font-weight: 800;
}

.bold{
    font-weight: 700;
}

.semi-bold{
    font-weight: 600;
}

.regular{
    font-weight: 400;
}

.light{
    font-weight: 300;
}

.extra-light{
    font-weight: 200;
}
</style>