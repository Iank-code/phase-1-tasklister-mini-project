document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById('tasks')
  const submitBtn = document.getElementsByTagName('input')[1]
  const form = document.getElementsByTagName('input')[0]
  submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    //input variable
    const addedValue = document.getElementById('new-task-description').value

    // creating element p && removeBtn
    var p = document.createElement('p')
    p.textContent = `${addedValue} `
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'x'
    removeBtn.style.cursor = 'pointer'
    // appending button to p
    p.appendChild(removeBtn)
    // appending p to tasks
    tasks.appendChild(p)

    // making removeBtn be able to remove p
    removeBtn.addEventListener('click', removeParent)
  })

  function removeParent(e){
    e.target.parentNode.remove()
  }
});

// 
// 