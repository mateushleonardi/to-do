let inputs = document.getElementsByClassName('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        this.style.paddingBottom = '10px';
        if (this.scrollHeight > this.clientHeight) {
            var paddingNeeded = this.scrollHeight - this.clientHeight;
            this.style.paddingBottom = paddingNeeded + 'px';
        }
    });

    for (let i = 0; i < inputs.length; i++) {
        let currentHeight = parseInt(inputs[i].style.height) || 100;
        inputs[i].addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.code === 'Enter') {
                currentHeight += 300;
                currentHeight = Math.min(currentHeight, 300);
                this.style.height = currentHeight + 'px';
            } else if (event.key === 'Backspace' || event.code === 'Backspace') {
                currentHeight -= 100;
                currentHeight = Math.max(currentHeight, 50);
                this.style.height = currentHeight + 'px';
            }
        });
    }
}



