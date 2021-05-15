let activeColor = 'black';
const main = document.querySelectorAll('main')[0];
const buttons = document.querySelectorAll('button');


const genColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

const setUp = () => {

    for (let i = 0; i < 10; i++) {
        for (let a = 0; a < 10; a++) {
            const div = document.createElement('div');
            main.append(div);
        }
    }

    const divs = document.querySelectorAll('div');

    divs.forEach((el) => {
        el.addEventListener('mouseover', function (e) {
            if (activeColor === 'black') {
                this.style.backgroundColor = 'black';
                this.style.borderColor = 'black';
                return;
            }
            if (activeColor === 'white') {
                this.style.backgroundColor = 'white';
                this.style.borderColor = 'white';
                return;
            }
            let color = genColor()
            this.style.backgroundColor = color;
            this.style.borderColor = color;

        })
    })

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            activeColor = this.id;
        })
    })

}

setUp();