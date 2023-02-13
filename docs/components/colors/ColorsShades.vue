<script setup>
    import useCopy from '../../composables/useCopy'
    const { copyShadeColor } = useCopy()
</script>

<template>
    <div class="container">
        <h3 class="title_shade">Gray</h3>        
        <div class="colors__base">
            <div class="color__base gray-1" @click="copyShadeColor('gray', 'one')">#0F0D15</div>        
            <div class="color__base gray-2" @click="copyShadeColor('gray', 'two')">#1D1929</div>        
            <div class="color__base gray-3" @click="copyShadeColor('gray', 'three')">#34303E</div>        
            <div class="color__base gray-4" @click="copyShadeColor('gray', 'four')">#4A4754</div>        
            <div class="color__base gray-5" @click="copyShadeColor('gray', 'five')">#615E69</div>        
            <div class="color__base gray-6" @click="copyShadeColor('gray', 'six')">#77757F</div>        
            <div class="color__base gray-7" @click="copyShadeColor('gray', 'seven')">#8E8C94</div>        
            <div class="color__base gray-8" @click="copyShadeColor('gray', 'eight')">#A5A3A9</div>  
            <div class="color__base gray-9" @click="copyShadeColor('gray', 'nine')">#BBBABF</div>        
            <div class="color__base gray-10" @click="copyShadeColor('gray', 'ten')">#D2D1D4</div>        
            <div class="color__base gray-11" @click="copyShadeColor('gray', 'eleven')">#E8E8EA</div>        
            <div class="color__base gray-12" @click="copyShadeColor('gray', 'twelve')">#F9F9F9</div>       
        </div> 

        <h3 class="title_shade">Blue</h3>        
        <div class="colors__base">
            <div class="color__base blue-1" @click="copyShadeColor('blue', 'one')">#0030CC</div>        
            <div class="color__base blue-2" @click="copyShadeColor('blue', 'two')">#0036E6</div>        
            <div class="color__base blue-3" @click="copyShadeColor('blue', 'three')">#003CFF</div>        
            <div class="color__base blue-4" @click="copyShadeColor('blue', 'four')">#1A50FF</div>        
            <div class="color__base blue-5" @click="copyShadeColor('blue', 'five')">#3363FF</div>        
            <div class="color__base blue-6" @click="copyShadeColor('blue', 'six')">#4D77FF</div>        
            <div class="color__base blue-7" @click="copyShadeColor('blue', 'seven')">#668AFF</div>        
            <div class="color__base blue-8" @click="copyShadeColor('blue', 'eight')">#809EFF</div>  
            <div class="color__base blue-9" @click="copyShadeColor('blue', 'nine')">#99B1FF</div>        
            <div class="color__base blue-10" @click="copyShadeColor('blue', 'ten')">#B3C5FF</div>        
            <div class="color__base blue-11" @click="copyShadeColor('blue', 'eleven')">#CCD8FF</div>        
            <div class="color__base blue-12" @click="copyShadeColor('blue', 'twelve')">#E6ECFF</div>       
        </div>  

        
        <h3 class="title_shade">Pink</h3>        
        <div class="colors__base">
            <div class="color__base pink-1" @click="copyShadeColor('pink', 'one')">#C80068</div>        
            <div class="color__base pink-2" @click="copyShadeColor('pink', 'two')">#E10075</div>        
            <div class="color__base pink-3" @click="copyShadeColor('pink', 'three')">#FA0082</div>        
            <div class="color__base pink-4" @click="copyShadeColor('pink', 'four')">#FB1A8F</div>        
            <div class="color__base pink-5" @click="copyShadeColor('pink', 'five')">#FB339B</div>        
            <div class="color__base pink-6" @click="copyShadeColor('pink', 'six')">#FC4DA8</div>        
            <div class="color__base pink-7" @click="copyShadeColor('pink', 'seven')">#FC66B4</div>        
            <div class="color__base pink-8" @click="copyShadeColor('pink', 'eight')">#FD80C1</div>  
            <div class="color__base pink-9" @click="copyShadeColor('pink', 'nine')">#FD99CD</div>        
            <div class="color__base pink-10" @click="copyShadeColor('pink', 'ten')">#FEB3DA</div>        
            <div class="color__base pink-11" @click="copyShadeColor('pink', 'eleven')">#FECCE6</div>        
            <div class="color__base pink-12" @click="copyShadeColor('pink', 'twelve')">#FFE6F3</div>       
        </div> 
        
        <h3 class="title_shade">Green</h3>        
        <div class="colors__base">
            <div class="color__base green-1" @click="copyShadeColor('green', 'one')">#18BA92</div>        
            <div class="color__base green-2" @click="copyShadeColor('green', 'two')">#1BD2A4</div>        
            <div class="color__base green-3" @click="copyShadeColor('green', 'three')">#1EE9B6</div>        
            <div class="color__base green-4" @click="copyShadeColor('green', 'four')">#35EBBD</div>        
            <div class="color__base green-5" @click="copyShadeColor('green', 'five')">#4BEDC5</div>        
            <div class="color__base green-6" @click="copyShadeColor('green', 'six')">#62F0CC</div>        
            <div class="color__base green-7" @click="copyShadeColor('green', 'seven')">#78F2D3</div>        
            <div class="color__base green-8" @click="copyShadeColor('green', 'eight')">#8FF4DB</div>  
            <div class="color__base green-9" @click="copyShadeColor('green', 'nine')">#A5F6E2</div>        
            <div class="color__base green-10" @click="copyShadeColor('green', 'ten')">#BCF8E9</div>        
            <div class="color__base green-11" @click="copyShadeColor('green', 'eleven')">#D2FBF0</div>        
            <div class="color__base green-12" @click="copyShadeColor('green', 'twelve')">#E9FDF8</div>       
        </div> 

        <h3 class="title_shade">Yellow</h3>        
        <div class="colors__base">
            <div class="color__base yellow-1" @click="copyShadeColor('yellow', 'one')">#CCB243</div>        
            <div class="color__base yellow-2" @click="copyShadeColor('yellow', 'two')">#E6C84C</div>        
            <div class="color__base yellow-3" @click="copyShadeColor('yellow', 'three')">#FFDE54</div>        
            <div class="color__base yellow-4" @click="copyShadeColor('yellow', 'four')">#FFE165</div>        
            <div class="color__base yellow-5" @click="copyShadeColor('yellow', 'five')">#FFE576</div>        
            <div class="color__base yellow-6" @click="copyShadeColor('yellow', 'six')">#FFE887</div>        
            <div class="color__base yellow-7" @click="copyShadeColor('yellow', 'seven')">#FFEB98</div>        
            <div class="color__base yellow-8" @click="copyShadeColor('yellow', 'eight')">#FFEFAA</div>  
            <div class="color__base yellow-9" @click="copyShadeColor('yellow', 'nine')">#FFF2BB</div>        
            <div class="color__base yellow-10" @click="copyShadeColor('yellow', 'ten')">#FFF5CC</div>        
            <div class="color__base yellow-11" @click="copyShadeColor('yellow', 'eleven')">#FFF8DD</div>        
            <div class="color__base yellow-12" @click="copyShadeColor('yellow', 'twelve')">#FFFCEE</div>       
        </div> 

        <h3 class="title_shade">Orange</h3>        
        <div class="colors__base">
            <div class="color__base orange-1" @click="copyShadeColor('orange', 'one')">#CC5801</div>        
            <div class="color__base orange-2" @click="copyShadeColor('orange', 'two')">#E66301</div>        
            <div class="color__base orange-3" @click="copyShadeColor('orange', 'three')">#FF6E01</div>        
            <div class="color__base orange-4" @click="copyShadeColor('orange', 'four')">#FF7D1A</div>        
            <div class="color__base orange-5" @click="copyShadeColor('orange', 'five')">#FF8B34</div>        
            <div class="color__base orange-6" @click="copyShadeColor('orange', 'six')">#FF9A4D</div>        
            <div class="color__base orange-7" @click="copyShadeColor('orange', 'seven')">#FFA867</div>        
            <div class="color__base orange-8" @click="copyShadeColor('orange', 'eight')">#FFB780</div>  
            <div class="color__base orange-9" @click="copyShadeColor('orange', 'nine')">#FFC599</div>        
            <div class="color__base orange-10" @click="copyShadeColor('orange', 'ten')">#FFD4B3</div>        
            <div class="color__base orange-11" @click="copyShadeColor('orange', 'eleven')">#FFE2CC</div>        
            <div class="color__base orange-12" @click="copyShadeColor('orange', 'twelve')">#FFF1E6</div>       
        </div> 

        <h3 class="title_shade">Red</h3>        
        <div class="colors__base">
            <div class="color__base red-1" @click="copyShadeColor('red', 'one')">#C32021</div>        
            <div class="color__base red-2" @click="copyShadeColor('red', 'two')">#DC2425</div>        
            <div class="color__base red-3" @click="copyShadeColor('red', 'three')">#F42829</div>        
            <div class="color__base red-4" @click="copyShadeColor('red', 'four')">#F53E3E</div>        
            <div class="color__base red-5" @click="copyShadeColor('red', 'five')">#F65354</div>        
            <div class="color__base red-6" @click="copyShadeColor('red', 'six')">#F76969</div>        
            <div class="color__base red-7" @click="copyShadeColor('red', 'seven')">#F87E7F</div>        
            <div class="color__base red-8" @click="copyShadeColor('red', 'eight')">#F87E7F</div>  
            <div class="color__base red-9" @click="copyShadeColor('red', 'nine')">#FBA9A9</div>        
            <div class="color__base red-10" @click="copyShadeColor('red', 'ten')">#FCBFBF</div>        
            <div class="color__base red-11" @click="copyShadeColor('red', 'eleven')">#FDD4D4</div>        
            <div class="color__base red-12" @click="copyShadeColor('red', 'twelve')">#FEEAEA</div>       
        </div> 

        <h3 class="title_shade">Purple</h3>        
        <div class="colors__base">
            <div class="color__base purple-1" @click="copyShadeColor('purple', 'one')">#AE59C6</div>        
            <div class="color__base purple-2" @click="copyShadeColor('purple', 'two')">#C364DF</div>        
            <div class="color__base purple-3" @click="copyShadeColor('purple', 'three')">#D96FF8</div>        
            <div class="color__base purple-4" @click="copyShadeColor('purple', 'four')">#DD7DF9</div>        
            <div class="color__base purple-5" @click="copyShadeColor('purple', 'five')">#E18CF9</div>        
            <div class="color__base purple-6" @click="copyShadeColor('purple', 'six')">#E49AFA</div>        
            <div class="color__base purple-7" @click="copyShadeColor('purple', 'seven')">#E8A9FB</div>        
            <div class="color__base purple-8" @click="copyShadeColor('purple', 'eight')">#FA9494</div>  
            <div class="color__base purple-9" @click="copyShadeColor('purple', 'nine')">#F0C5FC</div>        
            <div class="color__base purple-10" @click="copyShadeColor('purple', 'ten')">#F4D4FD</div>        
            <div class="color__base purple-11" @click="copyShadeColor('purple', 'eleven')">#F7E2FE</div>        
            <div class="color__base purple-12" @click="copyShadeColor('purple', 'twelve')">#FBF1FE</div>       
        </div> 

    </div>
</template>


<style scoped>
/* @import '../color-shades.css' */
@import './../styles/color-shades.css';

</style>