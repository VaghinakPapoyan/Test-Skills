import { keyframes } from 'styled-components'

export const AnimateSlide = (order, margin, length, next) => keyframes` 
    from
    {
    
        ${
            next !== null
            ?
            next
            ?
            (order === 0 && `opacity: 0; left: ${Number(margin) * 3}%; transform: translateX(300%) translateY(-50%);`) 
            || 
            (order - 1 === 0 && `left: ${-Number(margin)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order - 1 === 1 && "left: 0;") 
            || 
            (order - 1 === 2 && `left: ${Number(margin)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order - 1 === 3 && `left: ${Number(margin) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            || 
            (order - 1 === 4 && `left: ${Number(margin) * 3}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`
            :
            (order + 1 === 1 && "left: 0;") 
            || 
            (order + 1 === 2 && `left: ${Number(margin)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order + 1 === 3 && `left: ${Number(margin) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            || 
            (order + 1 === 4 && `left: ${Number(margin) * 3}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`
            :
            (order === 0 && `opacity: 0; left: ${-Number(margin)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            || 
            (order === 4 && `left: ${Number(margin) * 3}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`)  
            ||
            `left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`
        }
    }
    to
    {
        ${
            (order === 0 && `opacity: 0; left: ${-Number(margin)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            || 
            (order === 4 && `left: ${Number(margin) * 3}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`)  
            ||
            `left: ${Number(margin) * 4}%; transform: translateX(400%) translateY(-50%);`
        }
    }
`

export const AnimateSlide1 = (order, margin1, length, next) => keyframes` 
    from
    {

        ${
            next !== null
            ?
            next
            ?
            (order === 0 && `opacity: 0; left: ${Number(margin1) * 3}%; transform: translateX(300%) translateY(-50%);`) 
            || 
            (order - 1 === 0 && `left: ${-Number(margin1)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order - 1 === 1 && "left: 0;") 
            || 
            (order - 1 === 2 && `left: ${Number(margin1)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order - 1 === 3 && `left: ${Number(margin1) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            `left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`
            :
            (order + 1 === 1 && "left: 0;") 
            || 
            (order + 1 === 2 && `left: ${Number(margin1)}%; transform: translateX(100%) translateY(-50%);`)  
            ||
            (order + 1 === 3 && `left: ${Number(margin1) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            `left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`
            :
            (order === 0 && `opacity: 0; left: ${-Number(margin1)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin1)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin1) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`
        }
    }
    to
    {
        ${
            (order === 0 && `opacity: 0; left: ${-Number(margin1)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin1)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin1) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin1) * 4}%; transform: translateX(300%) translateY(-50%);`
        }
    }
`

export const AnimateSlide2 = (order, margin2, length, next) => keyframes` 
    from
    {

        ${
            next !== null
            ?
            next
            ?
            (order === 0 && `opacity: 0; left: ${Number(margin2) * 3}%; transform: translateX(300%) translateY(-50%);`) 
            || 
            (order - 1 === 0 && `left: ${-Number(margin2)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order - 1 === 1 && "left: 0;") 
            || 
            (order - 1 === 2 && `left: ${Number(margin2)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order - 1 === 3 && `left: ${Number(margin2) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            `left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`
            :
            (order + 1 === 1 && "left: 0;") 
            || 
            (order + 1 === 2 && `left: ${Number(margin2)}%; transform: translateX(100%) translateY(-50%);`)  
            ||
            (order + 1 === 3 && `left: ${Number(margin2) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            `left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`
            :
            (order === 0 && `opacity: 0; left: ${-Number(margin2)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin2)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin2) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`
        }
    }
    to
    {
        ${
            (order === 0 && `opacity: 0; left: ${-Number(margin2)}%; transform: translateX(-100%) translateY(-50%);`) 
            || 
            (order === 1 && "left: 0;") 
            || 
            (order === 2 && `left: ${Number(margin2)}%; transform: translateX(100%) translateY(-50%);`)  
            || 
            (order === 3 && `left: ${Number(margin2) * 2}%; transform: translateX(200%) translateY(-50%);`)   
            ||
            (order === length - 1 && `opacity: 0; left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`)  
            ||
            `left: ${Number(margin2) * 4}%; transform: translateX(300%) translateY(-50%);`
        }
    }
`