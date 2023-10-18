    const content = document.getElementById('content');

    const button = document.querySelector('button[id="add"]')

    button.addEventListener('click', addEmployee)

    function addEmployee() {
      let fullName: HTMLInputElement = document.querySelector('#fullName')
      let register: HTMLInputElement = document.querySelector('#register')
      let admin = <HTMLInputElement>document.querySelector('input[name="admin"]:checked')
      let active: HTMLInputElement = document.querySelector('#active')

      content.innerHTML += <string>createLine(
        fullName.value,
        +register.value,
        admin.value,
        active.checked
      )
    }
 
    function createLine(fullName: string, nrRegister: number, admin: string, active: boolean) {
      return `<br>
      ${fullName}<br>
      ${nrRegister}<br>
      ${admin}<br>
      ${active}<br>
      `;
    }