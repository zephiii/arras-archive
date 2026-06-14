// Code, not implemented for woomy, just standard.
class MazeRemap {
    constructor(maze) {
        this._ref = JSON.parse(JSON.stringify(maze));
        this.maze = maze;
        this.blocks = [];
    }
    get width() {
        return this.maze.length;
    }
    get height() {
        return this.maze.length === 0 ? 0 : this.maze[0].length;
    }
    findBiggest() {
        let best = {
            x: 0,
            y: 0,
            size: 0
        };
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (!this.maze[x][y]) {
                    continue;
                }
                let size = 1;
                loop: while (x + size < this.width && y + size < this.height) {
                    for (let i = 0; i <= size; i++) {
                        if (!this.maze[x + size][y + i] || !this.maze[x + i][y + size]) {
                            break loop
                        }
                    }
                    size++
                }
                if (size > best.size) {
                    best = {
                        x: x,
                        y: y,
                        size: size
                    };
                }
            }
        }
        for (let x = 0; x < best.size; x++) {
            for (let y = 0; y < best.size; y++) {
                this.maze[best.x + x][best.y + y] = false;
            }
        }
        return {
            x: best.x,
            y: best.y,
            size: best.size,
            width: 1,
            height: 1
        };
    }
    lookup(x, y, size, width, height) {
        return this.blocks.find(cell => (cell.x === x && cell.y === y && cell.size === size && cell.width === width && cell.height === height));
    }
    remove(id) {
        this.blocks = this.blocks.filter(entry => entry.id != id);
        return this.blocks;
    }
    remap() {
        this.blocks = [];
        let biggest;
        while ((biggest = this.findBiggest()) && !this.blocks.includes(biggest) && biggest.size > 0) {
            this.blocks.push(biggest);
        }
        this.blocks.forEach((block, i) => {
            block.id = i;
        });
        let i = 0;
        while (i < this.blocks.length) {
            const my = this.blocks[i];
            if (Math.random() > .5) {
                let width = 1;
                for (let x = my.x + my.size; x <= this.width - my.size; x += my.size) {
                    const other = this.lookup(x, my.y, my.size, my.width, my.height);
                    if (!other) {
                        break;
                    }
                    this.remove(other.id);
                    width++;
                }
                my.width = width;
                let height = 1;
                for (let y = my.y + my.size; y <= this.height - my.size; y += my.size) {
                    const other = this.lookup(my.x, y, my.size, my.width, my.height);
                    if (!other) {
                        break;
                    }
                    this.remove(other.id);
                    height++;
                }
                my.height = height;
            } else {
                let height = 1;
                for (let y = my.y + my.size; y <= this.height - my.size; y += my.size) {
                    const other = this.lookup(my.x, y, my.size, my.width, my.height);
                    if (!other) {
                        break;
                    }
                    this.remove(other.id);
                    height++;
                }
                my.height = height;
                let width = 1;
                for (let x = my.x + my.size; x <= this.width - my.size; x += my.size) {
                    const other = this.lookup(x, my.y, my.size, my.width, my.height);
                    if (!other) {
                        break;
                    }
                    this.remove(other.id);
                    width++;
                }
                my.width = width;
            }
            i++;
        }
        return this.blocks;
    }
}
class MazeGenerator {
    constructor(options = {}) {
        if (options.erosionPattern == null) {
            options.erosionPattern = {
                amount: .5,
                getter: (i, max) => {
                    if (i > max * .6) {
                        return [Math.random() > .3 ? 2 : Math.random() > .5 ? 1 : 0, Math.random() > .1 ? 2 : (Math.random() * 2 | 0)];
                    } else {
                        return [+(Math.random() > .8), (Math.random() * 3 | 0)];
                    }
                }
            };
        } else {
            if (options.erosionPattern.amount == null) {
                options.erosionPattern.amount = .5;
            }
            if (options.erosionPattern.getter == null) {
                options.erosionPattern.getter = (i, max) => {
                    if (i > max * .5) {
                        return [(Math.random() * 3 | 0), 2];
                    } else {
                        return [(Math.random() * 2 | 0), (Math.random() * 2 | 0) * 2];
                    }
                };
            }
        }
        this.options = options;
        this.maze = options.mapString != null ? this.parseMapString(options.mapString) : JSON.parse(JSON.stringify(Array(options.width || 32).fill(Array(options.height || 32).fill(true))));
        if (options.mapString == null) {
            this.clearRing(0);
            this.clearRing(5);
            let cx = this.width / 2 | 0,
                cy = this.height / 2 | 0,
                cs = this.width / 5 | 0;
            if (cs % 2) {
                cs++;
            }
            for (let i = cx - cs / 2; i < cx + cs / 2; i++) {
                for (let j = cy - cs / 2; j < cy + cs / 2; j++) {
                    this.maze[i | 0][j | 0] = false;
                }
            }
        }
        const max = this.maze.flat().length * options.erosionPattern.amount;
        for (let i = 0; i < max; i++) {
            this.randomErosion(...options.erosionPattern.getter(i, max));
        }
    }
    get width() {
        return this.maze.length;
    }
    get height() {
        return this.maze[0].length;
    }
    parseMapString(mapString) {
        const map = mapString.trim().split('\n').map(r => r.trim().split('').map(r => r === '#' ? 1 : r === '@'));
        return Array(map[0].length).fill().map((_, y) => Array(map.length).fill().map((_, x) => map[x][y]));
    }
    randomPosition(typeSearch) {
        let x = Math.floor(Math.random() * this.width),
            y = Math.floor(Math.random() * this.height);
        while (this.maze[x][y] != typeSearch) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
        }
        return [x, y];
    }
    clearRing(dist) {
        for (let i = dist; i < this.width - dist; i++) {
            this.maze[i][dist] = false;
            this.maze[i][this.height - 1 - dist] = false;
        }
        for (let i = dist; i < this.height - dist; i++) {
            this.maze[dist][i] = false;
            this.maze[this.width - 1 - dist][i] = false;
        }
    }
    randomErosion(side, corner) {
        for (let i = 0; i < 750; i++) {
            const [x, y] = this.randomPosition(false);
            if ((x === 0 || x === this.width - 1) && (y === 0 || y === this.height - 1)) {
                continue;
            }
            let dir = Math.random() * 4 | 0;
            if (x === 0) {
                dir = 0;
            } else if (y === 0) {
                dir = 1;
            } else if (x === this.width - 1) {
                dir = 2;
            } else if (y === this.height - 1) {
                dir = 3;
            }
            let tx = dir === 0 ? x + 1 : dir === 2 ? x - 1 : x,
                ty = dir === 1 ? y + 1 : dir === 3 ? y - 1 : y;
            if (this.test(tx, ty) !== true) {
                continue;
            }
            if (corner !== null) {
                let left = this.maze[dir === 2 || dir === 3 ? x - 1 : x + 1][dir === 0 || dir === 3 ? y - 1 : y + 1],
                    right = this.maze[dir === 1 || dir === 2 ? x - 1 : x + 1][dir === 2 || dir === 3 ? y - 1 : y + 1];
                if ((corner === true && (left || right)) || (corner === +left + +right)) {} else {
                    continue;
                }
            }
            if (side !== null) {
                let left = this.maze[dir === 3 ? x + 1 : dir === 1 ? x - 1 : x][dir === 0 ? y + 1 : dir === 2 ? y - 1 : y],
                    right = this.maze[dir === 1 ? x + 1 : dir === 3 ? x - 1 : x][dir === 2 ? y + 1 : dir === 0 ? y - 1 : y];
                if ((side === true && (left || right)) || (side === +left + +right)) {} else {
                    continue;
                }
            }
            this.maze[tx][ty] = false;
            return;
        }
    }
    test(x, y) {
        return this.maze[x][y];
    }
    toString() {
        let output = ``;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                output += this.maze[x][y] === 1 ? "#" : this.maze[x][y] ? "@" : "-";
            }
            output += "\n";
        }
        return output;
    }
}
class CaveMazeGenerator {
    constructor(options = {}) {
        this.options = options;
        this.maze = options.mapString != null ? this.parseMapString(options.mapString) : JSON.parse(JSON.stringify(Array(options.width || 32).fill(Array(options.height || 32).fill(false))));
        if (options.mapString == null) {
            this.clearRing(0);
            this.clearRing(5);
            let cx = this.width / 2 | 0,
                cy = this.height / 2 | 0,
                cs = this.width / 5 | 0;
            if (cs % 2) {
                cs++;
            }
            for (let i = cx - cs / 2; i < cx + cs / 2; i++) {
                for (let j = cy - cs / 2; j < cy + cs / 2; j++) {
                    this.maze[i | 0][j | 0] = false;
                }
            }
        }
        this.run(this.maze.flat().length * .3);
    }
    get width() {
        return this.maze.length;
    }
    get height() {
        return this.maze[0].length;
    }
    parseMapString(mapString) {
        const map = mapString.trim().split('\n').map(r => r.trim().split('').map(r => r === '#' ? 1 : r === '@'));
        return Array(map[0].length).fill().map((_, y) => Array(map.length).fill().map((_, x) => map[x][y]));
    }
    randomPosition(typeSearch) {
        let x = Math.floor(Math.random() * this.width),
            y = Math.floor(Math.random() * this.height);
        while (this.maze[x][y] != typeSearch) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
        }
        return [x, y];
    }
    clearRing(dist) {
        for (let i = dist; i < this.width - dist; i++) {
            this.maze[i][dist] = false;
            this.maze[i][this.height - 1 - dist] = false;
        }
        for (let i = dist; i < this.height - dist; i++) {
            this.maze[dist][i] = false;
            this.maze[this.width - 1 - dist][i] = false;
        }
    }
    getDistance(p1, p2) {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }
    run(amount) {
        let clumps = [];
        for (let i = 0; i < amount * .04; i++) {
            let size = 1 + Math.round(Math.random()),
                x, y, i = 100;
            do {
                [x, y] = this.randomPosition(0);
            } while (clumps.some(clump => clump.id !== i && this.getDistance(clump, {
                    x,
                    y
                }) < clump.size + size + i / 7.5) && i--);
            clumps.push({
                x,
                y,
                size,
                id: i
            });
        }
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (clumps.some(clump => this.getDistance(clump, {
                        x,
                        y
                    }) < clump.size)) {
                    this.maze[x][y] = true;
                }
            }
        }
        mainAddingLoop: while (this.maze.flat().filter(cell => !!cell).length < amount) {
            this.disposeOfBadAreas();
            if (this.maze.flat().filter(cell => !!cell).length > amount) {
                break mainAddingLoop;
            }
            xAddingLoop: for (let x = 1; x < this.width - 1; x++) {
                yAddingLoop: for (let y = 1; y < this.height - 1; y++) {
                    if (Math.random() > .4 && ([
                            this.maze[x + 1][y],
                            this.maze[x - 1][y],
                            this.maze[x][y + 1],
                            this.maze[x][y - 1]
                        ].filter(pos => !!pos).length === 1 || Math.random() > .95)) {
                        this.maze[x][y] = true;
                    }
                    if (this.maze.flat().filter(cell => !!cell).length > amount) {
                        break yAddingLoop;
                    }
                }
                if (this.maze.flat().filter(cell => !!cell).length > amount) {
                    break xAddingLoop;
                }
            }
        }
        this.disposeOfBadAreas();
    }
    disposeOfBadAreas() {
        this.clearRing(0);
        for (let x = 1; x < this.width - 1; x++) {
            for (let y = 1; y < this.height - 1; y++) {
                if (this.maze[x][y] === false && [
                        this.maze[x + 1][y],
                        this.maze[x - 1][y],
                        this.maze[x][y + 1],
                        this.maze[x][y - 1]
                    ].filter(pos => !!pos).length > 0) {
                    let floodResult = this.floodFill(x, y, false);
                    if (floodResult.fill) {
                        floodResult.positions.forEach(position => {
                            this.maze[position.x][position.y] = true;
                        });
                    }
                }
            }
        }
    }
    floodFill(x, y, type = 1) {
        let visited = [];
        let isShit = true;
        let visitNeighbors = (x, y) => {
            if (visited.some(cell => cell.x === x && cell.y === y)) {
                return;
            }
            visited.push({
                x,
                y
            });
            if (x + 1 >= this.width || y + 1 >= this.height || x - 1 < 0 || y - 1 < 0) {
                isShit = false;
                return;
            }
            if (!!this.maze[x + 1][y] === type) {
                visitNeighbors(x + 1, y);
            }
            if (!!this.maze[x - 1][y] === type) {
                visitNeighbors(x - 1, y);
            }
            if (!!this.maze[x][y + 1] === type) {
                visitNeighbors(x, y + 1);
            }
            if (!!this.maze[x][y - 1] === type) {
                visitNeighbors(x, y - 1);
            }
        }
        visitNeighbors(x, y);
        return {
            fill: isShit,
            positions: visited
        };
    }
}
/*
 * KEY
 * Obstacle - 0
 * Empty - 1
 * Start - 2
 * Goal - 3
 */
