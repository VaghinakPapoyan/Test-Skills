let startX = null;
let mouseDown = false;
let canMove = false;
let minDiff = 100;

export const mouseStart = e => 
{
    startX = e.clientX || e.touches[0]?.clientX;
    mouseDown = true;
    canMove = true;
}

export const mouseEnd = e => 
{
    startX = null;
    mouseDown = false;
}

export const mouseMove = e => 
{
    return setSidebarActive => 
    {
        if(mouseDown && canMove && startX)
        {
            const diffX = (e.clientX || e.touches[0]?.clientX) - startX;
            if(diffX > minDiff)
            {
                setSidebarActive(true)
                canMove = false;
            }
            if(diffX < -minDiff)
            {
                setSidebarActive(false)
                canMove = false;
            }
        }
    }
}