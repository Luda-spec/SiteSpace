const placeholders = document.querySelectorAll('.placeholder');
const items = document.querySelectorAll('.item');
let draggedItem = null;
items.forEach(item => 
{
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
});
placeholders.forEach(placeholder => 
{
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('drop', dragdrop);
});
function dragstart(event) 
{
    draggedItem = event.target;
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}
function dragend(event) 
{
    event.target.classList.remove('hold', 'hide');
}
function dragover(event) 
{
    event.preventDefault();
    const currentItem = event.target.closest('.item');
    if (currentItem && currentItem !== draggedItem) 
    {
        event.dataTransfer.dropEffect = 'move';
    }
}
function dragdrop(event) 
{
    event.preventDefault();
    const currentPlaceholder = event.target.closest('.placeholder');
    const currentItem = draggedItem.parentNode;
    if (currentPlaceholder && currentPlaceholder !== currentItem) 
    {
        if (currentPlaceholder.contains(draggedItem)) return;
        const parent = draggedItem.parentNode;
        const siblingItems = Array.from(parent.children);
        const draggedItemIndex = siblingItems.indexOf(draggedItem);
        if (draggedItemIndex === siblingItems.length - 1) 
        {
            currentPlaceholder.appendChild(draggedItem);
        } else 
        {
            siblingItems.slice(draggedItemIndex).forEach(item => 
            {
                currentPlaceholder.appendChild(item);
            });
        }
    }
}
