import { animate } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-menu');
    const menuContent = document.querySelector('.menu-content');
    
    let isExpanded = false;

    toggleBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        // Animate the sidebar width
        animate(sidebar, {
            width: isExpanded ? '250px' : '60px',
            duration: 500,
            ease: 'outExpo'
        });

        // Animate the menu items visibility
        animate(menuContent, {
            opacity: isExpanded ? 1 : 0,
            duration: 300,
            ease: 'linear',
            delay: isExpanded ? 150 : 0,
            onBegin: () => {
                if (isExpanded) {
                    menuContent.style.pointerEvents = 'auto';
                }
            },
            onComplete: () => {
                if (!isExpanded) {
                    menuContent.style.pointerEvents = 'none';
                }
            }
        });
    });
});
