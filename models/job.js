const Jobs = []
module.exports = class Job {
    constructor(f) {
        this
    }

    save() {
        Jobs.push(this);
    }

    static fetchall() {
        return this.Jobs;
    }
}