module.exports = function(defs, g) {
    const output = {};
    // USA Carriers - Manual Control
    output["langely"] = {
        name: "Langely",
        tier: 1,
        branch: "American",
        hullInfo: {
            width: .525,
            length: 1.875,
            leftSpots: 4,
            rightSpots: 4,
            leftMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.775, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            },
            rightMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.775, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            }
        },
        aviation: [{
            type: "diveBomb",
            name: "Dive Bomber",
            size: 3,
            payload: 1,
            explosionStats: {
                damage: 4 / 3,
                size: 1 / 3
            }
        }]
    };
    output["independence"] = {
        name: "Independence",
        tier: 2,
        branch: "American",
        hullInfo: {
            width: .525,
            length: 2,
            leftSpots: 5,
            rightSpots: 5,
            leftMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.8, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            },
            rightMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.8, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            }
        },
        aviation: [{
            type: "diveBomb",
            name: "Dive Bomber",
            size: 4,
            payload: 1,
            explosionStats: {
                damage: 5 / 4,
                size: 1 / 4
            }
        }, {
            type: "torpedo",
            name: "Torpedo Bomber",
            size: 3,
            payload: 1,
            ammoStats: {
                damage: 2 / 5
            },
            spawnStats: {
                health: 5 / 4,
                speed: 4 / 5
            }
        }]
    };
    output["lexington"] = {
        name: "Lexington",
        tier: 3,
        branch: "American",
        hullInfo: {
            width: .55,
            length: 2,
            leftSpots: 7,
            rightSpots: 7,
            leftMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.8, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            },
            rightMount: {
                antiAircraft: true,
                stats: [g.cvAntiAircraft, [.8, 1, .5, 1, 1.1, 1, 1, 1.3, 1.3, 1.05, 1, .6, 1]]
            },
            mounts: {
                positions: [
                    [1.75, 7, 1.5, 0, 270, 1],
                    [1.75, 5, 1.5, 0, 270, 1],
                    [1.75, 4, -1.5, 180, 270, 1],
                    [1.75, 2, -1.5, 180, 270, 1]
                ],
                turretData: {
                    positions: [-5, 5]
                }
            }
        },
        aviation: [{
            type: "diveBomb",
            name: "Dive Bomber",
            size: 4,
            payload: 2,
            explosionStats: {
                damage: 5 / 4,
                size: 1 / 4
            }
        }, {
            type: "torpedo",
            name: "Torpedo Bomber",
            size: 5,
            payload: 1,
            ammoStats: {
                damage: 2 / 5
            },
            spawnStats: {
                health: 5 / 4,
                speed: 4 / 5
            }
        }]
    };
    // USA Carriers - Real Time Strategy
    return output;
}