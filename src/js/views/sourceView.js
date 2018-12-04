export class SourceView {

    constructor () {
        this.showArticlesForSelectedSource = null;
    }

    get selectedSource() {
        return document.getElementById("sourceSelected").value;
    }

    addListeners() {
        document.getElementById("showNewsButton").addEventListener("click", this.showArticlesForSelectedSource);
    }

    showSource(sourceDetails) {
        document.getElementById("sourceSelected").innerHTML += sourceDetails;
    }
    
    getSourceDetails({ id, name }) {
        return `<option value="${id}">${name}</option>`
    }

    render(sources) {
        sources.map(this.getSourceDetails).forEach(this.showSource);
    }
}