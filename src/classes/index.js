export function TemplateEngine(tpl, data) {
    var re = /<%([^%>]+)?%>/g, match;
    while(match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1].trim()])
    }
    return tpl;
}

export class View {

    constructor(options) {
        this.model = options.model;
        this.template = options.template;
    }

    render() {
        return TemplateEngine(this.template, this.model.toJSON());
    }

}

export class Model {

    constructor(properties) {
        Model.count++;
        this.properties = properties;
    }

    static count = 0;

    toJSON() {
        return this.properties;
    }

}

export class ExpireView extends View {

    constructor(options) {
        super(options);
        this.count = options.count;
    }

    countdown() {
        this.interval = setInterval(()=>{
            if(this.count === 0) {
                return clearInterval(this.interval);
            }
            this.render();
            this.count--;
        },1000)
    }

    render() {
        const compiled = super.render();
        console.log(`${compiled} (${this.count})`);
    }

}



/*****
* DEMO
******
******

    import {Model, View, ExpireView} from './classes';

    const callum = new Model({
        name : 'callum'
    });

    const john = new Model({
        name : 'john'
    });

    console.log(Model.count);

    const view = new View({
        model: callum,
        template: 'Hello, my name is <% name %>'
    });

    console.log(view.render());

    const expireView = new ExpireView({
        model: john,
        template: 'Hello, my name is <% name %>',
        count : 10
    });

    console.log(expireView.countdown());

*/