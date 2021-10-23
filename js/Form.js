class Form {
    constructor() {


    }

    display() {
        var title = createElement('h2', 'Jogo de corrida de carros multijogador')
        // title.html("Jogo de corrida de carros multijogador")
        title.position(130, 0)
        var input = createInput('Name')
        var button = createButton('Play')
        var greating = createElement('h3')

        input.position(130, 160)
        button.position(180, 200)

    }

}