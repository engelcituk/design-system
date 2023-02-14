import Swal from 'sweetalert2'
import { gradients, baseColors, colorShades } from "../data/colors"

// const toaster = createToaster()

const useCopy = () => {

    const copyGradient = async ( gradientToCopy ) => {
        try {
            const toCopy = gradients[gradientToCopy]
            
            await navigator.clipboard.writeText(toCopy)
            Swal.fire({
                title: `Gradiente ${gradientToCopy} copiado`,
                text: `${toCopy}`,
                icon: 'success',
                confirmButtonText: 'ok',
                // timer: 2500
              })
        } catch($e) {
            console.log($e)
        }
    }

    const copyBaseColor = async ( colorBase ) => {
        try {
            const toCopy = baseColors[colorBase]
            
            await navigator.clipboard.writeText(toCopy.code)

            Swal.fire({
                title: `${toCopy.name}  `,
                text: `Color base ${toCopy.name} ${toCopy.code} copiado `,
                icon: 'success',
                confirmButtonText: 'ok',
                // timer: 2500
            })
        } catch($e) {
            console.log($e)
        }
    }

    const copyShadeColor = async ( colorBase, variant ) => {
        try {
            const toCopy = colorShades[colorBase][variant]
            
            await navigator.clipboard.writeText(toCopy.code)
            Swal.fire({
                title: `${toCopy.name}  `,
                text: `Variante color ${toCopy.name} ${toCopy.code} copiado `,
                icon: 'success',
                confirmButtonText: 'ok',
                // timer: 2500
            })
        } catch($e) {
            console.log($e)
        }
    }


    return {
        copyGradient,
        copyBaseColor,
        copyShadeColor
    }

  }

export default useCopy