class Pathfinder {
    constructor(maze) {
        this._ref = maze;
    }
    reset() {
        this.grid = this._ref.map(row => row.map(entry => !!entry ? "Obstacle" : "Empty"));
    }
    findPath(start, goal) {
        this.reset();
        this.grid[start.x][start.y] = "Start";
        this.grid[goal.x][goal.y] = "Goal";
        const queue = [{
            x: start.x,
            y: start.y,
            path: [],
            status: "Start"
        }];
        while (queue.length) {
            const location = queue.shift();
            for (let i = 0; i < 4; i++) {
                const newLocation = this.explore(location, ["North", "East", "South", "West"][i]);
                switch (newLocation.status) {
                case "Goal":
                    return this.construct(newLocation.path, start);
                case "Valid":
                    queue.push(newLocation);
                    break;
                }
            }
        }
        return this.construct(false, start);
    }
    construct(foundPath, position) {
        let path = [];
        if (foundPath === false) {
            return [
                [position.x, position.y]
            ];
        }
        for (let dir of foundPath) {
            switch (dir) {
            case "North":
                position.y--;
                break;
            case "South":
                position.y++;
                break;
            case "West":
                position.x++;
                break;
            case "East":
                position.x--;
                break;
            }
            path.push([position.x, position.y]);
        }
        return path;
    }
    explore(location, direction) {
        const newPath = location.path.slice();
        newPath.push(direction);
        let {
            x,
            y
        } = location;
        switch (direction) {
        case "North":
            y--;
            break;
        case "East":
            x--;
            break;
        case "South":
            y++;
            break;
        case "West":
            x++;
            break;
        default:
            break;
        }
        const newLocation = {
            x: x,
            y: y,
            path: newPath,
            status: this.status({
                x: x,
                y: y
            })
        };
        if (newLocation.status === "Valid") {
            this.grid[newLocation.x][newLocation.y] = "Visited";
        }
        return newLocation;
    }
    status(location) {
        switch (true) {
        case location.x < 0:
        case location.x >= this.grid.length:
        case location.y < 0:
        case location.y >= this.grid[0].length:
            return "Invalid";
        case this.grid[location.x][location.y] === "Goal":
            return "Goal";
        case this.grid[location.x][location.y] !== "Empty":
            return "Blocked";
        default:
            return "Valid";
        }
    }
}