function rectangle(x, y, size, width, height) {
    return {
        x: x,
        y: y,
        left: x - size * width,
        right: x + size * width,
        top: y - size * height,
        bottom: y + size * height
    };
}

function isColliding(wall, entity) {
    let withinLeft = entity.x < wall.left,
        withinRight = entity.x > wall.right,
        withinTop = entity.y < wall.top,
        withinBottom = entity.y > wall.bottom;
    return {
        collides: withinLeft || withinRight || withinBottom || withinTop,
        left: withinLeft,
        right: withinRight,
        top: withinTop,
        bottom: withinBottom
    };
}

module.exports = {
    rectangle: rectangle,
    isColliding: isColliding
};