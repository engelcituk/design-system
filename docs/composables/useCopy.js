import { createToaster } from "@meforma/vue-toaster"
import { gradients } from "../data/colors"

const toaster = createToaster()

const useCopy = () => {

    const copyContent = async (elementToCopy) => {
        try {
            const toCopy = gradients[elementToCopy]
            await navigator.clipboard.writeText(toCopy)
            toaster.show(`${elementToCopy} copiado`,{type: 'success', position: 'top-right', duration: 2000})
        } catch($e) {
            console.log($e)
        }
    }

    return {
        copyContent
    }

  }

export default useCopy