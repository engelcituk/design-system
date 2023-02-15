<script setup>

import { strokeIcons } from '../../data/icons'

</script>
<template>
    <div class="container">
        <h3>Basics</h3>
        <div class="icons">
        
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1V14M1 7.5H14" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7.5H14" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L5.5 11.5L14 3" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13.5V13H7V13.5H8ZM7 13.51V14.01H8V13.51H7ZM7 1V11H8V1H7ZM7 13.5V13.51H8V13.5H7Z" fill="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 4V11M4 7.5H11" stroke="#1D1929"/>
            </svg>  


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 13.75L11.25 9.75M7.25 13.75L3.25 9.75M7.25 13.75V1.25" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.85355 8.14645L5.5 7.79289L4.79289 8.5L5.14645 8.85355L5.85355 8.14645ZM7.5 10.5L7.14645 10.8536L7.5 11.2071L7.85355 10.8536L7.5 10.5ZM9.85355 8.85355L10.2071 8.5L9.5 7.79289L9.14645 8.14645L9.85355 8.85355ZM0.5 7.5H0H0.5ZM7.5 0.5V0V0.5ZM7.5 14.5L7.5 14L7.5 14.5ZM14.5 7.5L14 7.5L14.5 7.5ZM5.14645 8.85355L7.14645 10.8536L7.85355 10.1464L5.85355 8.14645L5.14645 8.85355ZM7.85355 10.8536L9.85355 8.85355L9.14645 8.14645L7.14645 10.1464L7.85355 10.8536ZM8 10.5L8 4L7 4L7 10.5H8ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35786 -1.78814e-07 1.78814e-07 3.35786 0 7.5H1ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C-1.78814e-07 11.6421 3.35786 15 7.5 15L7.5 14ZM14 7.5C14 11.0899 11.0899 14 7.5 14L7.5 15C11.6421 15 15 11.6421 15 7.5L14 7.5ZM15 7.5C15 3.35787 11.6421 1.78814e-07 7.5 0V1C11.0899 1 14 3.91015 14 7.5L15 7.5Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60355 9.10355L9.95711 8.75L9.25 8.04289L8.89645 8.39645L9.60355 9.10355ZM7.25 10.75L6.89645 11.1036L7.25 11.4571L7.60355 11.1036L7.25 10.75ZM5.60355 8.39645L5.25 8.04289L4.54289 8.75L4.89645 9.10355L5.60355 8.39645ZM8.89645 8.39645L6.89645 10.3964L7.60355 11.1036L9.60355 9.10355L8.89645 8.39645ZM7.60355 10.3964L5.60355 8.39645L4.89645 9.10355L6.89645 11.1036L7.60355 10.3964ZM7.75 10.75L7.75 4.25L6.75 4.25L6.75 10.75H7.75Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5L5 3.5M1 7.5L5 11.5M1 7.5H13.5" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.85352 5.85355L7.20708 5.5L6.49997 4.79289L6.14642 5.14645L6.85352 5.85355ZM4.49997 7.5L4.14642 7.14645L3.79286 7.5L4.14642 7.85355L4.49997 7.5ZM6.14642 9.85355L6.49997 10.2071L7.20708 9.5L6.85352 9.14645L6.14642 9.85355ZM7.49997 0.5V0V0.5ZM14.5 7.5H15H14.5ZM0.499969 7.5H0.999969H0.499969ZM7.49997 14.5V14V14.5ZM6.14642 5.14645L4.14642 7.14645L4.85352 7.85355L6.85352 5.85355L6.14642 5.14645ZM4.14642 7.85355L6.14642 9.85355L6.85352 9.14645L4.85352 7.14645L4.14642 7.85355ZM4.49997 8L11 8L11 7L4.49997 7V8ZM7.49997 1C11.0898 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 3.57628e-07 7.49997 0V1ZM0.999969 7.5C0.99997 3.91015 3.91012 1 7.49997 1V0C3.35783 -3.57628e-07 -3.016e-05 3.35786 -3.05176e-05 7.5H0.999969ZM7.49997 14C3.91012 14 0.999969 11.0899 0.999969 7.5H-3.05176e-05C-3.08752e-05 11.6421 3.35783 15 7.49997 15V14ZM7.49997 15C11.6421 15 15 11.6421 15 7.5H14C14 11.0899 11.0898 14 7.49997 14V15Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64645 9.85355L6 10.2071L6.70711 9.5L6.35355 9.14645L5.64645 9.85355ZM4 7.5L3.64645 7.14645L3.29289 7.5L3.64645 7.85355L4 7.5ZM6.35355 5.85355L6.70711 5.5L6 4.79289L5.64645 5.14645L6.35355 5.85355ZM6.35355 9.14645L4.35355 7.14645L3.64645 7.85355L5.64645 9.85355L6.35355 9.14645ZM4.35355 7.85355L6.35355 5.85355L5.64645 5.14645L3.64645 7.14645L4.35355 7.85355ZM4 8H10.5V7H4V8Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 9.14645L7.79289 9.5L8.5 10.2071L8.85355 9.85355L8.14645 9.14645ZM10.5 7.5L10.8536 7.85355L11.2071 7.5L10.8536 7.14645L10.5 7.5ZM8.85355 5.14645L8.5 4.79289L7.79289 5.5L8.14645 5.85355L8.85355 5.14645ZM8.85355 9.85355L10.8536 7.85355L10.1464 7.14645L8.14645 9.14645L8.85355 9.85355ZM10.8536 7.14645L8.85355 5.14645L8.14645 5.85355L10.1464 7.85355L10.8536 7.14645ZM10.5 7H4V8H10.5V7ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 9.14645L7.79289 9.5L8.5 10.2071L8.85355 9.85355L8.14645 9.14645ZM10.5 7.5L10.8536 7.85355L11.2071 7.5L10.8536 7.14645L10.5 7.5ZM8.85355 5.14645L8.5 4.79289L7.79289 5.5L8.14645 5.85355L8.85355 5.14645ZM8.85355 9.85355L10.8536 7.85355L10.1464 7.14645L8.14645 9.14645L8.85355 9.85355ZM10.8536 7.14645L8.85355 5.14645L8.14645 5.85355L10.1464 7.85355L10.8536 7.14645ZM10.5 7H4V8H10.5V7Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 1.25L11.25 5.25M7.25 1.25L3.25 5.25M7.25 1.25V13.75" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.14645 6.85355L9.5 7.20711L10.2071 6.5L9.85355 6.14645L9.14645 6.85355ZM7.5 4.5L7.85355 4.14645L7.5 3.79289L7.14645 4.14645L7.5 4.5ZM5.14645 6.14645L4.79289 6.5L5.5 7.20711L5.85355 6.85355L5.14645 6.14645ZM14.5 7.5L14 7.5L14.5 7.5ZM7.5 14.5L7.5 14L7.5 14.5ZM7.5 0.5V0V0.5ZM0.5 7.5H0H0.5ZM9.85355 6.14645L7.85355 4.14645L7.14645 4.85355L9.14645 6.85355L9.85355 6.14645ZM7.14645 4.14645L5.14645 6.14645L5.85355 6.85355L7.85355 4.85355L7.14645 4.14645ZM7 4.5L7 11H8L8 4.5L7 4.5ZM14 7.5C14 11.0899 11.0899 14 7.5 14L7.5 15C11.6421 15 15 11.6421 15 7.5L14 7.5ZM7.5 1C11.0899 1 14 3.91015 14 7.5L15 7.5C15 3.35786 11.6421 -1.78814e-07 7.5 0V1ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35786 1.78814e-07 -1.78814e-07 3.35786 0 7.5H1ZM0 7.5C1.78814e-07 11.6421 3.35787 15 7.5 15L7.5 14C3.91015 14 1 11.0899 1 7.5H0Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.89645 5.89645L4.54289 6.25L5.25 6.95711L5.60355 6.60355L4.89645 5.89645ZM7.25 4.25L7.60355 3.89645L7.25 3.54289L6.89645 3.89645L7.25 4.25ZM8.89645 6.60355L9.25 6.95711L9.95711 6.25L9.60355 5.89645L8.89645 6.60355ZM5.60355 6.60355L7.60355 4.60355L6.89645 3.89645L4.89645 5.89645L5.60355 6.60355ZM6.89645 4.60355L8.89645 6.60355L9.60355 5.89645L7.60355 3.89645L6.89645 4.60355ZM6.75 4.25V10.75H7.75V4.25H6.75Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9L7.5 13L3 9M3 6L7.5 2L11.8125 6" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9L7.5 11L5 9M5 6L7.5 4L10 6M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99998 9L7.49998 11L4.99998 9M4.99998 6L7.49998 4L9.99998 6" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <!-- double-caret-down -->
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1.25 6.75L7.75 13.75L14.25 6.75M1.25 1.25L7.75 8.25L14.25 1.25" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 8.5L7.5 10.5L5.5 8.5M9.5 5.5L7.5 7.5L5.5 5.5M14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8L8 10L6 8M10 5L8 7L6 5" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49997 1L1.49997 7.5L8.49997 14M14 1L6.99997 7.5L14 14" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 9.5L4.5 7.5L6.5 5.5M9.5 9.5L7.5 7.5L9.5 5.5M7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9.5L5.5 7.5L7.5 5.5M10.5 9.5L8.5 7.5L10.5 5.5" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L14 7.5L7 1M1.5 14L8.5 7.5L1.5 1" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 9.5L10.5 7.5L8.5 5.5M5.5 9.5L7.5 7.5L5.5 5.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 9.5L10.5 7.5L8.5 5.5M5.5 9.5L7.5 7.5L5.5 5.5" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <!-- double-caret-up -->
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 8.25L7.75 1.25L1.25 8.25M14.25 13.75L7.75 6.75L1.25 13.75" stroke="#1D1929" stroke-linecap="square"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6.5L7.5 4.5L9.5 6.5M5.5 9.5L7.5 7.5L9.5 9.5M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7L8 5L10 7M6 10L8 8L10 10" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5L7.5 12L1 5" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5L7.5 9.5L10.5 6.5M14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.499999 11.366 0.5 7.5C0.500001 3.63401 3.63401 0.499999 7.5 0.5C11.366 0.500001 14.5 3.63401 14.5 7.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L7 9L10 6" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 10.5L0.146447 10.1464L0 10.2929V10.5H0.5ZM10.5 0.5L10.8536 0.146447C10.6583 -0.0488155 10.3417 -0.0488155 10.1464 0.146447L10.5 0.5ZM14.5 4.5L14.8536 4.85355C15.0488 4.65829 15.0488 4.34171 14.8536 4.14645L14.5 4.5ZM4.5 14.5V15H4.70711L4.85355 14.8536L4.5 14.5ZM0.5 14.5H0C0 14.7761 0.223858 15 0.5 15L0.5 14.5ZM0.853553 10.8536L10.8536 0.853553L10.1464 0.146447L0.146447 10.1464L0.853553 10.8536ZM10.1464 0.853553L14.1464 4.85355L14.8536 4.14645L10.8536 0.146447L10.1464 0.853553ZM14.1464 4.14645L4.14645 14.1464L4.85355 14.8536L14.8536 4.85355L14.1464 4.14645ZM4.5 14H0.5V15H4.5V14ZM1 14.5V10.5H0V14.5H1Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 8.5L4.14645 8.14645L4 8.29289V8.5H4.5ZM8.5 4.5L8.85355 4.14645C8.65829 3.95118 8.34171 3.95118 8.14645 4.14645L8.5 4.5ZM10.5 6.5L10.8536 6.85355C11.0488 6.65829 11.0488 6.34171 10.8536 6.14645L10.5 6.5ZM6.5 10.5V11H6.70711L6.85355 10.8536L6.5 10.5ZM4.5 10.5H4C4 10.7761 4.22386 11 4.5 11V10.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM4.85355 8.85355L8.85355 4.85355L8.14645 4.14645L4.14645 8.14645L4.85355 8.85355ZM8.14645 4.85355L10.1464 6.85355L10.8536 6.14645L8.85355 4.14645L8.14645 4.85355ZM10.1464 6.14645L6.14645 10.1464L6.85355 10.8536L10.8536 6.85355L10.1464 6.14645ZM6.5 10H4.5V11H6.5V10ZM5 10.5V8.5H4V10.5H5Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 8.5L4.14645 8.14645L4 8.29289V8.5H4.5ZM8.5 4.5L8.85355 4.14645C8.65829 3.95118 8.34171 3.95118 8.14645 4.14645L8.5 4.5ZM10.5 6.5L10.8536 6.85355C11.0488 6.65829 11.0488 6.34171 10.8536 6.14645L10.5 6.5ZM6.5 10.5V11H6.70711L6.85355 10.8536L6.5 10.5ZM4.5 10.5H4C4 10.7761 4.22386 11 4.5 11V10.5ZM4.85355 8.85355L8.85355 4.85355L8.14645 4.14645L4.14645 8.14645L4.85355 8.85355ZM8.14645 4.85355L10.1464 6.85355L10.8536 6.14645L8.85355 4.14645L8.14645 4.85355ZM10.1464 6.14645L6.14645 10.1464L6.85355 10.8536L10.8536 6.85355L10.1464 6.14645ZM6.5 10H4.5V11H6.5V10ZM5 10.5V8.5H4V10.5H5Z" fill="#1D1929"/>
            </svg>

           
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10.5V10H7V10.5H8ZM7 10.51V11.01H8V10.51H7ZM7 4V8H8V4H7ZM7 10.5V10.51H8V10.5H7ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10.5V10H7V10.5H8ZM7 10.51V11.01H8V10.51H7ZM7 4V8H8V4H7ZM7 10.5V10.51H8V10.5H7Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 12.5V2.5L7.5 7.5L0.5 12.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M7.5 12.5V2.5L14.5 7.5L7.5 12.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M8.5 9.5V5.5L12 7.5L8.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M4.5 9.5V5.5L8 7.5L4.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 9.5V5.5L12 7.5L8.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M4.5 9.5V5.5L8 7.5L4.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.53553 7.53553L7.5 13.5L13.4645 7.53553C14.1275 6.87249 14.5 5.97322 14.5 5.03553C14.5 3.08291 12.9171 1.5 10.9645 1.5C10.0268 1.5 9.12751 1.87249 8.46447 2.53553L7.5 3.5L6.53553 2.53553C5.87249 1.87249 4.97322 1.5 4.03553 1.5C2.08291 1.5 0.5 3.08291 0.5 5.03553C0.5 5.97322 0.872491 6.87249 1.53553 7.53553Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 5.5L7.5 6.5L8.5 5.5C9.05228 4.94772 9.94772 4.94772 10.5 5.5C11.0523 6.05228 11.0523 6.94771 10.5 7.5L7.5 10.5L4.5 7.5C3.94772 6.94772 3.94772 6.05228 4.5 5.5C5.05228 4.94772 5.94771 4.94771 6.5 5.5Z" stroke="#1D1929"/>
            <path d="M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 5.50003L7.5 6.50003L8.5 5.50003C9.05228 4.94774 9.94771 4.94774 10.5 5.50003C11.0523 6.05231 11.0523 6.94774 10.5 7.50003L7.5 10.5L4.5 7.50003C3.94771 6.94774 3.94771 6.05231 4.5 5.50003C5.05228 4.94774 5.94771 4.94774 6.5 5.50003Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1.49999V1.99999H8V1.49999H7ZM8 1.48999V0.98999H7V1.48999H8ZM8 13.5L8 3.99999H7L7 13.5H8ZM8 1.49999V1.48999H7V1.49999H8ZM4 4.99999H7.5V3.99999H4V4.99999ZM2 14H13V13H2V14Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.5V5H8V4.5H7ZM8 4.49V3.99H7V4.49H8ZM8 11V7H7V11H8ZM8 4.5V4.49H7V4.5H8ZM6 8H7.5V7H6V8ZM6 11H9V10H6V11ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35787 11.6421 3.57628e-07 7.5 0V1ZM1 7.5C1 3.91015 3.91015 1 7.5 1V0C3.35787 -3.57628e-07 3.57628e-07 3.35786 0 7.5H1ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C-3.57628e-07 11.6421 3.35786 15 7.5 15V14ZM7.5 15C11.6421 15 15 11.6421 15 7.5H14C14 11.0899 11.0899 14 7.5 14V15Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.49999V4.99999H8V4.49999H7ZM8 4.48999V3.98999H7V4.48999H8ZM8 11L8 6.99999H7L7 11H8ZM8 4.49999V4.48999H7V4.49999H8ZM6 7.99999H7.5V6.99999H6V7.99999ZM6 11H9V9.99999H6V11Z" fill="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 14L4 7.5L11 1" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 4.5L5.5 7.5L8.5 10.5M7.5 14.5C3.63401 14.5 0.499999 11.366 0.5 7.5C0.500001 3.63401 3.63401 0.499999 7.5 0.5C11.366 0.500001 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4L6 7L9 10" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5V3.5C4.5 1.84315 5.84315 0.5 7.5 0.5C9.15685 0.5 10.5 1.84315 10.5 3.5V6.5M2.5 6.5H12.5C13.0523 6.5 13.5 6.94772 13.5 7.5V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V7.5C1.5 6.94772 1.94772 6.5 2.5 6.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6.5H9.5M5.5 6.5C4.94772 6.5 4.5 6.94772 4.5 7.5V10.5C4.5 11.0523 4.94772 11.5 5.5 11.5H9.5C10.0523 11.5 10.5 11.0523 10.5 10.5V7.5C10.5 6.94772 10.0523 6.5 9.5 6.5M5.5 6.5V5.5C5.5 4.39543 6.39543 3.5 7.5 3.5C8.60457 3.5 9.5 4.39543 9.5 5.5V6.5M0.5 7.5C0.500001 3.63401 3.63401 0.499999 7.5 0.5C11.366 0.500001 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.499999 11.366 0.5 7.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 6H9M5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11H9C9.55228 11 10 10.5523 10 10V7C10 6.44772 9.55228 6 9 6M5 6V5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5V6" stroke="#1D1929"/>
            </svg>

          

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.5H11M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.5H11" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 2V13M1.5 2.5V12.5L8.5 7.5L1.5 2.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 5V10M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5ZM4.5 5.5V9.5L8 7.5L4.5 5.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 5V10M4.5 5.5V9.5L8 7.5L4.5 5.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3V12M9.5 3V12" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 5V10M8.5 5V10M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 5V10M8.5 5V10" stroke="#1D1929"/>
            </svg>
