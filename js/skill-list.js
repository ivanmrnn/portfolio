const skillsData = {
    frontend: [
        { 
            name: 'HTML', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><path fill="#e44d26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#f16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#ebebeb" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg>'
        },
        { 
            name: 'CSS', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>'
        },
        { 
            name: 'JavaScript', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"/></svg>'
        },
    ],
    backend: [
        { 
            name: 'GO', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><g fill="#00acd7" fill-rule="evenodd"><path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zm-9.152 5.575c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zm62.91-12.242c-3.819.97-6.425 1.697-10.182 2.666c-.91.243-.97.303-1.758-.606c-.909-1.03-1.576-1.697-2.848-2.303c-3.819-1.878-7.516-1.333-10.97.91c-4.121 2.666-6.242 6.605-6.182 11.514c.06 4.849 3.394 8.849 8.182 9.516c4.121.545 7.576-.91 10.303-4c.545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818c.788-1.879 2.242-5.03 3.09-6.606c.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91c-.667 4.363-2.303 8.363-4.97 11.878c-4.364 5.758-10.06 9.333-17.273 10.303c-5.939.788-11.454-.364-16.302-4c-4.485-3.394-7.03-7.879-7.697-13.454c-.788-6.606 1.151-12.546 5.151-17.758c4.303-5.636 10-9.212 16.97-10.485c5.697-1.03 11.151-.363 16.06 2.97c3.212 2.121 5.515 5.03 7.03 8.545c.364.546.122.849-.606 1.03z"/><path fill-rule="nonzero" d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334c-3.576-3.09-5.818-7.03-6.545-11.697c-1.091-6.848.787-12.909 4.909-18.302c4.424-5.819 9.757-8.849 16.97-10.122c6.181-1.09 12-.484 17.272 3.091c4.788 3.273 7.757 7.697 8.545 13.515c1.03 8.182-1.333 14.849-6.97 20.546c-4 4.06-8.909 6.606-14.545 7.757c-1.636.303-3.273.364-4.848.546m14.424-24.485c-.06-.788-.06-1.394-.182-2c-1.09-6-6.606-9.394-12.363-8.06c-5.637 1.272-9.273 4.848-10.606 10.545c-1.091 4.727 1.212 9.515 5.575 11.454c3.334 1.455 6.667 1.273 9.879-.363c4.788-2.485 7.394-6.364 7.697-11.576"/></g></svg>'
        },
    ],
    others: [
        { 
            name: 'Figma', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg>'
        },
        { 
            name: 'Git', 
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#dd4c35" d="M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"/><path fill="#fff" d="m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"/></svg>'
        },
    ]
};

function createSkillHTML(skill, index) {
    return `
        <div class="skills-container" data-name="${skill.name}" style="left: ${index * 160}px; top: 0;">
            <div class="skills-image">
            ${skill.icon}
            </div>
            <h4 class="skills-name">${skill.name}</h4>
        </div>
    `;
}

function setMinimumContainerHeight() {
    const skillsContainer = document.querySelector('.all-skills-container');
    const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.others];
    const containerWidth = skillsContainer.offsetWidth;
    const skillWidth = 160; 
    const skillsPerRow = Math.floor(containerWidth / skillWidth);
    const rows = Math.ceil(allSkills.length / skillsPerRow);
    const minHeight = rows * 200; 

    skillsContainer.style.minHeight = `${minHeight}px`;
}

function renderSkills() {
    const skillsContainer = document.querySelector('.all-skills-container');
    skillsContainer.innerHTML = '';
    
    const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.others];
    allSkills.forEach((skill, index) => {
        skillsContainer.innerHTML += createSkillHTML(skill, index);
    });

    centerSkills();
    setMinimumContainerHeight();
}

function centerSkills() {
    const skillsContainer = document.querySelector('.all-skills-container');
    const skills = skillsContainer.querySelectorAll('.skills-container');

    if (skills.length > 0) {
        const containerWidth = skillsContainer.offsetWidth;
        const skillWidth = 160;
        const skillsPerRow = Math.floor(containerWidth / skillWidth);
        
        const rows = [];
        for (let i = 0; i < skills.length; i += skillsPerRow) {
            rows.push(Array.from(skills).slice(i, i + skillsPerRow));
        }

        rows.forEach((row, rowIndex) => {
            const rowWidth = row.length * skillWidth;
            const offsetX = (containerWidth - rowWidth) / 2;

            row.forEach((skill, colIndex) => {
                const left = offsetX + colIndex * skillWidth;
                const top = rowIndex * 200; 

                skill.style.left = `${left}px`;
                skill.style.top = `${top}px`;
            });
        });

        const minHeight = parseInt(skillsContainer.style.minHeight) || 200;
        const newHeight = Math.max(rows.length * 200, minHeight);
        skillsContainer.style.height = `${newHeight}px`;
    }
}

function animateSkills(category) {
    const skillsContainer = document.querySelector('.all-skills-container');
    const skills = skillsContainer.querySelectorAll('.skills-container');
    const targetSkills = category === 'all' 
      ? [...skillsData.frontend, ...skillsData.backend, ...skillsData.others]
      : skillsData[category];

    const visibleSkills = [];
    skills.forEach((skillElement) => {
        const skillName = skillElement.getAttribute('data-name');
        const isVisible = targetSkills.some(skill => skill.name === skillName);
        
        if (isVisible) {
            skillElement.classList.remove('hidden');
            visibleSkills.push(skillElement);
        } else {
            skillElement.classList.add('hidden');
        }
    });

    const containerWidth = skillsContainer.offsetWidth;
    const skillWidth = 160; 
    const skillsPerRow = Math.floor(containerWidth / skillWidth);
    
    const rows = [];
    for (let i = 0; i < visibleSkills.length; i += skillsPerRow) {
        rows.push(visibleSkills.slice(i, i + skillsPerRow));
    }

    rows.forEach((row, rowIndex) => {
        const rowWidth = row.length * skillWidth;
        const offsetX = (containerWidth - rowWidth) / 2;

        row.forEach((skillElement, colIndex) => {
            const left = offsetX + colIndex * skillWidth;
            const top = rowIndex * 200; 

            skillElement.style.left = `${left}px`;
            skillElement.style.top = `${top}px`;
        });
    });

    const minHeight = parseInt(skillsContainer.style.minHeight) || 200;
    const newHeight = Math.max(rows.length * 200, minHeight);
    skillsContainer.style.height = `${newHeight}px`;
}

function showTab(tabIndex) {
    const categories = ['all', 'frontend', 'backend', 'others'];
    animateSkills(categories[tabIndex - 1]);

    // Update active tab
    document.querySelectorAll('.skills-tab').forEach((tab, index) => {
        const h4 = tab.querySelector('h4');
        if (index + 1 === tabIndex) {
            tab.classList.add('tab_active');
            h4.classList.add('bold');
        } else {
            tab.classList.remove('tab_active');
            h4.classList.remove('bold');
        }
    });
}

// Initial render
renderSkills();

window.addEventListener('resize', () => {
    setMinimumContainerHeight();
    centerSkills();
});