<!-- play -->
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.5V2.5L11.5 7.5L4.5 12.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M6.5 9.5V5.5L10 7.5L6.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 9.5V5.5L10 7.5L6.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4V11M4 7.5H11M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 12V10.7361C7.5 9.36566 8.27427 8.11287 9.5 7.5C10.7257 6.88713 11.5 5.61338 11.5 4.24297C11.5 2.19498 9.83978 0.5 7.7918 0.5H7.58498C6.24999 0.5 4.96968 1.03032 4.02569 1.97431L3.5 2.5M7 14.5H8" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9V7.5H8C8.82843 7.5 9.5 6.82843 9.5 6V5.9C9.5 5.1268 8.8732 4.5 8.1 4.5H7.5C6.67157 4.5 6 5.17157 6 6M7 10.5H8M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9V7.5H8C8.82843 7.5 9.5 6.82843 9.5 6V5.9C9.5 5.1268 8.8732 4.5 8.1 4.5H7.5C6.67157 4.5 6 5.17157 6 6M7 10.5H8" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 12.5V2.5L7.5 7.5L14.5 12.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M7.5 12.5V2.5L0.5 7.5L7.5 12.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M6.5 9.5V5.5L3 7.5L6.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M10.5 9.5V5.5L7 7.5L10.5 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9.5V5.5L4.5 7.5L8 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M12 9.5V5.5L8.5 7.5L12 9.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14L11 7.5L4 1" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 10.5L9.5 7.5L6.5 4.5M7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5L10.5 10.5M7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7C9.5 8.38071 8.38071 9.5 7 9.5ZM7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.5L10.5 10.5M7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7C9.5 8.38071 8.38071 9.5 7 9.5Z" stroke="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 12.0405L3.17354 14.3151L4 9.4973L0.5 6.08562L5.33677 5.38324L7.5 1L9.66323 5.38324L14.5 6.08562L11 9.4973L11.8265 14.3151L7.5 12.0405Z" stroke="#1D1929" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9.80416L5.33677 11L5.75 8.46718L4 6.6736L6.41839 6.30434L7.5 4L8.58161 6.30434L11 6.6736L9.25 8.46718L9.66323 11L7.5 9.80416Z" stroke="#1D1929" stroke-linejoin="round"/>
            <path d="M0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C11.366 14.5 14.5 11.366 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5Z" stroke="#1D1929" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9.80416L5.33677 11L5.75 8.46718L4 6.6736L6.41839 6.30434L7.5 4L8.58161 6.30434L11 6.6736L9.25 8.46718L9.66323 11L7.5 9.80416Z" stroke="#1D1929" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 3.5H3.5V11.5H11.5V3.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5Z" stroke="#1D1929"/>
            <path d="M9.5 5.5H5.5V9.5H9.5V5.5Z" stroke="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.5H5.5V9.5H9.5V5.5Z" stroke="#1D1929"/>
            </svg>

           


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.5L7 10L11 5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.5L7 10L11 5" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5V3.5C4.5 1.84315 5.84315 0.5 7.5 0.5C9.15685 0.5 10.5 1.84315 10.5 3.5V4M2.5 6.5H12.5C13.0523 6.5 13.5 6.94772 13.5 7.5V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V7.5C1.5 6.94772 1.94772 6.5 2.5 6.5Z" stroke="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6.5H9.5C10.0523 6.5 10.5 6.94772 10.5 7.5V10.5C10.5 11.0523 10.0523 11.5 9.5 11.5H5.5C4.94772 11.5 4.5 11.0523 4.5 10.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5ZM5.5 6.5V5.62132C5.5 4.44975 6.44975 3.5 7.62132 3.5C8.18393 3.5 8.7235 3.7235 9.12132 4.12132L9.5 4.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>


            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6.5H9.5C10.0523 6.5 10.5 6.94772 10.5 7.5V10.5C10.5 11.0523 10.0523 11.5 9.5 11.5H5.5C4.94772 11.5 4.5 11.0523 4.5 10.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5ZM5.5 6.5V5.62132C5.5 4.44975 6.44975 3.5 7.62132 3.5C8.18393 3.5 8.7235 3.7235 9.12132 4.12132L9.5 4.5" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L7.5 4L14 11" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 8.5L7.5 5.5L4.5 8.5M0.5 7.5C0.500001 3.63401 3.63401 0.499999 7.5 0.5C11.366 0.500001 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.499999 11.366 0.5 7.5Z" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 9L7 6L4 9" stroke="#1D1929" stroke-linecap="square"/>
            </svg>

            

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 4.5L10.5 10.5M4.5 10.5L10.5 4.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="#1D1929"/>
            </svg>

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 4.5L10.5 10.5M4.5 10.5L10.5 4.5" stroke="#1D1929"/>
            </svg>

        </div>    
    </div>
</template>



<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    /* max-width: 900px; */
}

.icons{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(20, 1fr);
    gap: 2rem;
}
@media  (min-width:540px) {
    .icons{
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(16, 1fr);
    }
}

@media  (min-width:768px) {
    .icons{
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(14, 1fr);
    }
}

@media  (min-width:1200px) {
    .icons{
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }
}

@media  (min-width:1400px) {
    .icons{
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(11, 1fr);
    }
}


.icons svg{
    cursor: pointer;
}
</style>